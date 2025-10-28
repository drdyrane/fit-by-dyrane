export class SoundManager {
  private static sounds: Map<string, HTMLAudioElement> = new Map()
  private static enabled = true

  static init() {
    if (typeof window === "undefined") return

    // Create sound effects
    const sounds = {
      click: this.createBeep(800, 0.1, 0.05),
      success: this.createBeep(1000, 0.15, 0.1),
      error: this.createBeep(400, 0.2, 0.15),
      notification: this.createBeep(600, 0.1, 0.08),
    }

    Object.entries(sounds).forEach(([key, audio]) => {
      this.sounds.set(key, audio)
    })
  }

  private static createBeep(frequency: number, duration: number, volume: number): HTMLAudioElement {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    oscillator.frequency.value = frequency
    oscillator.type = "sine"

    gainNode.gain.setValueAtTime(volume, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration)

    const audio = new Audio()
    audio.volume = volume

    return audio
  }

  static play(soundName: string) {
    if (!this.enabled || typeof window === "undefined") return

    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      const frequencies: Record<string, number> = {
        click: 800,
        success: 1000,
        error: 400,
        notification: 600,
      }

      const durations: Record<string, number> = {
        click: 0.05,
        success: 0.1,
        error: 0.15,
        notification: 0.08,
      }

      oscillator.frequency.value = frequencies[soundName] || 800
      oscillator.type = "sine"

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + (durations[soundName] || 0.05))

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + (durations[soundName] || 0.05))
    } catch (error) {
      console.error("[v0] Sound playback error:", error)
    }
  }

  static toggle() {
    this.enabled = !this.enabled
    return this.enabled
  }

  static isEnabled() {
    return this.enabled
  }
}

// Initialize on client
if (typeof window !== "undefined") {
  SoundManager.init()
}

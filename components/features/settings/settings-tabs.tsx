"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileSettings } from "./profile-settings"
import { PreferencesSettings } from "./preferences-settings"
import { AccountSettings } from "./account-settings"

interface SettingsTabsProps {
  profile: any
  preferences: any
  userEmail: string
}

export function SettingsTabs({ profile, preferences, userEmail }: SettingsTabsProps) {
  return (
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="preferences">Preferences</TabsTrigger>
        <TabsTrigger value="account">Account</TabsTrigger>
      </TabsList>

      <TabsContent value="profile" className="mt-6">
        <ProfileSettings profile={profile} />
      </TabsContent>

      <TabsContent value="preferences" className="mt-6">
        <PreferencesSettings preferences={preferences} />
      </TabsContent>

      <TabsContent value="account" className="mt-6">
        <AccountSettings userEmail={userEmail} />
      </TabsContent>
    </Tabs>
  )
}

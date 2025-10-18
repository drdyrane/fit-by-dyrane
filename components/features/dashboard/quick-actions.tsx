"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { LogMetricsDialog } from "./log-metrics-dialog"

interface QuickActionsProps {
  todayMetrics: any
}

export function QuickActions({ todayMetrics }: QuickActionsProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Log your daily health metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => setIsDialogOpen(true)} className="w-full sm:w-auto">
            <Plus className="mr-2 size-4" />
            {todayMetrics ? "Update Today's Metrics" : "Log Today's Metrics"}
          </Button>
        </CardContent>
      </Card>

      <LogMetricsDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} initialData={todayMetrics} />
    </>
  )
}

import { NoSidebarLayout } from "@/src/components/layout/no-sidebar-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function AuthCodeErrorPage() {
  return (
    <NoSidebarLayout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
              <AlertTriangle className="h-6 w-6 text-destructive" />
            </div>
            <CardTitle>Authentication Error</CardTitle>
            <CardDescription>
              Sorry, we couldn't sign you in. The authentication link may have expired or been used already.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Button asChild className="w-full">
                <Link href="/login">Try signing in again</Link>
              </Button>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/register">Create a new account</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </NoSidebarLayout>
  )
}

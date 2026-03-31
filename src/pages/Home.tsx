import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>

          <Button variant="destructive" size="xs">
            Button
          </Button>
        </div>

        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>

        <br />

        <div>
          <h1 className="font-medium">Links de prueba</h1>

          <Button variant="destructive" size="xs" asChild>
            <Link to="/profile">Profile</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
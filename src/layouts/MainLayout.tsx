import { Outlet } from "react-router-dom"
import { Navbar } from "@/components/ui/Navbar"

export function MainLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="max-w-5xl mx-auto px-[30px] py-6">
        <Outlet />
      </main>
    </div>
  )
}
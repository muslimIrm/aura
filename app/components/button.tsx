
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function ButtonDemo({ href, content, className }: { href: string, content: string, className?: string }) {
  return (


    <Button variant="outline" className={cn("flex flex-wrap items-center gap-2 md:flex-row", className)} asChild>
      <Link href={href}>{content}</Link>
    </Button>



  )
}

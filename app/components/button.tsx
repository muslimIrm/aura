import { ArrowUpIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ButtonDemo({href, content, className}: {href: string, content: string, className?: string}) {
  return (
    <Link href={href} className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button variant="outline" className={className}>{content}</Button>
    </Link>
  )
}

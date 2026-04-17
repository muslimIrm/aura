'use client'

import { AuroraBackground } from "@/components/ui/aurora-background"
import { useRouter } from "next/navigation"
import Header from "./components/header"
import { ButtonDemo } from "./components/button"
import { Button } from "@/components/ui/button"

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    const router = useRouter()

    return (
        <html lang="en">
            <body>
                <AuroraBackground>
                    <div className="relative z-50 flex flex-col items-center justify-center">
                        <Header />
                        <h2>There was something wrong!</h2>
                        <div className="flex gap-2 items-center justify-center">

                            <Button onClick={() => reset()} className="relative z-[60] pointer-events-auto">
                                Try Again
                            </Button>
                            <ButtonDemo content="Go Home" href="/" className="relative z-[60] pointer-events-auto" />
                        </div>
                    </div>
                </AuroraBackground>
            </body>
        </html>
    )
}
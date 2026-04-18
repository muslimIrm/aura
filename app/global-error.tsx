'use client'

import { AuroraBackground } from "@/components/ui/aurora-background"
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
    const message = error.message;
    return (
        <html
            lang="en"
            className={`h-screen antialiased`}
        >
            <body className="min-h-screen flex flex-col">

                    <AuroraBackground>
                        <div className="relative z-50 w-full h-screen! flex flex-col items-center justify-center">
                            <Header />
                            <h2 className="text-2xl mb-2 ">{message? message : "There was something wrong"}!</h2>
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
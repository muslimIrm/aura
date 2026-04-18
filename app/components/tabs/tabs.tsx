
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/ui/tabs"
import AllModels from "./allModels"
import SmartestModels from "./smartestModels"
import { Suspense } from "react"
import { Spinner } from "@/components/ui/spinner"
export function TabsDemo() {
    return (
        <div className="w-full flex items-center justify-center">

            <Tabs defaultValue="all" className="max-w-125 flex">
                <TabsList className=" w-full">
                    <TabsTrigger value="all" className="text-lg">All Models</TabsTrigger>
                    <TabsTrigger value="smartest" className="text-lg">Smartest Model</TabsTrigger>
                </TabsList>
                <TabsContent value="smartest" className="flex flex-col gap-2 max-h-90 overflow-auto">
                    <Suspense fallback={<Spinner/>}>

                        <SmartestModels />
                    </Suspense>
                </TabsContent>

                <TabsContent value="all" className="flex flex-col gap-2 max-h-90 overflow-auto">
                    <Suspense fallback={<Spinner/>}>
                        <AllModels />
                    </Suspense>
                </TabsContent>

            </Tabs>
        </div>
    )
}

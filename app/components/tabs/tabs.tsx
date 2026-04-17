import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import AllModels from "./allModels"
import SmartestModels from "./smartestModels"

export async function TabsDemo() {
    return (
        <div className="w-full flex items-center justify-center">

            <Tabs defaultValue="all" className="max-w-125 flex">
                <TabsList className=" w-full">
                    <TabsTrigger value="all" className="text-lg">All Models</TabsTrigger>
                    <TabsTrigger value="smartest" className="text-lg">Smartest Model</TabsTrigger>
                </TabsList>
                <SmartestModels />

                <AllModels />

            </Tabs>
        </div>
    )
}

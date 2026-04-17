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
import { ButtonDemo } from "../button"
import AllModels from "./allModels"
import SmartestModels from "./smartestModels"

export async function TabsDemo() {
    return (
        <Tabs defaultValue="all" className="w-125 min-w-50">
            <TabsList className=" w-full">
                <TabsTrigger value="all" className="text-lg">All Models</TabsTrigger>
                <TabsTrigger value="smartest" className="text-lg">Smartest Model</TabsTrigger>
            </TabsList>
            <SmartestModels />

            <AllModels />

        </Tabs>
    )
}


import { Suspense } from "react"
import SmartestModelsMap from "./smartestModelsMap";
export const revalidate = 3600;
import { SmrtestModel } from "../types/model";
import Search from "../components/search";
export default async function SmartestModels({searchParams}: {searchParams: Promise<{search?: string}>}) {
    const {search} = await searchParams
    let models: SmrtestModel[] = [];
    try {

        const data = await fetch('https://api.wulong.dev/arena-ai-leaderboards/v1/leaderboard?name=text')
        if (!data.ok) {
            throw new Error(`HTTP error! status: ${data.status}`);
        }
        const jsonData = await data.json()

        models = jsonData.models;
        if(search) {
            models = models.filter(m => m.model.toLowerCase().includes(search.toLowerCase()))
        }
    } catch (error) {
        console.log(error)
        throw error;
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>

            <div className="flex flex-col min-w-full gap-2 max-h-full overflow-auto">
                <Search searchParams={searchParams} path="smartestModels"/>
                {models.length > 0 ? <SmartestModelsMap models={models} /> : <h1 className="text-xl text-gray-600 font-bold">Not Found {search}</h1>}
            </div>
        </Suspense>
    )
}
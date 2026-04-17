
import { Suspense } from "react"
export const revalidate = 3600;
import AllModelsMap from "./allModelsMap";
import { AllModel } from "../types/model";
import Search from "../components/search";
export default async function AllModels({searchParams}: {searchParams: Promise<{ search?: string }>, search?: string}) {
    const {search} = await searchParams;
    let models: AllModel[] = [];
    try {
        const response = await fetch('https://openrouter.ai/api/v1/models');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        models = jsonData?.data
        if(search) {
            models = models.filter(m => m.name.toLowerCase().includes(search.toLowerCase()))
            

        }

    } catch (error) {
        console.error("Fetch failed at:", new Date().toISOString(), error);
        throw error;    
    }
    return (
        <Suspense fallback={<div>Loading...</div>}>

            <div className="flex flex-col gap-2 max-h-full overflow-auto">
               

                <Search searchParams={searchParams} path="models"/>
                {models.length > 0 ? <AllModelsMap models={models} /> : <h1 className="text-xl text-gray-600 font-bold">Not Found {search}</h1>}

            </div>
        </Suspense>
    )
}
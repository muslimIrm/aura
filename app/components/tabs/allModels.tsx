
import { ButtonDemo } from "../button";
import { AllModel } from "@/app/types/model"
export default async function AllModels() {
    let models: AllModel[] = [];
    try {
        const response = await fetch('https://openrouter.ai/api/v1/models', { next: { revalidate: 3600 } });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();

        models = jsonData?.data?.slice(0, 10) || [];

    } catch (error) {
        console.error("Fetch failed at:", new Date().toISOString(), error);
        throw error;

    }
    return (
        <>
            {models.map((m: any, i: number) => (
                <div key={m.id} className="group flex flex-col gap-2 bg-white border rounded-lg hover:border-primary/50 hover:shadow-sm transition-all p-4 mb-2">

                    <div className="flex items-center justify-between gap-4">

                        <div className="flex flex-col w-1/2">
                            <div className="flex items-center gap-2">
                                <h3 className="font-bold text-sm text-slate-800">{m.name}</h3>

                            </div>
                        </div>

                        <div className="w-1/4 text-[10px] bg-slate-50 p-2 rounded-md border border-slate-100">
                            <div className="flex justify-between">
                                <span className="text-gray-400">In:</span>
                                <span className="font-mono">${(m.pricing.prompt * 1000000).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between border-t border-slate-200 mt-1 pt-1">
                                <span className="text-gray-400">Out:</span>
                                <span className="font-mono">${(m.pricing.completion * 1000000).toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="w-1/6 text-right">
                            <div className="text-[11px] font-bold text-slate-700">
                                {Math.round(m.context_length / 1000)}K
                            </div>
                            <div className="text-[9px] text-slate-400 uppercase">Tokens</div>
                        </div>
                    </div>

                    <div className="border-t border-slate-50 pt-2">
                        <p className="text-[11px] text-slate-500 line-clamp-1 leading-relaxed">
                            {m.description}
                        </p>
                    </div>
                </div>
            ))}
            <ButtonDemo href="/models" content="Show More" className="w-full" />
        </>
    )
}
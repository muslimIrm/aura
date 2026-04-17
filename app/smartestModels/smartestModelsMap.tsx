import { SmrtestModel } from "../types/model";


const SmartestModelsMap = ({models}: {models: SmrtestModel[]}) => {
    return (
        models.map((m: SmrtestModel, i: number) => (
            <div key={i} className="group flex flex-col gap-2 bg-white border rounded-lg hover:border-primary/50 hover:shadow-sm transition-all p-4 mb-2">

                <div className="flex items-center justify-between gap-4">

                    <div className="flex flex-col ">

                        <div className="flex items-center gap-3">
                            <div className={`
                                        px-4 py-1 text-[10px] font-black uppercase tracking-widest
                                        bg-slate-100 text-slate-400
                                        rounded-bl-xl shadow-md`}>
                                Rank #{m.rank}
                            </div>
                            <div className="flex items-start gap-2 flex-col">
                                <h3 className="font-bold text-sm text-slate-800">{m.model}</h3>
                                <span className="text-sm text-slate-600 font-mono">{m.vendor}</span>
                            </div>

                        </div>
                    </div>

                    <div className="text-[10px] bg-slate-50 p-2 rounded-md border border-slate-100">
                        <div className="flex justify-between">
                            <span className="text-gray-400">Score: </span>
                            <span className="font-mono"> {m.score.toLocaleString()}</span>
                        </div>
                    </div>


                </div>

            </div>
        ))
    )
}


export default SmartestModelsMap;
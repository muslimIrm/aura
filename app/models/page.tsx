import Container from "../components/container";
import AllModels from "./allModels";


const Page = async ({ searchParams }: { searchParams: Promise<{ search?: string }> }) => {
    const { search } = await searchParams;

    return (
        <div className="w-screen">
            <Container className="flex items-center py-22 gap-2 justify-center h-screen">
                <h1 className="text-4xl font-bold mb-4 text-slate-700">All Models</h1>
                <AllModels search={search} searchParams={searchParams}/>
            </Container>
        </div>
    )
}

export default Page;
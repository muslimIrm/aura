import { ButtonDemo } from "../components/button";
import Container from "../components/container";
import AllModels from "./allModels";


const Page = async ({ searchParams }: { searchParams: Promise<{ search?: string }> }) => {
    const { search } = await searchParams;

    return (
        <div className="w-screen">
            <Container className="flex items-center py-22 gap-2 justify-center h-screen">
                <div className="flex gap-2 text-center mb-2">
                    <ButtonDemo content="<" href="/" />

                    <h1 className="text-4xl font-bold text-slate-700">All Models</h1>
                </div>
                <AllModels search={search} searchParams={searchParams} />
            </Container>
        </div>
    )
}

export default Page;
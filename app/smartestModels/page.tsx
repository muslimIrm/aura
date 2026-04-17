import Container from "../components/container";
import SmartestModels from "./smartestModels";

const Page = async ({ searchParams }: { searchParams: Promise<{ search?: string }> }) => {
    return (

        <div className="w-screen">
            <Container className="flex items-center py-22 gap-2 justify-center h-screen">
                <h1 className="text-4xl font-bold text-slate-700">Smartest Models</h1>
                <SmartestModels searchParams={searchParams} />
            </Container>
        </div>
    )
}

export default Page;
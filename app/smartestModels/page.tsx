import { ButtonDemo } from "../components/button";
import Container from "../components/container";
import SmartestModels from "./smartestModels";

const Page = async ({ searchParams }: { searchParams: Promise<{ search?: string }> }) => {
    return (

        <div className="w-screen h-screen  flex items-center justify-center">
            <Container className="flex items-center py-22 gap-2 justify-center h-full">
                <div className="flex gap-2 text-center mb-2">
                    <ButtonDemo content="<" href="/" />

                    <h1 className="text-4xl font-bold text-slate-700">Smartest Models</h1>
                </div>
                <SmartestModels searchParams={searchParams} />
            </Container>
        </div>
    )
}

export default Page;
import { ButtonDemo } from "./components/button";

export default function NotFound(){
    return (
        <div className="flex items-center justify-center flex-col gap-4 h-screen">
            <div className="flex gap-2 items-center text-center">
            <h1 className="font-bold text-2xl">404 - </h1>
            <h1>Not found</h1>

            </div>
            <p>Could not find requested resource</p>
            <ButtonDemo content="Go Home" href="/"/>
        </div>
    )
}
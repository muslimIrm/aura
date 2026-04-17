import Link from "next/link";
import { ButtonDemo } from "./button";
import Container from "./container";


export default function Header() {
    return (
        <header className="bg-white/10 backdrop-blur-md border-b fixed left-0 top-0 w-full z-50">
            <Container>
                <div className="flex h-16 items-center justify-between py-2">
                    <Link href={"/"} className="text-3xl font-bold text-black font-mono">AURA</Link>
                    {/* <ButtonDemo className="text-lg scale-110 text-black" href="/about" content="About Me" /> */}
                    
                </div>
            </Container>
        </header>
    );
}

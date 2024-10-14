import Link from "next/link";


export default function Header() {
    return(
        <div>
            <ul className="flex flex-row justify-end p-2 gap-4 bg-orange-500 text-3xl font-bold text-blue-500 h-100 w-100 font-Londrina">
                <Link href="/"><li>Home</li></Link>
                <Link href="/html"><li>HTML</li></Link>
                <Link href="/css"><li>CSS</li></Link>
                <Link href="/javascript"><li>Javascript</li></Link>
                <Link href="/typescript"><li>Typescript</li></Link>
                <Link href="/python"><li>Python</li></Link>
                <Link href="/c"><li>C</li></Link>
                <Link href="/c+"><li>C++</li></Link>
                <Link href="/csharp"><li>C#</li></Link>
            </ul>
        </div>
    )
}
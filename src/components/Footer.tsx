import Link from "next/link";


export default function Footer() {
    return(
        <div className="h-500 w-100 p-2 bg-orange-500 text-5xl font-bold text-blue-500 text-center font-Londrina">
            GIAIC (Governor Initiative For Artifical Intelligence & Computing)
            <br/>
            Quarter 2 Assigenment 4 & 5 Combine.
            <ul className="flex p-2 m-3 gap-8 text-center justify-center items-center rounded-xl border-solid border-8 border-yellow-300 hover:border-green-700">
                <Link href="/"><li className="rounded-xl border-double border-8 border-yellow-300 hover:border-black text-green-700 hover:text-red-600 p-2">0</li></Link>
                <Link href="/html"><li className="rounded-xl border-double border-8 border-yellow-300 hover:border-black text-green-700 hover:text-red-600 p-2">1</li></Link>
                <Link href="/css"><li className="rounded-xl border-double border-8 border-yellow-300 hover:border-black text-green-700 hover:text-red-600 p-2">2</li></Link>
                <Link href="/javascript"><li className="rounded-xl border-double border-8 border-yellow-300 hover:border-black text-green-700 hover:text-red-600 p-2">3</li></Link>
                <Link href="/typescript"><li className="rounded-xl border-double border-8 border-yellow-300 hover:border-black text-green-700 hover:text-red-600 p-2">4</li></Link>
                <Link href="/python"><li className="rounded-xl border-double border-8 border-yellow-300 hover:border-black text-green-700 hover:text-red-600 p-2">5</li></Link>
                <Link href="/c"><li className="rounded-xl border-double border-8 border-yellow-300 hover:border-black text-green-700 hover:text-red-600 p-2 ">6</li></Link>
                <Link href="/c+"><li className="rounded-xl border-double border-8 border-yellow-300 hover:border-black text-green-700 hover:text-red-600 p-2">7</li></Link>
                <Link href="/csharp"><li className="rounded-xl border-double border-8 border-yellow-300 hover:border-black text-green-700 hover:text-red-600 p-2">8</li></Link>
                <li className="text-green-700 hover:text-yellow-300 p-2">. . . . ⇒</li>            
            </ul>
            <p>Hope You Like It!</p>
        </div>
    )
}
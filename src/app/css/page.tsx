import Link from "next/link";


export default function CSS() {
  return(
    <div className="bg-css bg-repeat bg-contain w-full h-full">
      <h1 className="text-bold text-orange-500 text-center text-9xl font-Shadow">CSS</h1>
      <p className="text-orange-500 text-6xl font-Permanent">CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.</p>
      <div className=" flex justify-between">
        <Link href="/html"><p className="rounded-lg border-8 border-solid font-extrabold font-Creepster text-3xl p-4 m-6 bg-white text-yellow-400 hover:text-black border-green-600 hover:border-red-500">⇐Previous</p></Link>
        <Link href="/javascript"><p className="rounded-lg border-8 border-solid font-extrabold font-Creepster text-3xl p-4 m-6 bg-white text-yellow-400 hover:text-black border-green-600 hover:border-red-500">Next⇒</p></Link>
      </div>    
    </div>
  );
}
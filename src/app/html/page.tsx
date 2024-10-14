import Link from "next/link";


export default function HTML() {
  return(
    <div className="bg-html bg-repeat bg-contain w-full h-full">
      <h1 className="text-bold text-blue-500 text-center text-9xl font-Shadow">HTML</h1>
      <p className="text-blue-500 text-6xl font-Permanent">HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn - You will enjoy it!.</p>
      <div className=" flex justify-between">
        <Link href="/"><p className="rounded-lg border-8 border-solid font-extrabold font-Creepster text-3xl p-4 m-6 bg-white text-yellow-400 hover:text-black border-green-600 hover:border-red-500">⇐Previous</p></Link>
        <Link href="/css"><p className="rounded-lg border-8 border-solid font-extrabold font-Creepster text-3xl p-4 m-6 bg-white text-yellow-400 hover:text-black border-green-600 hover:border-red-500">Next⇒</p></Link>
      </div> 
    </div>
  );
}
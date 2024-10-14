import Link from "next/link";


export default function Typescript() {
  return(
    <div className="bg-typescript bg-repeat bg-contain w-full h-full">
      <h1 className="text-bold text-black-900 text-center text-9xl font-Shadow">Typescript</h1>
      <p className="text-black-900 text-6xl font-Permanent">TypeScript is JavaScript with added syntax for types.</p>
      <div className=" flex justify-between">
        <Link href="/javascript"><p className="rounded-lg border-8 border-solid font-extrabold font-Creepster text-3xl p-4 m-6 bg-white text-yellow-400 hover:text-black border-green-600 hover:border-red-500">⇐Previous</p></Link>
        <Link href="/python"><p className="rounded-lg border-8 border-solid font-extrabold font-Creepster text-3xl p-4 m-6 bg-white text-yellow-400 hover:text-black border-green-600 hover:border-red-500">Next⇒</p></Link>
      </div> 
    </div>
  );
}
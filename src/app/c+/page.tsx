import Link from "next/link";


export default function CPlus() {
  return(
    <div className="bg-Cplus bg-repeat bg-contain w-full h-full">
      <h1 className="text-bold text-orange-500 text-center text-9xl font-Shadow">C++</h1>
      <p className="text-orange-500 text-6xl font-Permanent">C++ is a popular programming language. C++ is used to create computer programs, and is one of the most used language in game development. C++ was developed as an extension of C, and both languages have almost the same syntax.</p>
      <div className=" flex justify-between">
        <Link href="/c"><p className="rounded-lg border-8 border-solid font-extrabold font-Creepster text-3xl p-4 m-6 bg-white text-yellow-400 hover:text-black border-green-600 hover:border-red-500">⇐Previous</p></Link>
        <Link href="/csharp"><p className="rounded-lg border-8 border-solid font-extrabold font-Creepster text-3xl p-4 m-6 bg-white text-yellow-400 hover:text-black border-green-600 hover:border-red-500">Next⇒</p></Link>
      </div> 
    </div>
  );
}
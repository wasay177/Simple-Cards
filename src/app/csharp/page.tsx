import Link from "next/link";


export default function CSharp() {
  return(
    <div className="bg-Csharp bg-repeat bg-contain w-full h-full">
      <h1 className="text-bold text-orange-500 text-center text-9xl font-Shadow">C#</h1>
      <p className="text-orange-500 text-6xl font-Permanent">C# (C-Sharp) is a programming language developed by Microsoft that runs on the .NET Framework. C# is used to develop web apps, desktop apps, mobile apps, games and much more.</p>
      <div className=" flex justify-between">
        <Link href="/c+"><p className="rounded-lg border-8 border-solid font-extrabold font-Creepster text-3xl p-4 m-6 bg-white text-yellow-400 hover:text-black border-green-600 hover:border-red-500">⇐Previous</p></Link>
        <Link href="/"><p className="rounded-lg border-8 border-solid font-extrabold font-Creepster text-3xl p-4 m-6 bg-white text-yellow-400 hover:text-black border-green-600 hover:border-red-500">⇒Home Page</p></Link>
        
      </div> 
    </div>
  );
}
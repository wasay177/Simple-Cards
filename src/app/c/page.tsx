import Link from "next/link";


export default function C() {
  return(
    <div className="bg-C bg-repeat bg-contain w-full h-full">
      <h1 className="text-bold text-orange-500 text-center text-9xl font-Shadow">C</h1>
      <p className="text-orange-500 text-6xl font-Permanent">C is a general-purpose programming language that has been widely used for over 50 years. C is very powerful; it has been used to develop operating systems, databases, applications, etc.</p>
      <div className=" flex justify-between">
        <Link href="/python"><p className="rounded-lg border-8 border-solid font-extrabold font-Creepster text-3xl p-4 m-6 bg-white text-yellow-400 hover:text-black border-green-600 hover:border-red-500">⇐Previous</p></Link>
        <Link href="/c+"><p className="rounded-lg border-8 border-solid font-extrabold font-Creepster text-3xl p-4 m-6 bg-white text-yellow-400 hover:text-black border-green-600 hover:border-red-500">Next⇒</p></Link>
      </div> 
    </div>
  );
}
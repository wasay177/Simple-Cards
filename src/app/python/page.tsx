import Link from "next/link";


export default function Python() {
  return(
    <div className="bg-python bg-repeat bg-contain w-full h-full">
      <h1 className="text-bold text-yellow-500 text-center text-9xl font-Shadow">Python</h1>
      <p className="text-blue-500 text-6xl font-Permanent">Python is a popular programming language. Python can be used on a server to create web applications.</p>
      <div className=" flex justify-between">
        <Link href="/typescript"><p className="rounded-lg border-8 border-solid font-extrabold font-Creepster text-3xl p-4 m-6 bg-white text-yellow-400 hover:text-black border-green-600 hover:border-red-500">⇐Previous</p></Link>
        <Link href="/c"><p className="rounded-lg border-8 border-solid font-extrabold font-Creepster text-3xl p-4 m-6 bg-white text-yellow-400 hover:text-black border-green-600 hover:border-red-500">Next⇒</p></Link>
      </div> 
    </div>
  );
}
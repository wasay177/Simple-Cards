import Link from "next/link";


export default function Javascript() {
  return(
    <div className="bg-javascript bg-repeat bg-contain w-full h-full">
      <h1 className="text-bold text-green-500 text-center text-9xl font-Shadow">Javascript</h1>
      <p className="text-green-500 text-6xl font-Permanent">JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn.</p>
      <div className=" flex justify-between">
        <Link href="/css"><p className="rounded-lg border-8 border-solid font-extrabold font-Creepster text-3xl p-4 m-6 bg-white text-yellow-400 hover:text-black border-green-600 hover:border-red-500">⇐Previous</p></Link>
        <Link href="/typescript"><p className="rounded-lg border-8 border-solid font-extrabold font-Creepster text-3xl p-4 m-6 bg-white text-yellow-400 hover:text-black border-green-600 hover:border-red-500">Next⇒</p></Link>
      </div> 
    </div>
  );
}
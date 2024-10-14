import Image from "next/image";
import Link from "next/link";
 
export default function Home() {
  return (
    <div className="parentContainer">
      <div className="childContainer bounce-bottom">
        <div className="imgecontainer">
        <Image src="/html.jfif" alt="html" width={250} height={200} className="p-1 ml-1 rounded-2xl"/> 
        <h1 className="title">HTML <br/> (Hyper Text Markup Language)</h1>
        <p className="description">HTML is the standard markup language for Web pages. . . .</p>
        <Link href="/html"><button className="readMore">Read More . . .</button></Link>  
        </div>
      </div>
      <div className="childContainer bounce-bottom">
        <div className="imgecontainer">
        <Image src="/css.jfif" alt="css" width={200} height={200} className="p-1 ml-7 rounded-2xl"/>  
        <h1 className="title">CSS <br/> (Cascading Style Sheet)</h1>
        <p className="description">CSS is the language we use to style an HTML document. . . .</p>
        <Link href="/css"><button className="readMore">Read More . . .</button></Link>  
        </div>
      </div>
      <div className="childContainer bounce-bottom">
        <div className="imgecontainer">
        <Image src="/javascript 1.jfif" alt="javascript" width={200} height={200} className="p-1 ml-8 rounded-2xl"/>
        <h1 className="title">Javascript</h1>
        <p className="description">JavaScript is the world's most popular programming language. . . .</p>
        <Link href="/javascript"><button className="readMore">Read More . . .</button></Link>  
        </div>
      </div>
      <div className="childContainer bounce-bottom">
        <div className="imgecontainer">
        <Image src="/typescript.png" alt="typescript" width={200} height={200} className="p-1 ml-7 rounded-2xl"/>
        <h1 className="title">Typescript</h1>
        <p className="description">TypeScript is JavaScript . . .</p>
        <Link href="/typescript"><button className="readMore">Read More . . .</button></Link>  
        </div>
      </div>
      <div className="childContainer bounce-bottom">
        <div className="imgecontainer">
        <Image src="/python 1.png" alt="python" width={200} height={200} className="p-1 ml-8 rounded-2xl"/>
        <h1 className="title">Python</h1>
        <p className="description">Python is a popular programming language. . . .</p>
       <Link href="/python"><button className="readMore">Read More . . .</button></Link>  
        </div>
      </div>
      <div className="childContainer bounce-bottom">
        <div className="imgecontainer">
        <div className="flex">
        <Image src="/c.jfif" alt="c" width={200} height={200} className="p-1 ml-8 rounded-2xl"/>
        </div>
        <h1 className="title">C</h1>
        <p className="description">C is a general-purpose programming language . . .</p>
        <Link href="/c"><button className="readMore">Read More . . .</button></Link>  
        </div>
      </div>
      <div className="childContainer bounce-bottom">
        <div className="imgecontainer">
        <div className="flex">
        <Image src="/c++.jfif" alt="c++" width={200} height={200} className="p-1 ml-7 rounded-2xl"/>
        </div>
        <h1 className="title">C++</h1>
        <p className="description">C++ is a popular programming language. . . .</p>
        <Link href="/c+"><button className="readMore">Read More . . .</button></Link>  
        </div>
      </div>
      <div className="childContainer bounce-bottom">
        <div className="imgecontainer">
        <div className="flex">
        <Image src="/c1.jfif" alt="c1" width={200} height={200} className="p-1 ml-8 rounded-2xl"/>
        </div>
        <h1 className="title">C#</h1>
        <p className="description">C# (C-Sharp) is a programming language . . .</p>
        <Link href="/csharp"><button className="readMore">Read More . . .</button></Link>  
        </div> 
      </div> 
      <div className="gap-10 ml-10 mt-96">
        <Link href="/html"><p className="rounded-lg border-8 border-solid font-extrabold font-Creepster text-3xl p-4 m-6 bg-white text-yellow-400 hover:text-black border-green-600 hover:border-red-500">Next⇒</p></Link>
      </div>
    </div>      
  );
}

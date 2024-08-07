import Image from "next/image"

export default function Home() {
  return (
    <>
    <div className="h-screen bg-black">
      <div id="navbar" className="h-1/6 flex items-center">
        <img src="/Logo.png" className="h-12 w-42 px-12"></img>
        <div className="basis-1/4"></div>
        <h1 className="font-monument px-4 text-white">HOME</h1>
        <h1 className="font-monument px-4 text-white">ABOUT</h1>
        <h1 className="font-monument px-4 text-white">GET INVOLVED</h1>
        <h1 className="font-monument px-4 text-white">PORTFOLIO</h1>
        <h1 className="font-monument px-4 text-white">MEET US</h1>
        <h1 className="font-monument px-4 text-white">EVENTS</h1>
        <h1 className="font-monument px-4 text-white">FAQ</h1>
      </div>
      <div className="h-3/6 bg-white flex">
        <div className="basis-7/12 flex-col bg-black">
          <div>
            <h1>
              
            </h1>
          </div>
          <div className="bg-white">

          </div>
        </div>
        <div>

        </div>
      </div>
      
    </div>
    </>
  );
}

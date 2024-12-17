import { DeleteIcon, Share, TwitterIcon, YoutubeIcon } from "./Icons";

interface CardProps{
    title:string;
    link:string;
    type:"twitter" | "youtube"
}

export function Card({link, type,title}:CardProps){

    
    return (
        <div> 
    <div className=" p-4 bg-white rounded-md 
    border-gray-100 max-w-72 border min-h-48 min-w-48 shadow-md ">
           <div className="flex justify-between">
            <div className="flex p-2 items-center text-md">
              <div className="p-2 text-gray-500">
                {type==='youtube' && <span className="text-red-500"><YoutubeIcon/></span>}
                {type==='twitter' && <TwitterIcon/>}
              </div >
                {title}
            </div>
            <div className="flex p-2 items-center">
                  <div className="p-2 text-gray-500">
                  <a href={link} target="_blank">
                  <Share/>
                  </a>
                  </div>
                  <div className="p-2 text-gray-500 cursor-pointer">
                  <DeleteIcon/>
                  </div>
            </div>
           </div>
           <div className="pt-4">
            { type === "youtube" &&  <iframe className="w-full"  src={link.replace("watch", "embed").replace("?v=","/")} title="YouTube video player"
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> }
           
             {type === "twitter" && <blockquote className="twitter-tweet">
                <a href={link.replace("x","twitter")}></a> 
               
                </blockquote> }
          </div>
           

    </div>
    </div>
    )
}
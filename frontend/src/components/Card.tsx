import { DeleteIcon, DocumentIcon, LinkIcon, Share, TwitterIcon, YoutubeIcon } from "./Icons";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube" | "Document" | "Link";
  tags:string[]
  _id: string;
  deleteContent : (id: string) => void;
  isAdmin?:boolean
}

export function Card({ link, type, title, _id, deleteContent,isAdmin, tags }: CardProps) {
  const onDelete = () => deleteContent(_id);

  const transformLink = () => {
    if (type === "youtube") {
      return link.replace("watch", "embed").replace("?v=", "/");
    }
    if (type === "twitter") {
      return link.replace("x", "twitter");
    }
    return link;
  };

  return (
    <div>
      <div className="p-4 bg-white rounded-md border-gray-100 max-w-72 border min-h-48 min-w-48 shadow-md">
        <div className="flex justify-between">
          <div className="flex p-2 items-center text-md">
            <div className="p-2 text-gray-500">
              {type === "youtube" && (
                <span className="text-red-500">
                  <YoutubeIcon />
                </span>
              )}
              {type === "twitter" && <TwitterIcon />}
              {type === "Document" && <DocumentIcon />}
              {type === "Link" && <LinkIcon />}
            </div>
            {title}
          </div>
          <div className="flex p-2 items-center">
            <div className="p-2 text-gray-500">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Share />
              </a>
            </div>
            {
              isAdmin ?<div className="p-2 text-gray-500 cursor-pointer" onClick={onDelete}>
              <DeleteIcon />
            </div> : ''
            }
            
          </div>
        </div>
        <div className="pt-4">
          {type === "youtube" && (
            <iframe
              className="w-full"
              src={transformLink()}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={transformLink()}></a>
            </blockquote>
          )}
          {type==="Document" && (
            <p className="text-blue-700 font-semibold pb-3 hover:text-green-500 hover:underline cursor-pointer "><a href={link} target="_blank">Open document</a> </p>
          )

          }
           {type==="Link" && (
            <p className="text-blue-700 font-semibold pb-3  hover:text-green-500 hover:underline cursor-pointer "><a  href={link} target="_blank">Go to Original Link</a> </p>
          )

          }
        </div>
        <div className="flex gap-2">
          {
            tags.map((item)=>{
              return(
                <p className="bg-slate-300 rounded-lg text-blue-500 p-1 font-semibold text-sm cursor-pointer hover:underline">#{item}</p>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

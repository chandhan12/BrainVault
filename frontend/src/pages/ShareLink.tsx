import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { Card } from "../components/Card";

interface Content {
  _id: string;
  link: string;
  title: string;
  type: string; 
  tags:string[]
}

const ShareLink = () => {
  const { id } = useParams();
  const [contents, setContents] = useState<Content[]>([]);
  const [userName,setUserName]=useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/brain/${id}`);
        setContents(response.data.content || []);
        setUserName(response.data.user)
      } catch (error) {
        console.error("Failed to fetch content:", error);
      }
    };
    fetchData();
  }, [id]);

  const deleteContent = () => {
    
  };



  return (
    <div className="bg-slate-200 text-center">
      <h1 className="text-lg font-bold">Share Link Page</h1>
      <p>userName: {userName}</p>
      <div className="flex gap-4 flex-wrap">
        {contents.map(({ type, link, title, _id,tags }) => (
          <Card
            deleteContent={deleteContent}
            key={_id}
            type={type as "youtube" | "twitter" } 
            link={link}
            title={title}
            _id={_id}
            isAdmin={false}
            tags={tags}
          />
        ))}
      </div>
    </div>
  );
};

export default ShareLink;

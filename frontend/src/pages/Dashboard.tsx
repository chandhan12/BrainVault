import { useEffect, useState } from 'react';

import { Button } from '../components/Button';
import { Card } from '../components/Card';
import CreateContentModel from '../components/CreateContentModel';
import { Plus, Share } from '../components/Icons';
import SideBar from '../components/SideBar';
import { useContent } from '../hooks/useContent';
import { BACKEND_URL } from '../config';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { activeTab } from '../atoms';

function Dashboard() {
    const [modelOpen, setModelOpen] = useState(false);
    const { contents, fetchContent } = useContent();
    const activeTabValue = useRecoilValue(activeTab);

    useEffect(() => {
        fetchContent(); 
    }, [modelOpen]);



    const filteredContents = contents.filter(({ type }) => {
        return activeTabValue === '' || type === activeTabValue;
    });
    
    const deleteContent =  (id: string) => {
        const contentId = id;
      const nice=async ()=>{
        try {
            const response = await axios.delete(`${BACKEND_URL}/api/v1/content/one`, {
              data: {
                contentId,
              },
              headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
              },
            });
        
            console.log("Delete successful:", response.data);
          } catch (error) {
            console.error("Error deleting content:", error);
          }
      }
      nice()
     
      };
      
    return (
        <div>
            <SideBar />
            <div className="p-4 ml-72 min-h-screen bg-slate-200 border-l-2">
                <CreateContentModel
                    open={modelOpen}
                    onClose={() => {
                        setModelOpen(false);
                    }}
                />
                <div className="flex justify-end">
                    <Button
                        variant="primary"
                        text="Add content"
                        startIcon={<Plus />}
                        onClick={() => {
                            setModelOpen(true);
                        }}
                    />
                    <Button
                        variant="secondary"
                        text="Share Brain"
                        startIcon={<Share />}
                        onClick={async () => {
                            const response = await axios.post(
                                `${BACKEND_URL}/api/v1/brain/share`,
                                { share: true },
                                {
                                    headers: {
                                        authorization: `Bearer ${localStorage.getItem('token')}`,
                                    },
                                }
                            );
                            const shareLink = `${window.location.origin}/brain/share/${response.data.hash}`;
                            alert(shareLink);
                        }}
                    />
                </div>

                <div className="flex gap-4 flex-wrap">
                    {filteredContents.map(({ type, link, title,_id,tags }) => {
                        return <Card tags={tags} isAdmin={true} deleteContent={deleteContent} key={link} type={type} link={link} title={title} _id={_id}/>;
                    })}
                    <Card isAdmin={true} type={'Document'} link={'https://heroicons.com/'} title='heroicons document'_id={'jd46d46d84'} tags={['icons','devlopment']} deleteContent={deleteContent}/>
                    <Card isAdmin={true} type={'Link'} link={'https://heroicons.com/'} title='heroicons document'_id={'jd46d46d84'} tags={['icons','javascript']} deleteContent={deleteContent}/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

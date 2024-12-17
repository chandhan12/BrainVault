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
        fetchContent(); // Properly call fetchContent
    }, [modelOpen]);

    console.log('Active Tab:', activeTabValue); // Log active tab value
    console.log('Contents:', contents); // Log contents for debugging

    const filteredContents = contents.filter(({ type }) => {
        return activeTabValue === '' || type === activeTabValue;
    });

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
                            const shareLink = `http://localhost:3000/api/v1/brain/${response.data.hash}`;
                            alert(shareLink);
                        }}
                    />
                </div>

                <div className="flex gap-4 flex-wrap">
                    {filteredContents.map(({ type, link, title }) => {
                        return <Card key={link} type={type} link={link} title={title} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

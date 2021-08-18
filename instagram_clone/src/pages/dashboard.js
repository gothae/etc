import { lazy, useEffect } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Timeline from "../components/timeline";

export default function Dashboard(){
    useEffect(()=>{
        document.title = 'Instagram';
    },[]);

    return(
        <div className = "bg-gray-background">
            <Header />
            <div className="grid grid-cols-3 gap-4">
                <Timeline />
                <Sidebar />
            </div>
        </div>
    );
}
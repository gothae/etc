import useUser from "../../hooks/use-user";
import User from './user';
import Suggestions from './suggestions';

export default function Sidebar(){
    const { 
        user : {fullName, username, userId}
    } = useUser();

    console.log('index,user',username);
    // user가 undefined라서 User componenet에서 Skeleton만뜸
    
    return (
        <div className="p-4">
            <User username={username} fullName={fullName}/>
            <Suggestions userId={userId}/>
        </div>
    );
}
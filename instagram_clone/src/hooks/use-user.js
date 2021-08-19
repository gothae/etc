import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { getUserByUserId } from "../services/firebase";

export default function useUser() {
    const [activeUser, setActiveUser] = useState({});
    const { user } = useContext(UserContext);

    useEffect(() => {
        async function getUserObjByUserId() {
            const [reponse] = await getUserByUserId(user.uid);
            // const [response] 로 사용하여야 하는가 ? 4:02:30
            setActiveUser(reponse);
        }
        if (user?.uid) {
            getUserObjByUserId();
        }
    }, [user]);

    return { user: activeUser }; 
}

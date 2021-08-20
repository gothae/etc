import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { getPhotos, getUserByUserId } from "../services/firebase";

export default function usePhotos(){
    const [photos, setPhotos]= useState(null);
    const{
        user: { uid: userId = ''}
    } = useContext(UserContext);

    useEffect(()=>{
        async function getTimelinePhotos(){
            const [{ following }] = await getUserByUserId(userId);
            // object 형태로 return하기 때문에 받아올때 배열ㅇ형식으로 받아야한다
            // 따라서 {following}으로 받으면 undefined가 됨
            let followedUserPhotos = [];

            if(following.length > 0){
                followedUserPhotos = await getPhotos(userId,following);
            }

            followedUserPhotos.sort((a,b) => b.dateCreated - a.dateCreated);
            setPhotos(followedUserPhotos);
        }
        getTimelinePhotos();
    },[userId]);
    
    return {photos};
}
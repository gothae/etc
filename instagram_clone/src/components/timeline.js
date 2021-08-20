
import Skeleton from "react-loading-skeleton";
import usePhotos from "../hooks/use-photos";
import Post from "./post";

export default function Timeline(){
    // 1.유저들 게시글 가져와야함(hook)
    const { photos } = usePhotos();
    // 2.로딩중에는 skeleton 사용
    // 3.게시글(사진)있으면 render
    return (
        <div className="container col-span-2">
            {!photos ? (
                <Skeleton count={4} width={400} height={320} className="mb-5"/>
            ) : photos.length > 0 ? (
                photos.map((content) => <Post key={content.docId} content={content}></Post>)
            ) : (
                <p className="text-center text-2xl">Follow people to see photos!</p>
            )}
        </div>
    );
}
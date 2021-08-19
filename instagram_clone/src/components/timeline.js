
import Skeleton from "react-loading-skeleton";

export default function Timeline(){
    // 1.유저들 게시글 가져와야함(hook)
    // 2.로딩중에는 skeleton 사용
    // 3.게시글(사진)있으면 render
    return (
        <div className="container col-span-2">
            <p>I am the Timeline</p>
        </div>
    );
}
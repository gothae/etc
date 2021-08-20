import { useRef } from "react";
import PropTypes from 'prop-types';
import Header from "./header";
import Image from './image';

export default function Post({content}){
    // components
    // header, image, like, comment, footer, comments
    return(
        <div className="rounded col-span-4 border bg-white border-gray-primary mb-12">
            <Header username={content.username} />
            <Image src={content.imageSrc} caption = {content.caption}/>
        </div>
    );
}

Post.propTypes = {
    content : PropTypes.shape({
        username : PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
        docId: PropTypes.string.isRequired,
        userLikedPhoto: PropTypes.bool.isRequired,
        likes: PropTypes.array.isRequired,
        commnets: PropTypes.array.isRequired,
        dateCreated: PropTypes.number.isRequired
    })
};
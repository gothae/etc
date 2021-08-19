import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function SuggestedProfile({userDocId, username, profileId, userId}){
    const [followed, setFollowed] = useState(false);

    // 팔로우를 누른 유저의 following array update
    // 눌려진 유저의 follower array update 해야한다
    async function handelFollowUser(){
        setFollowed(true);
    }
    return !followed ? (
        <div className="flex flex-row items-center align-items justify-between">
            <div className="flex items-center justify-between">
                <img 
                    className="rounded-full w-8 flex mr-3"
                    src={`/images/avatars/${username}.jpg`}
                    alt=""
                />
                <Link to={`/p/${username}`}>
                    <p className="font-bold text-sm">{username}</p>
                </Link>
            </div>
            <div>
            <button
                className="text-xs font-bold text-blue-medium"
                type="button"
                onClick={()=> console.log('Follow this ',{username})}
            >
            Follow
            </button>
            </div>
        </div>
    ) : null;
}

SuggestedProfile.propTypes={
    userDocId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profileId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
}
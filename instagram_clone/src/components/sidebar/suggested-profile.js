import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { updateLoggedInUserFollowing, updateFollowedUserFollowers} from '../../services/firebase';
export default function SuggestedProfile({ profileDocId, username, profileId, userId, loggedInUserdocId}){
    const [followed, setFollowed] = useState(false);

    async function handleFollowUser(){
        setFollowed(true);

    // 팔로우를 누른 유저의 following array update
        await updateLoggedInUserFollowing(loggedInUserdocId, profileId, false);
    // 눌려진 유저의 follower array update 해야한다
        await updateFollowedUserFollowers(profileDocId, userId, false);
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
                onClick={handleFollowUser}
            >
            Follow
            </button>
            </div>
        </div>
    ) : null;
}

SuggestedProfile.propTypes={
    profileDocId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profileId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    loggedInUserdocId : PropTypes.string.isRequired
}
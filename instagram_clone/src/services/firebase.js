import { firebase, FieldValue } from '../lib/firebase';

export async function doesUsernameExist(username){
    const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

    // 있으면 []  없으면 false
    return result.docs.map((user) => user.data().length > 0);
}

export async function getUserByUsername(username) {
    const result = await firebase
        .firestore()
        .collection('users')
        .where('username', '==', username)
        .get();

    // 있으면 []  없으면 false
    return result.docs.map((item) => ({
        ...item.data(),
        docId : item.id
    }));
}

// get user from the firestore where userId === userId(passed from the auth)
export async function getUserByUserId(userId){
    const result = await firebase.firestore().collection('users').where('userId', '==', userId).get();
    const user = result.docs.map((item) => ({
        ...item.data(),
        docId : item.id
    }));

    return user;
}

export async function getSuggestedProfiles (userId, following){
    const result = await firebase.firestore().collection('users').limit(10).get();
    
    return result.docs
    .map((user) => ( {...user.data(), docId: user.id}))//일단 다나오게
    .filter((profile) => profile.userId !== userId && !following.includes(profile.userId));
    //다나온 user중에서 내거 제외 && 이미 following중인 것 포함 안하게 filter
}

export async function updateLoggedInUserFollowing(
    loggedInUserdocId, // 로그인 되어있는 유저의 document id
    profileId, // 팔로우하려고 누른 사람의 profile id
    isFollowingProfile) // 팔로우 되어있는지 boolean
    {
    return firebase.firestore().collection('users').doc(loggedInUserdocId).update({
        following : isFollowingProfile
        ? FieldValue.arrayRemove(profileId) //되어있는데 또누른거니까 언팔
        : FieldValue.arrayUnion(profileId) // 팔로우하니까 추가
    })
}

export async function updateFollowedUserFollowers(
    profileDocId, 
    loggedInUserdocId,
    isFollowingProfile) 
{
    return firebase.firestore().collection('users').doc(profileDocId).update({
        followers: isFollowingProfile
            ? FieldValue.arrayRemove(loggedInUserdocId) //되어있는데 또누른거니까 언팔
            : FieldValue.arrayUnion(loggedInUserdocId) // 팔로우하니까 추가
    })
}

export async function getPhotos(userId, following){
    const result = await firebase
    .firestore()
    .collection('photos')
    .where('userId', 'in', following)
    .get();

    const userFollowedPhotos = result.docs.map((photo)=>({
        ...photo.data(),
        docId : photo.id
    }));

    const photosWithUserDetails = await Promise.all(
        userFollowedPhotos.map(async(photo)=>{
            let userLikedPhoto = false;
            if(photo.likes.includes(userId)){
                userLikedPhoto = true;
            };
            const user = await getUserByUserId(photo.userId)
            const {username} = user[0];

            return {username, ...photo, userLikedPhoto};
        })
    )
    return photosWithUserDetails;
}

// profile용 
export async function getUserPhotosByUsername(username){
    const [user] = await getUserByUsername(username);
    const result = await firebase
        .firestore()
        .collection('photos')
        .where('userId','==',user.userId)
        .get();

        return result.docs.map((item)=>({
            ...item.data(),
            docId : item.id
        }));

}

export async function isUserFollowingProfile(loggedInUserUsername, profileUserId){
    const result = await firebase
        .firestore()
        .collection('users')
        .where('username','==',loggedInUserUsername)
        .where('following','array-contains',profileUserId)
        .get();
    
    const [response = {}] = result.docs.map((item) => ({
        ...item.data(),
        docId : item.id
    }));

}
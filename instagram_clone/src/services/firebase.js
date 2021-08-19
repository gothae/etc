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
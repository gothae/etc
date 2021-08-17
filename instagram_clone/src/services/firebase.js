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
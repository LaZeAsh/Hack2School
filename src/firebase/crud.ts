import * as firestore from 'firebase-admin';
import {app} from './index'

export async function readData(collection: string, key: string) {
    let DATA = await firestore.firestore().collection(collection).doc(key).get();
    if(DATA.exists) {
        let _data = DATA.data();
        return _data;
    }
}

export async function writeData(data: any, collection: string, key: string) {
    let DATA = await firestore.firestore().collection(collection).doc(key).set(data);
    return true;
}

export {
    app
}

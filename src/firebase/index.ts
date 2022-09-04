import * as admin from 'firebase-admin';
import * as serviceAccount from './serviceAccountKey.json';

let app = admin.initializeApp({
  //@ts-ignore
  credential: admin.credential.cert(serviceAccount)
});

export {app}

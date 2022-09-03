import { Storage } from '@google-cloud/storage';

const storage = new Storage({keyFilename: 'src/gcloudKey.json'});
const bucketName = 'hack-for-school-hackathon';
const fileName = 'testdestination';

async function getMetadata() {
    const [metadata] = await storage
    .bucket(bucketName)
    .file(fileName)
    .getMetadata();
}

console.log(getMetadata())
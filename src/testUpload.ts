import { Storage } from '@google-cloud/storage';


// const storage = new Storage();
// console.log(storage)

const storage = new Storage({keyFilename: 'gcloudKey.json'});
// console.log(storage)

const bucketName = 'hack-for-school-hackathon';


async function uploadFile() {
    const options = {
      destination: "testDestination",
    };  
    await storage.bucket(bucketName).upload("testDestination", options);
    console.log(`${testDestination} uploaded to ${bucketName}`);
  }
  
  uploadFile().catch(console.error);
  
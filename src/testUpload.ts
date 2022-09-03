import { Storage } from '@google-cloud/storage';

const storage = new Storage({keyFilename: 'src/gcloudKey.json'});
const bucketName = 'hack-for-school-hackathon';

// upload file
const filePath = "src/testpdf.pdf"
const destFileName = 'testdestination'

async function uploadFile() {
    const options = {
      destination: destFileName,
    };  
    await storage.bucket(bucketName).upload(filePath, options);
    console.log(`${filePath} uploaded to ${bucketName}`);
  }
  
// uploadFile().catch(console.error);

// ocr on a file 
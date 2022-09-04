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
// import vision from '@google-cloud/vision'
// const client = new vision.ImageAnnotatorClient();

// const inputConfig = {
//     // Supported mime_types are: 'application/pdf' and 'image/tiff'
//     mimeType: 'application/pdf',
//     gcsSource: {
//       uri: gcsSourceUri,
//     },
//   };
//   const outputConfig = {
//     gcsDestination: {
//       uri: gcsDestinationUri,
//     },
//   };
//   const features = [{type: 'DOCUMENT_TEXT_DETECTION'}];
//   const request = {
//     requests: [
//       {
//         inputConfig: inputConfig,
//         features: features,
//         outputConfig: outputConfig,
//       },
//     ],
//   };
  
//   const [operation] = await client.asyncBatchAnnotateFiles(request);
//   const [filesResponse] = await operation.promise();
//   const destinationUri =
//     filesResponse.responses[0].outputConfig.gcsDestination.uri;
//   console.log('Json saved to: ' + destinationUri);
  
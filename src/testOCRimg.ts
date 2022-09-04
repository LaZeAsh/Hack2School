const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient({ keyFilename: 'src/gcloudKey.json' });

// const bucketName = 'Bucket where the file resides, e.g. my-bucket';
// const fileName = 'Path to file within bucket, e.g. path/to/image.png';

// Performs text detection on the gcs file
const [result] = await client.textDetection(`gs://${bucketName}/${fileName}`);
const detections = result.textAnnotations;
console.log('Text:');
detections.forEach(text => console.log(text));

import { Storage } from '@google-cloud/storage';
import vision from '@google-cloud/vision'

const client = new vision.ImageAnnotatorClient({ keyFilename: 'src/gcloudKey.json' });
const storage = new Storage({ keyFilename: 'src/gcloudKey.json' });
const bucketName = 'hack-for-school-hackathon';
const fileName = 'pdf-test.pdf';
const outputPrefix = 'testocr'

// async function getMetadata() {
//     const [metadata] = await storage
//     .bucket(bucketName)
//     .file(fileName)
//     .getMetadata();
// }

const gcsSourceUri = `gs://${bucketName}/${fileName}`;
const gcsDestinationUri = `gs://${bucketName}/}/`;

const inputConfig = {
    // Supported mime_types are: 'application/pdf' and 'image/tiff'
    mimeType: 'application/pdf',
    gcsSource: {
        uri: gcsSourceUri,
    },
};
const outputConfig = {
    gcsDestination: {
        uri: gcsDestinationUri,
    },
};
const features = [{ type: 'DOCUMENT_TEXT_DETECTION' }];
const request = {
    requests: [
        {
            inputConfig: inputConfig,
            features: features,
            outputConfig: outputConfig,
        },
    ],
};

async function test() {
    //@ts-ignore
    const [operation] = await client.asyncBatchAnnotateFiles(request);
    const [filesResponse] = await operation.promise();
    const destinationUri =
        filesResponse.responses[0].outputConfig.gcsDestination.uri;
    console.log('Json saved to: ' + destinationUri);
}

test()
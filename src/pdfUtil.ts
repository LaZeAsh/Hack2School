// call the function while giving me the file name

import { Storage } from '@google-cloud/storage';
import vision from '@google-cloud/vision'

async function processOCR(request: any) {
    //@ts-ignore
    const [operation] = await client.asyncBatchAnnotateFiles(request);
    const [filesResponse] = await operation.promise();
    const destinationUri =
        filesResponse.responses[0].outputConfig.gcsDestination.uri;
    console.log('Json saved to: ' + destinationUri);
}

function download(filePath: string, username: string) {
    
}

// what this function should do
// do ocr on the filepath and then store the text in firebase
// assumes you have the function storeScannedInFB
function uploaded(filePath: string, username: string) {
    const client = new vision.ImageAnnotatorClient({ keyFilename: 'src/gcloudKey.json' });
    const storage = new Storage({ keyFilename: 'src/gcloudKey.json' });
    const bucketName = 'hack-for-school-hackathon';
    const fileName = ;
    const outputPrefix = username

    const gcsSourceUri = `gs://${bucketName}/${fileName}`;
    const gcsDestinationUri = `gs://${bucketName}/${outputPrefix}}/`;

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

    processOCR(request)
}

uploaded()
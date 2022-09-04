import vision from '@google-cloud/vision'
import { app, writeData, readData } from './firebase/crud'

const client = new vision.ImageAnnotatorClient({ keyFilename: 'src/gcloudKey.json' });

export async function getTextFromImage(url: string) {
    const [result] = await client.textDetection(url);
    const detections = result.textAnnotations;
    console.log('Text:', detections);
    var content = ""
    detections!.forEach(text => content += ' ');
    console.log(content)
}

export async function getObjects() {
    const a = await readData('c', 'test3')
    console.log(a)
}

getTextFromImage('https://cdn.discordapp.com/attachments/1015392266866667581/1015775646896627812/unknown.png')
getObjects()
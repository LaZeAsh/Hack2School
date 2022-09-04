import vision from '@google-cloud/vision'
import { app, writeData, readData } from './firebase/crud'

const client = new vision.ImageAnnotatorClient({ keyFilename: 'src/gcloudKey.json' });

export async function getTextFromImage(url: string) {
    const [result] = await client.textDetection(url);
    const detections = result.textAnnotations;
    var content = ""
    detections!.forEach(text => content += text.description + ' ');
    writeData({'text': content},'c','test10')
}

export async function getObjects(url: string) {
    const a = await readData('c', 'test10')
    // console.log(a)
    return a
}

// getTextFromImage('https://cdn.discordapp.com/attachments/1015587106225131601/1015821292198445097/IMG_9853.jpg')
// getObjects('')
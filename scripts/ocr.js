import Tesseract from 'tesseract.js';

export function processImage(file) {
    Tesseract.recognize(file, 'eng')
        .then(({ data: { text } }) => {
            console.log('Extracted text:', text);
        })
        .catch(err => console.error('OCR Error:', err));
}

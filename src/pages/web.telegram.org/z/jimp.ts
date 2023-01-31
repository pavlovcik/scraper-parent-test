import fs from "fs";
import Jimp from "jimp";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const qrCode = require("qrcode-reader");

export default (buffer: Buffer) => {
  if (!buffer) {
    buffer = fs.readFileSync(__dirname + "/index.png");
  }
  return new Promise((resolve, reject) => {
    Jimp.read(buffer, callback);

    function callback(err: any, image: { bitmap: any }) {
      if (err) {
        reject(err);
      }
      const QRCode = new qrCode();
      QRCode.callback = function (err: any, value: { result: any }) {
        if (err) {
          return reject(err);
        }
        resolve(value.result);
      };
      QRCode.decode(image.bitmap);
    }
  });
};

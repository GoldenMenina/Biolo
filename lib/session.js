import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

const SECRET_KEY = "your-secret-key"; // Replace with your secret key

export function encrypt(data) {
  const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY);
  return encryptedData.toString();
}

export function decrypt(encryptedText) {
  const decryptedBytes = CryptoJS.AES.decrypt(encryptedText, SECRET_KEY);
  const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(decryptedData);
}

export function setEncryptedCookie(name, value) {
  const encryptedValue = encrypt(value);

  Cookies.set(name, encryptedValue, { expires: 7 });
}

export function deleteCookie(name) {
  Cookies.remove(name);
}


export function getDecryptedCookie(name) {
  const encryptedValue = Cookies.get(name);
  if (encryptedValue) {
    const decryptedValue = decrypt(encryptedValue);
    return decryptedValue;
  }
  return null;
}

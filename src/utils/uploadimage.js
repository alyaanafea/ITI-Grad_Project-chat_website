import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../config/firebase";

export async function UplaodFile(name_folder, file) {
  try {
    const storageRef = ref(storage, `${name_folder}/${file.name}`);
    const uploadTask = await uploadBytes(storageRef, file);
    const downloadURLImage = await getDownloadURL(uploadTask.ref);
    return downloadURLImage;
  } catch (error) {
    console.log(error);
    return "something error in upload";
  }
}

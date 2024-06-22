import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";



const useUploadImage = async (file: File, area: string): Promise<string> => {
    const storage = getStorage();
    const storageRef = ref(storage, `${area}/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  };

export default useUploadImage;
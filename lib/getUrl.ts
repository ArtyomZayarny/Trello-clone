import { storage } from "@/appwrite";

export const getUrl = async (image: InstanceType<typeof Image>) => {
  const url = storage.getFilePreview(image.bucketId, image.fileId);

  return url;
};

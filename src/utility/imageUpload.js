import axios from "axios";

const imageUpload = async (photo) => {
  const imageFormData = new FormData();
  imageFormData.append("image", photo);
  const res = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API_KEY}`,
    imageFormData
  );
  const imageURL = res.data.data.display_url;
  return imageURL;
};

export default imageUpload;

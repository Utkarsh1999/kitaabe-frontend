import axiosInstance from "./interceptor";

export const ItemApi = {
  uploadItemImages: (formData) => {
    console.log("formData: " + JSON.stringify(formData));
    let fd = new FormData();
    fd.append("image", formData.image);
    return axiosInstance.post("/api/media/upload", fd, {
      headers: {
        "Content-Type": "multipart/form-data;",
      },
    });
  },
  saveItem: (item) => {
    console.log("-----------ITEM: " + JSON.stringify(item));
    return axiosInstance.post("api/item", item);
  },
  getItemByItemId: (itemId) => {
    return axiosInstance.get(`/api/item/id/${itemId}`);
  },
  getItemsByUserId: (userId) => {
    return axiosInstance.get(`/api/item/seller/${userId}`);
  },
};

import axiosInstance from "./interceptor";

export const ItemApi = {
  uploadItemImages: (images) => {
    return axiosInstance.post("", images, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveItem: (item) => {
    return axiosInstance.post("api/item", item);
  },
  getItemByItemId: (itemId) => {
    return axiosInstance.get(`/api/item/id/${itemId}`);
  },
  getItemsByUserId: (userId) => {
    return axiosInstance.get(`/api/item/seller/${userId}`);
  },
};

import axiosInstance from "./interceptor";
// import { CLIENT_ID, CLIENT_SECRET, RESOURCE } from "../Constants/API";

export const CatalogueApi = {
  getCategories: () => {
    return axiosInstance.get("api/category/all");
  },
  getSubCategories: () => {
    return axiosInstance.get("/api/subcategory/all");
  },
};

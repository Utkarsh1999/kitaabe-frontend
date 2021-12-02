import { toast } from "react-toastify";

const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";

export const createRequestTypes = (base) => {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
};

export const action = (type, data = {}) => {
  // console.log("TYPE: ",type," Payload: ",data)

  switch (type) {
    case "SIGNIN_REQUEST":
      toast.info("Signing in...", {
        toastId: type,
      });
      break;
    case "SIGNIN_SUCCESS":
      toast.success("Sign In successfully!!", {
        toastId: type,
      });
      break;
    case "SIGNIN_FAILURE":
      toast.error("Sign In Failed!!", {
        toastId: type,
      });
      break;
    case "SIGNUP_REQUEST":
      toast.info("Signing in...", {
        toastId: type,
      });
      break;
    case "SIGNUP_SUCCESS":
      toast.success("SignUp successfully!!", {
        toastId: type,
      });
      break;
    case "SIGNUP_FAILURE":
      toast.error("SignUp Failed!!", {
        toastId: type,
      });
      break;
    case "UPLOAD_IMAGES_REQUEST":
      toast.info("Uploading Image", {
        toastId: type,
      });
      break;
    case "UPLOAD_IMAGES_SUCCESS":
      toast.success("Image Uploaded successfully!!", {
        toastId: type,
      });
      break;
    case "UPLOAD_IMAGES_FAILURE":
      toast.error("Uploading image Failed!!", {
        toastId: type,
      });
      break;
    case "SAVE_ITEM_REQUEST":
      toast.info("Saving Item...", {
        toastId: type,
      });
      break;
    case "SAVE_ITEM_SUCCESS":
      toast.success("Item Saved successfully!!", {
        toastId: type,
      });
      break;
    case "SAVE_ITEM_FAILURE":
      toast.error("Oops! something went wrong while saving item!!", {
        toastId: type,
      });
      break;
  }

  return { type, payload: data };
};

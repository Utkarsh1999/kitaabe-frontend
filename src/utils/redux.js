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
  if (type.includes("REQUEST")) {
    toast.info("Processing", {
      toastId: type,
    });
  }

  if (type.includes("SUCCESS")) {
    console.log("action:" + type + "data: " + data);
    toast.success("Success!!" + data, {
      toastId: type,
    });
  }

  if (type.includes("FAILURE")) {
    toast.error("Failure!" + data.error, {
      toastId: type,
    });
  }

  return { type, payload: data };
};

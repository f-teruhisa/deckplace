import axios from "axios";

export default axios.create({
  // Add X-Requested-With in header
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const submitContact = async (payload) => {
  const response = await api.post("/contact", payload);
  return response.data;
};

export const submitBooking = async (payload) => {
  const response = await api.post("/bookings", payload);
  return response.data;
};

export default api;

import axios from "axios";

const api = axios.create({ baseURL: "/api" });
export const submitBooking = (data) => api.post("/bookings", data);
export const submitContact = (data) => api.post("/contact", data);
export default api;

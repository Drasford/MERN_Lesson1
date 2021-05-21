import axios from "axios";

const ulr = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(ulr);

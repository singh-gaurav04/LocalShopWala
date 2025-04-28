import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
});

const getCategories = async () => {
  try {
    const response = await axiosClient.get("/categories?populate=*");
    return response;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

const getSliders = () =>
  axiosClient.get("/sliders?populate=*").then((res) => {
    return res.data.data;
  });

  const getCategoryList = () =>
    axiosClient.get("/categories?populate=*").then((res) => {
      return res.data.data;
    });

export default {
  getCategories,
  getSliders,
  getCategoryList
};

const axios = require("axios");
const { promToken } = require("../config");

// 1771742406 - тестовий товар

const axiosInstance = axios.create({
  baseURL: "https://my.prom.ua/api/v1/products",
  headers: {
    Authorization: `Bearer ${promToken}`,
  },
});

const getProductsList = async (req, res) => {
  try {
    const { limit, last_id } = req.query;
    const response = await axiosInstance.get(
      `/list${limit ? `?limit=${limit}` : ""}${
        last_id ? `&last_id=${last_id}` : ""
      }`
    );
    return res.status(200).json({
      status: true,
      error: null,
      payload: response.data.products,
    });
  } catch (error) {
    return res.status(500).json({
      staus: false,
      payload: null,
      error: {
        error: "Error in Prom get products list",
        description: error.toString(),
      },
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axiosInstance.get(`/${id}`);
    return res.status(200).json({
      status: true,
      error: null,
      payload: response.data.product,
    });
  } catch (error) {
    return res.status(500).json({
      staus: false,
      payload: null,
      error: {
        error: "Error in Prom get product by id",
        description: error.toString(),
      },
    });
  }
};

const getTranslationById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axiosInstance.get(`/translation/${id}?lang=uk`);
    return res.status(200).json({
      status: true,
      error: null,
      payload: response.data,
    });
  } catch (error) {
    return res.status(500).json({
      staus: false,
      payload: null,
      error: {
        error: "Error in Prom get product by id",
        description: error.toString(),
      },
    });
  }
};

const updateTranslationById = async (req, res) => {
  try {
    const { product_id, name, keywords, description, lang } = req.body;

    const response = await axiosInstance.put(`/translation`, {
      product_id,
      lang,
      name,
      keywords,
      description,
    });
    if (response.data.status === "success") {
      const translated = await axiosInstance.get(
        `/translation/${product_id}?lang=${lang}`
      );
      return res.status(200).json({
        status: true,
        error: null,
        payload: translated.data,
      });
    }
    return res.status(200).json({
      status: true,
      error: null,
      payload: response.data,
    });
  } catch (error) {
    return res.status(500).json({
      staus: false,
      payload: null,
      error: {
        error: "Error in Prom get product by id",
        description: error.toString(),
      },
    });
  }
};

const updateProductById = async (req, res) => {
  try {    
    const response = await axiosInstance.post("/edit",[{
      ...req.body
    }]);

    return res.status(200).json({
      status: true,
      payload: response.data,
      error: null,
    });
  } catch (error) {
    return res.status(500).json({
      staus: false,
      payload: null,
      error: {
        error: "Error in Prom update product by id",
        description: error.toString(),
      },
    });
  }
};

module.exports = {
  getProductsList,
  getProductById,
  getTranslationById,
  updateTranslationById,
  updateProductById,
};

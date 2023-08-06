const axios = require("axios");

const productsUrl = "/products";

const createAxiosInstance = (token, url) => {
  return axios.create({
    baseURL: `https://my.prom.ua/api/v1/${url}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const getProductsList = async (req, res) => {
  const { limit, last_id } = req.query;
  const query = "";
  if (limit) {
    query = `?limit=${limit}`;
  }
  if (last_id) {
    query = `${limit ? "&" : "?"}last_id=${last_id}`;
  }
  const axiosInstance = createAxiosInstance(req.user.promToken, productsUrl);
  let response;
  try {
    response = await axiosInstance.get(
      `/list${limit ? `?limit=${limit}` : ""}${
        last_id ? `&last_id=${last_id}` : ""
      }`
    );
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
  const list = response?.data?.products;
  const total = list ? list.length : 0;
  return res.status(200).json({
    status: true,
    error: null,
    payload: {
      list,
      total,
    },
  });
};

const getProductById = async (req, res) => {
  const axiosInstance = createAxiosInstance(req.user.promToken, productsUrl);
  const { id } = req.params;
  let response;
  try {
    response = await axiosInstance.get(`/${id}`);
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
  return res.status(200).json({
    status: true,
    error: null,
    payload: response?.data?.product ?? {},
  });
};

const getTranslationById = async (req, res) => {
  const axiosInstance = createAxiosInstance(req.user.promToken, productsUrl);
  const { id } = req.params;
  let response;
  try {
    response = await axiosInstance.get(`/translation/${id}?lang=uk`);
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
  return res.status(200).json({
    status: true,
    error: null,
    payload: response?.data ?? {},
  });
};

const updateTranslationById = async (req, res) => {
  try {
    const axiosInstance = createAxiosInstance(req.user.promToken, productsUrl);
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
    const axiosInstance = createAxiosInstance(req.user.promToken, productsUrl);
    const reqbody = [
      {
        ...req.body,
      },
    ];
    const response = await axiosInstance.post("/edit", reqbody);
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

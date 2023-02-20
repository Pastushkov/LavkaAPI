const Soap = require("../models/soap");

const createSoap = async (req, res) => {
  try {
    const soap = new Soap({
      ...req.body,
    });
    await soap.save();
    return res.status(201).json({
      status: true,
      error: null,
      payload: soap,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      payload: null,
      error: {
        description: error.toString(),
        error: "Error when create soap",
      },
    });
  }
};

const patchSoap = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id)
      return res.status(400).json({
        status: false,
        payload: null,
        error: {
          error: "id params is required",
        },
      });

    let soap = await Soap.findById(id);

    if (!soap)
      return res.status(400).json({
        status: false,
        payload: null,
        error: {
          error: "soap not found",
        },
      });

    soap = await Soap.findOneAndUpdate(
      { id },
      {
        ...req.body,
      },
      {
        new: true,
      }
    );

    await soap.save();

    return res.status(201).json({
      status: true,
      error: null,
      payload: {
        soap,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      payload: null,
      error: {
        description: error.toString(),
        error: "Error when patch soap",
      },
    });
  }
};

const getAllSoap = async (req, res) => {
  try {
    const soaps = await Soap.find();
    return res.status(200).json({
      status: true,
      error: null,
      payload: soaps,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      payload: null,
      error: {
        description: error.toString(),
        error: "Error when get all soap",
      },
    });
  }
};

const getSoapById = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id)
      return res.status(400).json({
        status: false,
        payload: null,
        error: {
          error: "id params is required",
        },
      });

    const soap = await Soap.findById(id);

    if (!soap)
      return res.status(400).json({
        status: false,
        payload: null,
        error: {
          error: "soap not found",
        },
      });

    return res.status(200).json({
      status: true,
      error: null,
      payload: soap,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      payload: null,
      error: {
        description: error.toString(),
        error: "Error when get soap by id",
      },
    });
  }
};

module.exports = {
  createSoap,
  patchSoap,
  getAllSoap,
  getSoapById,
};

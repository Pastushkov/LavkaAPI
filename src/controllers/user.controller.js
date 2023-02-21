const User = require("../models/user");

const removeSecretFields = (array) => {
  return array.map((item) => {
    item.password = null;
    return item;
  });
};

const getUsersList = async (req, res) => {
  try {
    const users = await User.find({ type: "shipper" });
    if (!users)
      return res.status(400).json({
        status: false,
        payload: null,
        error: {
          error: "Users not found",
        },
      });
    return res.status(200).json({
      status: false,
      payload: removeSecretFields(users),
      error: null,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      payload: null,
      error: {
        description: error.toString(),
        error: "Error in get users list",
      },
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res.status(400).json({
        status: false,
        payload: null,
        error: {
          error: "id param required",
        },
      });
    const user = await User.findById(id);
    if (!user)
      return res.status(400).json({
        status: false,
        payload: null,
        error: {
          error: "User not found",
        },
      });
    user.password = null;
    return res.status(200).json({
      status: false,
      payload: user,

      error: null,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      payload: null,
      error: {
        description: error.toString(),
        error: "Error in get user by id",
      },
    });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res.status(400).json({
        status: false,
        payload: null,
        error: {
          error: "id param required",
        },
      });
    const user = await User.findOneAndUpdate(
      { id },
      {
        ...req.body,
      },
      {
        new: true,
      }
    );
    if (!user)
      return res.status(400).json({
        status: false,
        payload: null,
        error: {
          error: "User not found",
        },
      });

    user.password = null;
    return res.status(200).json({
      status: false,
      payload: user,
      error: null,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      payload: null,
      error: {
        description: error.toString(),
        error: "Error in update user by id",
      },
    });
  }
};

const updateUserSelf = async (req, res) => {
  try {
    const { id } = req.user;
    if (!id)
      return res.status(400).json({
        status: false,
        payload: null,
        error: {
          error: "Auth error",
        },
      });

    req.body.type = "shipper";

    const user = await User.findOneAndUpdate(
      { id },
      {
        ...req.body,
      },
      {
        new: true,
      }
    );
    if (!user)
      return res.status(400).json({
        status: false,
        payload: null,
        error: {
          error: "User not found",
        },
      });
    user.password = null;
    return res.status(200).json({
      status: false,
      payload: user,

      error: null,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      payload: null,
      error: {
        description: error.toString(),
        error: "Error in update user self",
      },
    });
  }
};

module.exports = {
  getUserById,
  getUsersList,
  updateUserById,
  updateUserSelf,
};

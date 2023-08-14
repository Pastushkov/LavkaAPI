const jwt = require("jsonwebtoken");
const { jwtSecret, jwtTime } = require("../config");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

const generateAccessToken = (candidate) => {
  const payload = {
    id: candidate.id,
    type: candidate.type,
    promToken: candidate.promToken,
  };
  return jwt.sign(payload, jwtSecret, { expiresIn: jwtTime });
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const candidate = await User.findOne({ email });
    if (!candidate)
      return res.status(400).json({
        status: false,
        payload: null,
        error: {
          error: "incorrect email or password",
        },
        code: 400,
      });

    const isSame = await bcrypt.compare(password, candidate.password);
    if (!isSame)
      return res.status(400).json({
        status: false,
        payload: null,
        error: {
          error: "incorrect email or password",
        },
        code: 400,
      });

    const token = generateAccessToken(candidate);
    return res.status(200).json({
      status: true,
      error: null,
      payload: {
        token,
      },
    });
  } catch (error) {
    const e = "Error while Login";
    return res.status(500).json({
      status: false,
      payload: null,
      error: {
        error: e,
        description: error.toString(),
      },
      code: 500,
    });
  }
};

const register = async (req, res) => {
  try {
    const { email, password, ...body } = req.body;

    const candidate = await User.findOne({ email });

    if (candidate)
      return res.status(400).json({
        status: false,
        payload: null,
        error: {
          error: "User already exist",
        },
        code: 400,
      });

    const user = new User({
      ...body,
      email,
      password: await bcrypt.hash(password, 10),
    });
    await user.save();
    user.password = null;
    return res.status(200).json({
      status: true,
      error: null,
      payload: {
        success: true,
      },
    });
  } catch (error) {
    const e = "Error while create user";
    return res.status(500).json({
      status: false,
      payload: null,
      error: {
        error: e,
        description: error.toString(),
      },
      code: 500,
    });
  }
};

module.exports = {
  login,
  register,
};

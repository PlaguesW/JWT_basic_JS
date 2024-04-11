// check username, password in post(login) request
// if exist create new JWT
// send back to front-end
//setup authentification so only request with JWT can access the dashboard

const jwt = require("jsonwebtoken");
const customAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;
  // mongoose validation
  // Joi
  // check in the controller

  if (!username || !password) {
    throw new CustomAPIError("Please provide email and password", 400);
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, John`,
    secret: `Here is your authorized data, you are lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};

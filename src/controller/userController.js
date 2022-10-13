const userSchema = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const userDetails = async function (req, res) {
  try {
    const newUserSchema = Joi.object().keys({
      userName: Joi.string().required().max(50),
      userEmail: Joi.string().required().email(),
      password: Joi.string().required().min(8).max(20),
    });

    const result = newUserSchema.validate(req.body);
    if (result.error) {
      res
        .status(422)
        .send({ status: false, message: result.error.details[0].message });
    } else {
      const userData = await userSchema.findOne(req.body);
      if (!userData) {
        const data = await userModel.create(req.body);
        res.status(200).send({ status: true, data: data });
      } else {
        res.status(201).send({ status: true, data: userData });
      }
    }
  } catch (error) {
    res.status(400).send({ status: false, message: error.message });
  }
};

const userLogin = async function (req, res) {
  try {
    const newUserSchema = Joi.object().keys({
      userEmail: Joi.string().required().email(),
      password: Joi.string().required().min(8).max(20),
    });
    const result = newUserSchema.validate(req.body);
    if (result.error) {
      res
        .status(422)
        .send({ status: false, message: result.error.details[0].message });
    } else {
      const data = req.body;
      const { userEmail, password } = data;
      const dbData = await userSchema.findOne(req.body);
      if (dbData) {
        const token = jwt.sign(
          {
            userLogin: userEmail,
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
          },
          "this is a key"
        );
        res.setHeader("x-auth-token", token);
        return res
          .status(200)
          .send({
            status: true,
            message: "User login successfull",
            data: data,
          });
      } else {
        res.status(400).send({
          status: false,
          message: "User not registered. Register first",
        });
      }
    }
  } catch (error) {
    res.status(400).send({ status: false, message: error.message });
  }
};

module.exports.userDetails = userDetails;
module.exports.userLogin = userLogin;

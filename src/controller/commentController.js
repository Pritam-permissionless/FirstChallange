const commentModel = require("../models/commentSchema");

const comment = async function (req, res) {
  try {
    const data = await commentModel.create(req.body);

    res.status(200).send({ status: true, data: data });
  } catch (error) {
    res.status(400).send({ status: false, message: error.message });
  }
};

module.exports.comment = comment;

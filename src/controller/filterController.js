const filterModel = require("../models/filterSchema");

const filter = async function (req, res) {
  try {
    // const data = await filterModel.find(req.query);

    res.status(200).send({ status: true, data: req.query});
  } catch (error) {
    res.status(400).send({ status: false, message: error.message });
  }
};

module.exports.filter = filter;

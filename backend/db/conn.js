const mongoose = require('mongoose')

const main = async () => {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect("mongodb+srv://mathtechn:Gtq3rrmpZwdlDEN2@cluster0.ublkkt5.mongodb.net/")
    console.log('Conectato ao db!');
  } catch (error) {
    console.log(error);
  }
}

module.exports = main
// const mongoose = require("mongoose")

import mongoose from "mongoose"

async function connectingDB() {
  try {
    mongoose.connect("mongodb://localhost:27017/blog-app");
    console.log("db running")
  } catch (err) {
    console.error(err)
  }

}

export default connectingDB

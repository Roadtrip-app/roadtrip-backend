const mongoose = require('mongoose');

const connectDB = async (mongoUri) => {
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true, 
	useUnifiedTopology: true
  });
  console.log(`MongoDB connected successfully`);
};

module.exports = { connectDB };
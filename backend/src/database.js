import mongoose from 'mongoose';

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/fashion_inventory';

  try {
    const conn = await mongoose.connect(uri);
    console.log("DB is connected");
  } catch (error) {
    console.error('Error al conectar con MongoDB', error);
    process.exit(1);
  }
};

export default connectDB;

import mongoose from 'mongoose';

export const createMongo = (mongoConfig) => {
  for (const [key, value] of Object.entries(mongoConfig.options)) { //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/e
    mongoose.set(key, value);
  }
  mongoose.connection.on('connected', () => {
    console.log('MongoDB connected successfully');
  });
  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
  });
  mongoose.connect(mongoConfig.host);
}

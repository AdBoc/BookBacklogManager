export const httpConfig = {
  port: 8000,
  ip: '127.0.0.1'
};

export const mongoConfig = {
  host: 'mongodb://localhost/booksUser',
  options: {
    // debug: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
};

export const jwtConfig = {
  options: {
    expiresIn: "30d"
  },
  jwtSecret: 'BZ64nfsxDJ6pgoi'
}
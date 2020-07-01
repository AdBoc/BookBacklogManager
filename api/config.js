export const httpConfig = {
    port: 3000,
    ip: '127.0.0.1'
};

export const mongoConfig = {
    host: 'mongodb://localhost/booksUser',
    options: {
        debug: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
};
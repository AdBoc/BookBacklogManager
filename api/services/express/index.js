import express from 'express';

export const createServer = ({ port, ip }, routes) => {
  const app = express();
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
  });
  app.use(express.json());
  app.use('/api', routes);
  app.listen(port, ip, () => {
    console.log(`Server listening on port: ${port}`)
  })
}
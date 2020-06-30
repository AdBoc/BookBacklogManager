class RouterHandler {
  async test(req, res) {
    console.log('test');
    res.status(200);
  }
}

const routerHandler = new RouterHandler();
export default routerHandler;
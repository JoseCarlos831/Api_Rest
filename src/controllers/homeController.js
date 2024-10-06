// eslint-disable-next-line no-unused-vars
class HomeCrontroller {
  index(req, res) {
    res.json({
      tudoCerto: true,
    });
  }
}

export default new HomeCrontroller();

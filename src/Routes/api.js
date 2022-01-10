const express = require('express');
const router = express.Router();

const UserAuth = require('../middlewares/userAuth');
const PostController = require('../controller/postController')

router.post('/orders', UserAuth, PostController.all);
router.get('/orders', PostController.all);

router.get("/orders/:id", (req, resp) => {
  // Order.findByPk(req.params.id, {
  //   include: [User, { association: Order.OrderItems, include: [OrderItem.Product] }]
  // }).then(o => resp.send(o.dataValues));
});

router.put("/orders/:id", (req, resp) => {
  // Order.findByPk(req.params.id).then( o => {
  //   o.update(req.body).then( (o2) => resp.send(o2.dataValues) );
  // });
});

module.exports = router;
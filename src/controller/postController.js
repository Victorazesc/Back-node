const models = require("../models");
const Order = models.Order;
const User = models.User;
const Product = models.Product;
const OrderItem = models.OrderItem;

class postController {

  // async create (req, res) {

  //   const task = new TaskModel(req.body);
  //   await task.save().then(resp => {
  //     return res.status(200).json(resp);
  //   }).catch(err => {
  //     return res.status(500).json(err);
  //   })

  // }

  // async update (req, res) {
  //   await TaskModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
  //     .then(resp => {
  //       return res.status(200).json(resp);
  //     })
  //     .catch(error => {
  //       return res.status(500).json(error);
  //     })
  // }

  async all (req, res) {
    // Order.create(req.body, { include: [OrderItem] }).then(o => {
    //   res.send(o.dataValues);
    // });

    // Order.findAll().then(o => {
    //   res.send(o);
    // });

  //  const data = await Order.findAll()
   res.send('autenticado');
  //  console.log(req)

    // const users = await Order.findAll();
    // console.log(await order)
    // res.send(Order);
  }

  // async today (req, res) {
  //   await TaskModel
  //     .find({
  //       'macaddress': { '$in': req.params.mac },
  //       'when': { '$gte': startOfDay(current), '$lt': endOfDay(current) }
  //     })
  //     .sort('when')
  //     .then(response => {
  //       return res.status(200).json(response);
  //     })
  //     .catch(error => {
  //       return res.status(500).json(error);
  //     });
  // }

  // async show (req, res) {
  //   await TaskModel.findById(req.params.id).then(response => {
  //     if (response) {
  //       return res.status(200).json(response);
  //     } else {
  //       return res.status(404).json({ error: 'Tarefa não encontrada' });
  //     }
  //   })
  //     .catch(error => {
  //       return res.status(500).json(error);
  //     });
  // }

  // async delete (req, res) {
  //   await TaskModel.deleteOne({ '_id': req.params.id }).then(response => {
  //     return res.status(200).json(response);
  //   })
  //     .catch(error => {
  //       return res.status(500).json(error);
  //     });
  // }

  // async done (req, res) {
  //   await TaskModel.findByIdAndUpdate({ '_id': req.params.id }, { 'done': req.params.done }, { new: true })
  //     .then(resp => {
  //       return res.status(200).json(resp);
  //     })
  //     .catch(error => {
  //       return res.status(500).json(error);
  //     })
  // }


}


module.exports = new postController();
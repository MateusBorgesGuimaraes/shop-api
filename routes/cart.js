const Cart = require('../models/Cart');
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorizationGetCart,
  verifyTokenAndAuthorizationUpdateCart,
} = require('./verifyToken');

const router = require('express').Router();

//CREATE
router.post('/', verifyToken, async (req, res) => {
  try {
    const newCart = new Cart(req.body);
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    if (err.name === 'TokenExpiredError' || err.name === 'JsonWebTokenError') {
      res.status(401).json({ error: 'Invalid or expired token' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

// UPDATE
router.put('/:id', verifyTokenAndAuthorizationUpdateCart, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json('Cart deletado');
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER CART
router.get(
  '/find/:userId',
  verifyTokenAndAuthorizationGetCart,
  async (req, res) => {
    try {
      const cart = await Cart.find({ userId: req.params.userId });
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json(err);
    }
  },
);

//GET ALL
router.get('/', verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

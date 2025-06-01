import userModel from "../models/user.Model.js";

const addToCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    const cartData = userData.cartData || {};

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await userModel.findByIdAndUpdate(req.userId, { cartData });

    res.json({
      success: true,
      message: "Added to cart",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error adding to cart",
    });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    const cartData = userData.cartData || {};
    const currentQty = cartData[req.body.itemId];

    if (currentQty > 1) {
      cartData[req.body.itemId] -= 1;
    } else {
      delete cartData[req.body.itemId];
    }

    await userModel.findByIdAndUpdate(req.userId, { cartData });

    res.json({
      success: true,
      message: "Removed from cart",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error removing from cart",
    });
  }
};

const getCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    const cartData = userData.cartData || {};

    res.json({
      success: true,
      cartData,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error fetching cart",
    });
  }
};

export { addToCart, removeFromCart, getCart };

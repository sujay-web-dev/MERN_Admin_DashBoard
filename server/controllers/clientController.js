import Product from "../models/ProductModel.js";
import ProductStat from "../models/ProductStatModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    console.log("products--->",products);
    const productsWithStats = await Promise.all(
        products.map(async(product) => {
            const stat = await ProductStat.find({
                productId:product._id
            })
            return{
                ...product._doc,
                stat,
            }
        })
    )
    res.status(200).json(productsWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

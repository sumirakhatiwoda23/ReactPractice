import Product from "../models/product";


export const getProducts = async (req, res) => {
try {
    const products=await Product.find({})
    return res.status(200).json(products)
    
} catch (error) {
    return res.status(400).json({
        message: err.message
    })
}
}


export const getProduct = (req, res) => {
  return res.status(200).json({
    message: "Single product"
  });
}


export const createProduct = (req, res) => {
  return res.status(201).json({
    message: "Product created"
  });
}

export const updateProduct = (req, res) => {
  return res.status(200).json({
    message: "Product updated"
  });
}

export const deleteProduct = (req, res) => {
  return res.status(200).json({
    message: "Product deleted"
  });
}
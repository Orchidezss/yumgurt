import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// get all products
const getAllProducts = async (req, res) => {
  try {
    const products = prisma.product.findMany();
    res.status(200).json([products]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get specific product with id
const getProductById = async (req, res) => {
  const id = parseInt(req.query.id);
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get product by name
const getProductByName = async (req, res) => {
  const name = req.query.name;
  try {
    const product = await prisma.product.findMany({
      where: {
        name: {
          contains: name,
          mode: "insensitive",
        },
      },
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create product
const createProduct = async (req, res) => {
  try {
    const product = await prisma.product.create({
      data: req.body,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete product
const deleteProduct = async (req, res) => {
  try {
    const product = await prisma.product.delete({
      where: {
        id: parseInt(req.query.id),
      },
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// update product
const updateProduct = async (req, res) => {
  try {
    const product = await prisma.product.update({
      where: {
        id: parseInt(req.query.id),
      },
      data: req.body,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export { getAllProducts, getProductById, getProductByName, createProduct, deleteProduct, updateProduct };

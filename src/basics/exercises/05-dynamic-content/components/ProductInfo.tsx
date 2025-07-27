const product = {
   name: "Laptop",
   price: "$1200",
   availability: "In stock"
}

const ProductInfo: React.FC = () => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.availability}</p>
    </div>
  )
}

export default ProductInfo
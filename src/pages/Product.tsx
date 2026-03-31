import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

type Product = {
  id: number
  name: string
  description: string
  price: number
  image: string
}

export default function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/brands.json`)
      .then((res) => res.json())
      .then((data) => {
        const allProducts = data.flatMap((brand: any) => brand.products)
        const found = allProducts.find((p: Product) => p.id === Number(id))
        setProduct(found)
      })
  }, [id])

  if (!product) {
    return <p className="text-sm text-muted-foreground">Loading...</p>
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      
      {/* IMAGE */}
      <div className="w-full">
        <img
          src={`${import.meta.env.BASE_URL}${product.image}`}
          alt={product.name}
          className="w-full object-cover"
        />
      </div>

      {/* INFO */}
      <div className="flex flex-col gap-4 max-w-md text-sm">

        {/* Title */}
        <h1 className="font-medium">
          {product.name}
        </h1>

        {/* Description */}
        <p className="text-muted-foreground whitespace-pre-line">
          {product.description}
        </p>

        {/* Price */}
        <p className="text-muted-foreground">
          ${product.price}  
        </p>

      </div>
    </div>
  )
}
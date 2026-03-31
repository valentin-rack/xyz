import { useEffect, useState } from "react"
import { ProductCard } from "@/components/ui/ProductCard"
import { BrandHeader } from "@/components/ui/BrandHeader"

type Product = {
  id: number
  name: string
  description: string
  price: number
  image: string
}

export default function Profile() {
  const [brand, setBrand] = useState<any>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/brands.json`)
      .then((res) => res.json())
      .then((data) => {
        const brand = data[0] // después esto puede ser dinámico
        setProducts(brand.products)
        setBrand(brand)
        setLoading(false)
      })
  }, [])

  return (
    <div className="space-y-8">
      <BrandHeader
        title={brand?.name}
        description={brand?.description}
      />

      {loading ? (
        <p className="text-sm text-muted-foreground">Loading...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px]">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              image={`${import.meta.env.BASE_URL}${product.image}`}
              price={`$${product.price}`}
              soldOut={product.id % 3 === 0}
            />
          ))}
        </div>
      )}
    </div>
  )
}
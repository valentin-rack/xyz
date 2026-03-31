type Props = {
  title: string
  price?: string
  image: string
  soldOut?: boolean
}

export function ProductCard({
  title,
  price,
  image,
  soldOut,
}: Props) {
  return (
    <div className="space-y-2">
      <div className="relative aspect-square bg-muted overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        {soldOut && (
          <span className="absolute top-2 left-2 bg-background text-xs px-2 py-1 border rounded">
            Sold Out
          </span>
        )}
      </div>

      <div className="text-sm py-[15px]">
        <p className="font-normal tracking-wide text-title">
          {title}
        </p>

        {price && (
          <p className="text-muted-foreground">
            {price}
          </p>
        )}
      </div>
    </div>
  )
}
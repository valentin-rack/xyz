import { Button } from "./button"

type BrandHeaderProps = {
  title: string
  description: string
}

export function BrandHeader({ title, description }: BrandHeaderProps) {
  return (
    <div className="space-y-4 w-full md:max-w-xl">
      
      {/* Title */}
      <h1 className="text-xl font-medium text-title">
        {title}
      </h1>

      {/* Description */}
      <p className="text-sm text-muted-foreground whitespace-pre-line leading-tight">
        {description}
      </p>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <Button variant="secondary" size="sm" asChild>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </Button>

        <Button variant="secondary" size="sm" asChild>
          <a href="/shop">
            Tienda
          </a>
        </Button>
      </div>

    </div>
  )
}
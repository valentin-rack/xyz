type BrandHeaderProps = {
  title: string
  description: string
}

export function BrandHeader({ title, description }: BrandHeaderProps) {
  return (
    <div className="space-y-2 max-w-md">
      <h1 className="text-xl font-medium">
        {title}
      </h1>

      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
        {description}
      </p>
    </div>
  )
}
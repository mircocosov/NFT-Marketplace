import Image from "@/assets/components/ui/Image/Image"
import style from "./Card.module.scss"
import cn from "classnames"

interface Props {
  image?: Array<string>
  type: "primary" | "secondary"
  title: string
  description: string
  price?: string
  className?: string
}

export default function Card({
  image,
  type,
  title,
  description,
  price,
}: Props) {
  return (
    <div className={cn(style.card, style[type])}>
      {image && <Image className={style.image} src={image[0]} alt={title} />}
      <div className={style.content}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.description}>{description}</p>
        {price && <p className={style.price}>{price}</p>}
      </div>
    </div>
  )
}

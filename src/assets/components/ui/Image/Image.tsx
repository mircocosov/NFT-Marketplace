import style from "./Image.module.scss"
import cn from "classnames"

interface Props {
  className?: string
  src: string
  alt: string
}

export default function Image({ className, src, alt }: Props) {
  return <img src={src} alt={alt} className={cn(style.image, className)} />
}

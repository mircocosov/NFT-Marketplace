import style from "./AvtorCard.module.scss"
import cn from "classnames"
import Image from "@/assets/components/ui/Image"

interface Props {
  className?: string
  number: string
  src: string
  alt: string
  nick: string
  total: string
}

export default function AvtorCard({
  className,
  number,
  src,
  alt,
  nick,
  total,
}: Props) {
  return (
    <div className={cn(style.card, className)}>
      <div className={style.cardImage}>
        <div className={style.number}>
          <p className={style.numberText}>{number}</p>
        </div>
        <Image src={src} alt={alt} className={style.image} />
      </div>
      <div className={style.avtorInfo}>
        <h5 className={style.nick}>{nick}</h5>
        <div className={style.totalInfo}>
          <p className={style.totalText}>Total Sales:</p>
          <p className={style.total}>{total}</p>
        </div>
      </div>
    </div>
  )
}

import style from "./AvtorCard.module.scss"
import cn from "classnames"
import Image from "@/assets/components/ui/Image"
import { Avtor } from "@/types/avtor"

interface Props {
  className?: string
  total: string
  avtor: Avtor
}

export default function AvtorCard({ className, avtor, total }: Props) {
  return (
    <div className={cn(style.card, className)}>
      <div className={style.cardImage}>
        <div className={style.number}>
          <p className={style.numberText}>{avtor.number}</p>
        </div>
        <Image src={avtor.src} alt={avtor.alt} className={style.image} />
      </div>
      <div className={style.avtorInfo}>
        <h5 className={style.nick}>{avtor.nick}</h5>
        <div className={style.totalInfo}>
          <p className={style.totalText}>Total Sales:</p>
          <p className={style.total}>{total}</p>
        </div>
      </div>
    </div>
  )
}

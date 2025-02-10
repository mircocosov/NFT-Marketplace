import style from "./AvtorCard.module.scss"
import classNames from "classnames"
import Image from "@/assets/components/ui/Image"
import { Avtor } from "@/types/avtor"

interface Props {
  className?: string
  total: string
  number: string
  avtor: Avtor
}

export default function AvtorCard({ className, avtor, total, number }: Props) {
  return (
    <div className={classNames(style.card, className)}>
      <div className={style.cardImage}>
        <div className={style.number}>
          <p className={style.numberText}>{number}</p>
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

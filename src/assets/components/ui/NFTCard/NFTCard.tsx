import style from "./NFTCard.module.scss"
import cn from "classnames"
import Image from "@/assets/components/ui/Image"

interface Props {
  className?: string
  src: string
  alt: string
  title: string
  avtor: string
  avtorSrc: string
  avtorAlt: string
  price: string
  highestBid: string
}

export default function NFTCard({
  className,
  src,
  alt,
  title,
  avtor,
  avtorSrc,
  avtorAlt,
  price,
  highestBid,
}: Props) {
  return (
    <div className={cn(style.card, className)}>
      <div className={style.cardImage}>
        <Image src={src} alt={alt} className={style.image} />
      </div>
      <div className={style.cardInfo}>
        <div className={style.artistInfo}>
          <h5 className={style.title}>{title}</h5>
          <div className={avtor}>
            <Image src={avtorSrc} alt={avtorAlt} />
            <p className={style.avtor}>{avtor}</p>
          </div>
        </div>
        <div className={style.priceInfo}>
          <div className={style.price}>
            <p className={style.infoText}>Price</p>
            <p className={style.infoValue}>{price}</p>
          </div>
          <div className={style.highestBid}>
            <p className={style.infoText}>Highest Bid</p>
            <p className={style.infoValue}>{highestBid}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

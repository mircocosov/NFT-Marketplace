import style from "./NFTCard.module.scss"
import cn from "classnames"
import Image from "@/assets/components/ui/Image"

interface Props {
  className?: string
  src: string
  alt: string
  titel: string
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
  titel,
  avtor,
  avtorSrc,
  avtorAlt,
  price,
  highestBid,
}: Props) {
  return (
    <div className={cn(style.card, className)}>
      <div className={style.cardImage}>
        <Image src={src} alt={alt} />
      </div>
      <div className={style.cardInfo}>
        <div className={style.artistInfo}>
          <h5>{titel}</h5>
          <div className={avtor}>
            <Image src={avtorSrc} alt={avtorAlt} />
            <p>{avtor}</p>
          </div>
        </div>
        <div className={style.priceInfo}>
          <div className={style.price}>
            <p>Price</p>
            <p>{price}</p>
          </div>
          <div className={style.highestBid}>
            <p>Highest Bid</p>
            <p>{highestBid}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

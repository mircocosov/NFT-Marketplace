import style from "./NFTCard.module.scss"
import classNames from "classnames"
import Image from "@/assets/components/ui/Image"
import { NFT } from "@/types/nft"

interface Props {
  className?: string
  nft: NFT
}

export default function NFTCard({ className, nft }: Props) {
  return (
    <div className={classNames(style.card, className)}>
      <div className={style.cardImage}>
        <Image src={nft.src} alt={nft.alt} className={style.image} />
      </div>
      <div className={style.cardInfo}>
        <div className={style.artistInfo}>
          <h5 className={style.title}>{nft.title}</h5>
          <div className={nft.avtor}>
            <Image src={nft.avtorSrc} alt={nft.avtorAlt} />
            <p className={style.avtor}>{nft.avtor}</p>
          </div>
        </div>
        <div className={style.priceInfo}>
          <div className={style.price}>
            <p className={style.infoText}>Price</p>
            <p className={style.infoValue}>{nft.price}</p>
          </div>
          <div className={style.highestBid}>
            <p className={style.infoText}>Highest Bid</p>
            <p className={style.infoValue}>{nft.highestBid}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

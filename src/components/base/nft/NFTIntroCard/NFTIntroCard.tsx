import classNames from "classnames"
import style from "./NFTIntroCard.module.scss"
import Image from "@/assets/components/ui/Image"
import { NFT } from "@/types/nft"

interface Props {
  className?: string
  nft: NFT
}

export default function NFTIntroCard({ className, nft }: Props) {
  return (
    <div className={classNames(style.card, className)}>
      <Image src={nft.src} alt={nft.alt} className={style.image} />
      <div className={style.info}>
        <h5 className={style.title}>{nft.title}</h5>
        <div className={style.avtor}>
          <Image
            className={style.avtorImage}
            src={nft.avtorSrc}
            alt={nft.avtorAlt}
          />
          <p className={style.avtorName}>{nft.avtor}</p>
        </div>
      </div>
    </div>
  )
}

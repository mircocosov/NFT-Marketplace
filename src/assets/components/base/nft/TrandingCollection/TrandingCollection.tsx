import classNames from "classnames"
import Image from "@/assets/components/ui/Image"
import { Avtor } from "@/types/avtor"
import style from "./TrandingCollection.module.scss"

export interface NFTCollectionProps {
  className?: string
  url: Array<string>
  alt: Array<string>
  title: string
  avtor: Avtor
}

export default function TrandingCollection({
  className,
  url,
  alt,
  title,
  avtor,
}: NFTCollectionProps) {
  if (url.length > 4) {
    return (
      <div className={classNames(style.card, className)}>
        <div className={style.mainNft}>
          <Image className={style.nft} src={url[0]} alt={alt[0]} />
        </div>
        <div className={style.moreNft}>
          <Image className={style.smallNft} src={url[1]} alt={alt[1]} />
          <Image className={style.smallNft} src={url[2]} alt={alt[2]} />
          <div className={style.moreNftCount}>
            <p>{url.length - 3}</p>
          </div>
        </div>
        <div className={style.info}>
          <p className={style.title}>{title}</p>
          <div className={style.avtor}>
            <Image src={avtor.src} alt={avtor.alt} />
            <p className={style.nick}>{avtor.nick}</p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={classNames(style.card, className)}>
        <div className={style.mainNft}>
          <Image src={url[0]} alt={alt[0]} />
        </div>
        <div>
          <Image src={url[1]} alt={alt[1]} />
          <Image src={url[2]} alt={alt[2]} />
          <Image src={url[3]} alt={alt[3]} />
        </div>
        <div>
          <p>{title}</p>
          <div>
            <Image src={avtor.src} alt={avtor.alt} />
            <p>{avtor.nick}</p>
          </div>
        </div>
      </div>
    )
  }
}

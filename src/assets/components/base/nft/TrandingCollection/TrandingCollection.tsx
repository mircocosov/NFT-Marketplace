import classNames from "classnames"
import Image from "@/assets/components/ui/Image"
import { Avtor } from "@/types/avtor"
import styles from "./TrandingCollection.module.scss"

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
      <div className={classNames(styles.card, className)}>
        <div className={styles.mainNft}>
          <Image src={url[0]} alt={url[0]} className={styles.nft}/>
        </div>
        <div className={styles.moreNft}>
          <Image className={styles.smallNft} src={url[1]} alt={alt[1]} />
          <Image className={styles.smallNft} src={url[2]} alt={alt[2]} />
          <div className={styles.moreNftCount}>
            <p>{url.length - 3}</p>
          </div>
        </div>
        <div className={styles.info}>
          <p className={styles.title}>{title}</p>
          <div className={styles.avtorInfo}>
            <Image src={avtor.src} alt={avtor.alt} className={styles.avtor}/>
            <p className={styles.nick}>{avtor.nick}</p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={classNames(styles.card, className)}>
        <div className={styles.mainNft}>
          <Image src={url[0]} alt={alt[0]} className={styles.nft} />
        </div>
        <div className={styles.moreNft}>
          <Image src={url[1]} alt={alt[1]} className={styles.smallNft} />
          <Image src={url[2]} alt={alt[2]} className={styles.smallNft} />
          <Image src={url[3]} alt={alt[3]} className={styles.smallNft} />
        </div>
        <div className={styles.info}>
          <p className={styles.title}>{title}</p>
          <div className={styles.avtorInfo}>
            <Image src={avtor.src} alt={avtor.alt} className={styles.avtor}/>
            <p className={styles.nick}>{avtor.nick}</p>
          </div>
        </div>
      </div>
    )
  }
}

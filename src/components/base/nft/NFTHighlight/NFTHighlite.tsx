import styles from "./NFTHighlight.module.scss"
import classNames from "classnames"
import Image from "@/components/ui/Image"
import Button from "@/components/ui/Button"
import { NFT } from "@/types/nft"
import Icon from "@/components/ui/Icon"

interface Props {
  className?: string
  nft: NFT
}

export default function NFTHighlight({ className, nft }: Props) {
  return (
    <div className={classNames(styles.card, className)}>
      <div className={styles.card__Image}>
        <Image src={nft.src} alt={nft.alt}></Image>
      </div>
      <div className={styles.infoBox}>
        <div className={styles.leftside}>
          <div className={styles.avtorCon}>
            <Image src={nft.avtorSrc} alt={nft.avtorAlt} />
            <p>{nft.avtor}</p>
          </div>
          <h2 className={styles.title}>{nft.title}</h2>
          <Button type="primary" link="/marketplace">
            <Icon icon="eye" svgColor="purple" />
          </Button>
        </div>
        <div className={styles.rightside}>
          <p className={styles.timerText}>Auction ends in:</p>
          <div className={styles.timerCon}>
            <div className={styles.timer}>
              <h4>
                59 <span>:</span>59 <span>:</span>59
              </h4>
            </div>
            <div className={styles.unitsOfMeasurement}>
              <p>Hours</p>
              <p>Minutes</p>
              <p>Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

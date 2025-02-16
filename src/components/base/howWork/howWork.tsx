import Icon from "@/components/ui/Icon"
import styles from "./howWork.module.scss"
import classNames from "classnames"

interface Props {
  className?: string
  icon: "wallet" | "folder" | "purse"
}

export default function HowWork({ className, icon }: Props) {
  return (
    <div className={classNames(styles.card, className)}>
      <div className={styles.icon}>
        <Icon icon={icon}></Icon>
      </div>
      <div className={styles.discription}>
        <h5 className={styles.title}>Setup Your wallet</h5>
        <p className={styles.text}>
          Set up your wallet of choice. Connect it to the NFT market by clicking
          the wallet icon in the top right corner.
        </p>
      </div>
    </div>
  )
}

import Icon from "@/components/ui/Icon"
import styles from "./howWork.module.scss"
import classNames from "classnames"

interface Props {
  className?: string
  icon: "basket" | "folder" | "purse"
  title: string
  discription: string
}

export default function HowWork({
  className,
  icon,
  title,
  discription,
}: Props) {
  return (
    <div className={classNames(styles.card, className)}>
      <div className={styles.icon}>
        <Icon icon={icon}></Icon>
      </div>
      <div className={styles.discription}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.text}>{discription}</p>
      </div>
    </div>
  )
}

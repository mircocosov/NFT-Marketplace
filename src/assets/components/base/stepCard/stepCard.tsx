import style from "./stepCard.module.scss"
import Icon from "@/assets/components/ui/Icon"
import cn from "classnames"

interface Props {
  className?: string
  icon: "wallet" | "folder" | "purse"
  title: string
  discription: string
}

export default function StepCard({
  className,
  icon,
  title,
  discription,
}: Props) {
  return (
    <div className={cn(style.card, className)}>
      <Icon icon={icon} />
      <div className={style.info}>
        <h5>{title}</h5>
        <p>{discription}</p>
      </div>
    </div>
  )
}

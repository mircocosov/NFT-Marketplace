import style from "./NFTCategories.module.scss"
import cn from "classnames"
import Image from "@/assets/components/ui/Image"
import Icon from "@/assets/components/ui/Icon"

interface Props {
  className?: string
  url: string
  alt: string
  title: string
  icon:
    | "paintBrush"
    | "swatches"
    | "musicNotes"
    | "camera"
    | "videoCamera"
    | "magicStick"
    | "basketball"
    | "planet"
}

export default function NFTCategories({
  className,
  url,
  alt,
  title,
  icon,
}: Props) {
  return (
    <div className={cn(style.card, className)}>
      <div>
        <Image src={url} alt={alt} className={style.image} />
        <Icon icon={icon} className={style.icon} />
      </div>
      <div>
        <p>{title}</p>
      </div>
    </div>
  )
}

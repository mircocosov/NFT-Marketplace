import style from "./NFTCaregories.module.scss"
import classNames from "classnames"
import Image from "@/components/ui/Image"
import Icon from "@/components/ui/Icon"

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
    <div className={classNames(style.card, className)}>
      <div className={style.image__con}>
        <Image
          src={url}
          alt={alt}
          className={style.card__image}
          rounded={false}
        />
        <Icon icon={icon} className={style.icon} svgColor="none" />
      </div>
      <div className={style.card__title}>
        <p className={style.title}>{title}</p>
      </div>
    </div>
  )
}

import styles from "./Image.module.scss"
import classNames from "classnames"

interface Props {
  className?: string
  src: string
  alt: string
}

export default function Image({ className, src, alt }: Props) {
  return (
    <img src={src} alt={alt} className={classNames(styles.image, className)} />
  )
}

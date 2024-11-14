import styles from "./Button.module.scss"
import { ReactNode } from "react"
import { Link } from "react-router-dom"
import cn from "classnames"

export interface ButtonProps {
  className?: string | null
  type: "primary" | "secondary" | "text" | "outline" | "base"
  link?: string
  children?: ReactNode
}

export default function Button({
  className,
  type = "primary",
  link,
  children,
}: ButtonProps) {
  const classNames = cn(styles.button, styles[type], className)

  if (link) {
    return (
      <Link to={link} className={classNames}>
        {children}
      </Link>
    )
  }
}

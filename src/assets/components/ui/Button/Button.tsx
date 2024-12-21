import styles from "./Button.module.scss"
import { ReactNode } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"

export interface ButtonProps {
  type: "primary" | "secondary" | "text" | "outline"
  link?: string
  children?: ReactNode
  className?: string
}

export default function Button({
  className,
  type = "primary",
  link,
  children,
}: ButtonProps) {
  if (link) {
    return (
      <Link
        to={link}
        className={classNames(styles.button, styles[type], className)}
      >
        {children}
      </Link>
    )
  }
  return (
    <button className={classNames(styles.button, styles[type], className)}>
      {children}
    </button>
  )
}

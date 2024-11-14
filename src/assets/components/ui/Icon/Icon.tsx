import styles from "./Icon.module.scss"
import cn from "classnames"

const ICONS = {
  basketball: {
    icon: import("@/assets/icons/basketball.svg"),
  },
  camera: {
    icon: import("@/assets/icons/camera.svg"),
  },
  logo: {
    icon: import("@/assets/icons/logo.svg"),
  },
  magicStick: {
    icon: import("@/assets/icons/magic-stick.svg"),
  },
  musicNotes: {
    icon: import("@/assets/icons/music-notes.svg"),
  },
  paintBrush: {
    icon: import("@/assets/icons/paint-brush.svg"),
  },
  planet: {
    icon: import("@/assets/icons/planet.svg"),
  },
  rocket: {
    icon: import("@/assets/icons/rocket.svg"),
  },
  swatches: {
    icon: import("@/assets/icons/swatches.svg"),
  },
  user: {
    icon: import("@/assets/icons/user.svg"),
  },
  videoCamera: {
    icon: import("@/assets/icons/video.svg"),
  },
}

interface Props {
  className?: string
  icon: keyof typeof ICONS
}

export default function Icon({ className, icon }: Props) {
  const Icon = ICONS[icon]

  return (
    <div className={cn("icon", styles.container, className)}>
      <Icon.icon />
    </div>
  )
}

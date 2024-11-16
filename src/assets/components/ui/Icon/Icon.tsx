import styles from "./Icon.module.scss"
import cn from "classnames"

import BasketballIcon from "@/assets/icons/basketball.svg"
import CameraIcon from "@/assets/icons/camera.svg"
import LogoIcon from "@/assets/icons/logo.svg"
import MagicStickIcon from "@/assets/icons/magic-stick.svg"
import MusicNotesIcon from "@/assets/icons/music-notes.svg"
import PaintBrushIcon from "@/assets/icons/paint-brush.svg"
import PlanetIcon from "@/assets/icons/planet.svg"
import RocketIcon from "@/assets/icons/rocket.svg"
import SwatchesIcon from "@/assets/icons/swatches.svg"
import UserIcon from "@/assets/icons/user.svg"
import VideoCameraIcon from "@/assets/icons/video.svg"

const ICONS = {
  basketball: {
    icon: BasketballIcon,
  },
  camera: {
    icon: CameraIcon,
  },
  logo: {
    icon: LogoIcon,
  },
  magicStick: {
    icon: MagicStickIcon,
  },
  musicNotes: {
    icon: MusicNotesIcon,
  },
  paintBrush: {
    icon: PaintBrushIcon,
  },
  planet: {
    icon: PlanetIcon,
  },
  rocket: {
    icon: RocketIcon,
  },
  swatches: {
    icon: SwatchesIcon,
  },
  user: {
    icon: UserIcon,
  },
  videoCamera: {
    icon: VideoCameraIcon,
  },
}

interface Props {
  className?: string
  icon: keyof typeof ICONS
}

export default function Icon({ icon, className }: Props) {
  const IconComponent = ICONS[icon].icon

  return (
    <div className={cn("icon", styles.container, className)}>
      <IconComponent />
    </div>
  )
}

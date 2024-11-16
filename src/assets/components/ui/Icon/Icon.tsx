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
import Envelope from "@/assets/icons/envelope.svg"
import Eye from "@/assets/icons/eye.svg"
import Discord from "@/assets/icons/discord.svg"
import Instagram from "@/assets/icons/instagram.svg"
import Twitter from "@/assets/icons/twitter.svg"
import Youtube from "@/assets/icons/youtube.svg"
import Coinbase from "@/assets/icons/coinbase.svg"
import Metamask from "@/assets/icons/metamask.svg"
import Wallet from "@/assets/icons/wallet.svg"
import Basket from "@/assets/icons/basket.svg"
import Folder from "@/assets/icons/folder.svg"
import Purse from "@/assets/icons/purse.svg"

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
  envelope: {
    icon: Envelope,
  },
  eye: {
    icon: Eye,
  },
  discord: {
    icon: Discord,
  },
  instagram: {
    icon: Instagram,
  },
  twitter: {
    icon: Twitter,
  },
  youtube: {
    icon: Youtube,
  },
  coinbase: {
    icon: Coinbase,
  },
  metamask: {
    icon: Metamask,
  },
  wallet: {
    icon: Wallet,
  },
  basket: {
    icon: Basket,
  },
  folder: {
    icon: Folder,
  },
  purse: {
    icon: Purse,
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

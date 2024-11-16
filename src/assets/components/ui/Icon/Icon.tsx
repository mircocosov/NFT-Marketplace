import styles from "./Icon.module.scss"
import cn from "classnames"

import Basket from "@/assets/icons/basket.svg"
import BasketballIcon from "@/assets/icons/basketball.svg"
import CameraIcon from "@/assets/icons/camera.svg"
import Coinbase from "@/assets/icons/coinbase.svg"
import Discord from "@/assets/icons/discord.svg"
import Envelope from "@/assets/icons/envelope.svg"
import Eye from "@/assets/icons/eye.svg"
import Folder from "@/assets/icons/folder.svg"
import Globe from "@/assets/icons/globe.svg"
import Instagram from "@/assets/icons/instagram.svg"
import LogoIcon from "@/assets/icons/logo.svg"
import MagicStickIcon from "@/assets/icons/magic-stick.svg"
import Menu from "@/assets/icons/menu.svg"
import Metamask from "@/assets/icons/metamask.svg"
import MusicNotesIcon from "@/assets/icons/music-notes.svg"
import PaintBrushIcon from "@/assets/icons/paint-brush.svg"
import PlanetIcon from "@/assets/icons/planet.svg"
import Purse from "@/assets/icons/purse.svg"
import RocketIcon from "@/assets/icons/rocket.svg"
import SwatchesIcon from "@/assets/icons/swatches.svg"
import Twitter from "@/assets/icons/twitter.svg"
import UserIcon from "@/assets/icons/user.svg"
import VideoCameraIcon from "@/assets/icons/video.svg"
import Wallet from "@/assets/icons/wallet.svg"
import Youtube from "@/assets/icons/youtube.svg"

const ICONS = {
  basketball: {
    icon: BasketballIcon,
  },
  basket: {
    icon: Basket,
  },
  camera: {
    icon: CameraIcon,
  },
  coinbase: {
    icon: Coinbase,
  },
  discord: {
    icon: Discord,
  },
  envelope: {
    icon: Envelope,
  },
  eye: {
    icon: Eye,
  },
  folder: {
    icon: Folder,
  },
  globe: {
    icon: Globe,
  },
  instagram: {
    icon: Instagram,
  },
  logo: {
    icon: LogoIcon,
  },
  magicStick: {
    icon: MagicStickIcon,
  },
  menu: {
    icon: Menu,
  },
  metamask: {
    icon: Metamask,
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
  purse: {
    icon: Purse,
  },
  rocket: {
    icon: RocketIcon,
  },
  swatches: {
    icon: SwatchesIcon,
  },
  twitter: {
    icon: Twitter,
  },
  user: {
    icon: UserIcon,
  },
  videoCamera: {
    icon: VideoCameraIcon,
  },
  wallet: {
    icon: Wallet,
  },
  youtube: {
    icon: Youtube,
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

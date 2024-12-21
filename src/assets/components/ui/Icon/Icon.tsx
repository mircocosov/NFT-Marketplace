import styles from "./Icon.module.scss"
import classNames from "classnames"

import Basket from "@/assets/icons/basket.svg?react"
import BasketballIcon from "@/assets/icons/basketball.svg?react"
import CameraIcon from "@/assets/icons/camera.svg?react"
import Coinbase from "@/assets/icons/coinbase.svg?react"
import Copy from "@/assets/icons/copy.svg?react"
import Discord from "@/assets/icons/discord.svg?react"
import Envelope from "@/assets/icons/envelope.svg?react"
import Eye from "@/assets/icons/eye.svg?react"
import Folder from "@/assets/icons/folder.svg?react"
import Globe from "@/assets/icons/globe.svg?react"
import Instagram from "@/assets/icons/instagram.svg?react"
import LogoIcon from "@/assets/icons/logo.svg?react"
import MagicStickIcon from "@/assets/icons/magic-stick.svg?react"
import Menu from "@/assets/icons/menu.svg?react"
import Metamask from "@/assets/icons/metamask.svg?react"
import MusicNotesIcon from "@/assets/icons/music-notes.svg?react"
import PaintBrushIcon from "@/assets/icons/paint-brush.svg?react"
import Planet from "@/assets/icons/planet.svg?react"
import Plus from "@/assets/icons/plus.svg?react"
import Purse from "@/assets/icons/purse.svg?react"
import RocketIcon from "@/assets/icons/rocket.svg?react"
import SwatchesIcon from "@/assets/icons/swatches.svg?react"
import Twitter from "@/assets/icons/twitter.svg?react"
import UserIcon from "@/assets/icons/user.svg?react"
import VideoCameraIcon from "@/assets/icons/video-camera.svg?react"
import Wallet from "@/assets/icons/wallet.svg?react"
import Youtube from "@/assets/icons/youtube.svg?react"

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
  copy: {
    icon: Copy,
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
    icon: Planet,
  },
  plus: {
    icon: Plus,
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
    <div className={classNames(styles.container, className)}>
      <IconComponent />
    </div>
  )
}

import styles from "./Icon.module.scss"
import classNames from "classnames"
import { lazy } from "react"

const BasketballIcon = lazy(() => import("@/assets/icons/basket.svg?react"))
const Basket = lazy(() => import("@/assets/icons/Basket.svg?react"))
const CameraIcon = lazy(() => import("@/assets/icons/camera.svg?react"))
const Coinbase = lazy(() => import("@/assets/icons/coinbase.svg?react"))
const Copy = lazy(() => import("@/assets/icons/copy.svg?react"))
const Discord = lazy(() => import("@/assets/icons/discord.svg?react"))
const Envelope = lazy(() => import("@/assets/icons/envelope.svg?react"))
const Eye = lazy(() => import("@/assets/icons/eye.svg?react"))
const Folder = lazy(() => import("@/assets/icons/folder.svg?react"))
const Globe = lazy(() => import("@/assets/icons/globe.svg?react"))
const Instagram = lazy(() => import("@/assets/icons/instagram.svg?react"))
const LogoIcon = lazy(() => import("@/assets/icons/logo.svg?react"))
const MagicStickIcon = lazy(
  () => import("@/assets/icons/magic-stick.svg?react"),
)
const Menu = lazy(() => import("@/assets/icons/menu.svg?react"))
const Metamask = lazy(() => import("@/assets/icons/metamask.svg?react"))
const MusicNotesIcon = lazy(
  () => import("@/assets/icons/music-notes.svg?react"),
)
const PaintBrushIcon = lazy(
  () => import("@/assets/icons/paint-brush.svg?react"),
)
const Planet = lazy(() => import("@/assets/icons/planet.svg?react"))
const Plus = lazy(() => import("@/assets/icons/plus.svg?react"))
const Purse = lazy(() => import("@/assets/icons/purse.svg?react"))
const RocketIcon = lazy(() => import("@/assets/icons/rocket.svg?react"))
const SwatchesIcon = lazy(() => import("@/assets/icons/swatches.svg?react"))
const Twitter = lazy(() => import("@/assets/icons/twitter.svg?react"))
const UserIcon = lazy(() => import("@/assets/icons/user.svg?react"))
const VideoCameraIcon = lazy(
  () => import("@/assets/icons/video-camera.svg?react"),
)
const Wallet = lazy(() => import("@/assets/icons/wallet.svg?react"))
const Youtube = lazy(() => import("@/assets/icons/youtube.svg?react"))

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
  svgColor?: "white" | "purple" 
  icon: keyof typeof ICONS
}

export default function Icon({ icon, className, svgColor = "white" }: Props) {
  const IconComponent = ICONS[icon].icon

  return (
    <div className={classNames(styles.container, className)}>
      <IconComponent className={styles[svgColor]}/>
    </div>
  )
}

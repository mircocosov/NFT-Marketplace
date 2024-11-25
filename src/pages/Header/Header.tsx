import style from "./Header.module.scss"
import Icon from "@/assets/components/ui/Icon"
import Button from "@/assets/components/ui/Button"

export default function Header() {
  return (
    <header className={style.header}>
      <Icon icon="logo" />
      <nav className={style.nav}>
        <Button type="text" link="/marketplace">
          Marketplace
        </Button>
        <Button type="text" link="/rankings">
          Rankings
        </Button>
        <Button type="text" link="/walletconnect">
          Connect a wallet
        </Button>
        <Button type="primary">
          <Icon icon="user" />
          <p className={style.button}>Sign Up</p>
        </Button>
      </nav>
    </header>
  )
}

import styles from "./Header.module.scss"
import Icon from "@/components/ui/Icon"
import Button from "@/components/ui/Button"

export default function Header() {
  return (
    <header className={styles.header}>
      <Button type="text" link="/">
        <Icon icon="logo" />
      </Button>
      <nav className={styles.nav}>
        <Button type="text" link="/marketplace">
          Marketplace
        </Button>
        <Button type="text" link="/rankings">
          Rankings
        </Button>
        <Button type="text" link="/walletconnect">
          Connect a wallet
        </Button>
        <Button type="primary" link="/login" className={styles.SignUp__Button}>
          <Icon icon="user" />
          <p>Sign Up</p>
        </Button>
      </nav>
    </header>
  )
}

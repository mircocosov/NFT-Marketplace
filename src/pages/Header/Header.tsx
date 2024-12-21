import styles from "./Header.module.scss"
import Icon from "@/assets/components/ui/Icon"
import Button from "@/assets/components/ui/Button"

export default function Header() {
  return (
    <header className={styles.header}>
      <Icon icon="logo" />
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
        <Button type="primary" link="/signup" className={styles.SignUp__Button}>
          <Icon icon="user" />
          <p>Sign Up</p>
        </Button>
      </nav>
    </header>
  )
}

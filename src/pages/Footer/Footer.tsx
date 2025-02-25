import styles from "@/pages/Footer/Footer.module.scss"
import Icon from "@/components/ui/Icon"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"

export default function Footer() {
  return (
    <footer>
      <div className={styles.content}>
        <div className={styles.footer__info}>
          <div className={styles.firstContainer}>
            <Icon icon="logo" />
            <div className={styles.additionalInfo}>
              <p className={styles.additionalInfo__text}>
                NFT marketplace UI created with Anima for Figma.
              </p>
              <div className={styles.communityInfo}>
                <p className={styles.communityInfo__text}>Join our community</p>
                <div className={styles.Icons}>
                  <Icon icon="discord" svgColor="grey" />
                  <Icon icon="youtube" svgColor="grey" />
                  <Icon icon="twitter" svgColor="grey" />
                  <Icon icon="instagram" svgColor="grey" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.explore}>
            <h5 className={styles.explore__text}>Explore</h5>
            <div className={styles.explore__buttons}>
              <Button
                type="text"
                link="/marketplace"
                className={styles.explore__button}
              >
                Marketplace
              </Button>
              <Button
                type="text"
                link="/ranking"
                className={styles.explore__button}
              >
                Ranking
              </Button>
              <Button
                type="text"
                link="/walletconnect"
                className={styles.explore__button}
              >
                Connect a wallet
              </Button>
            </div>
          </div>
          <div className={styles.subscribe}>
            <h5 className={styles.subscribe__text}>Join Our Weekly Digest</h5>
            <div className={styles.subscribeForm}>
              <p className={styles.formDiscription}>
                Get exclusive promotions & updates straight to your inbox.
              </p>
              <div className={styles.subscribeForm__inputs}>
                <Input
                  placeholder="Enter your email here"
                  type="email"
                  className={styles.input}
                />
                <Button type="primary" className={styles.button}>
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

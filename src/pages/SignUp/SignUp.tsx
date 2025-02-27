import styles from "./SignUp.module.scss"
import Image from "@/components/ui/Image"
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"

export default function SignUp() {
  return (
    <div className={styles.container}>
      <div className={styles.leftside}>
        <Image
          className={styles.image}
          rounded={false}
          src="../src/assets/data/login.png"
          alt="login"
        />
      </div>
      <div className={styles.form}>
        <div className={styles.texts}>
          <h2 className={styles.title}>Create Account</h2>
          <p className={styles.discription}>
            Welcome! Enter your details and start creating, collecting and
            selling NFTs.
          </p>
        </div>
        <div className={styles.loginContainer}>
          <div className={styles.inputs}>
            <Input
              type="email"
              placeholder="Email Address"
              className={styles.input}
            />
            <Input
              type="password"
              placeholder="Password"
              className={styles.input}
            />
          </div>
          <Button type="primary" className={styles.button}>
            Create Account
          </Button>
        </div>
        <div className={styles.account}>
          <p className={styles.account__text}>Don't have an account yet?</p>
          <Button type="text" link="/login" className={styles.account__button}>
            Create account
          </Button>
        </div>
      </div>
    </div>
  )
}

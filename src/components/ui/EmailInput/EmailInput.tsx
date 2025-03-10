import style from "./EmailInput.module.scss"
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"
import Icon from "@/components/ui/Icon"

export default function EmailInput() {
  return (
    <div className={style.inputConteiner}>
      <Input
        placeholder="Enter your email here"
        type="email"
        className={style.inputBox}
      ></Input>
      <Button type="primary" className={style.button}>
        <Icon icon="envelope"></Icon>
        Subscribe
      </Button>
    </div>
  )
}

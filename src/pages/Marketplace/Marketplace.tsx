import styles from "./Marketplace.module.scss"
import { NFT } from "@/types/nft"
import Input from "@/components/ui/Input"

interface Props {
  NFTs: NFT
}

export default function Marketplace({ NFTs }: Props) {
  return (
    <main className={styles.main}>
      <div className={styles.browse__container}>
        <h1 className={styles.title}>Browse Marketplace</h1>
        <Input></Input>
      </div>
    </main>
  )
}

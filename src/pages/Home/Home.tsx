import styles from "./Home.module.scss"
import Button from "@/assets/components/ui/Button/Button"
import Icon from "@/assets/components/ui/Icon"
import AvtorCard from "@/assets/components/base/avtor/AvtorCard"
import NFTIntroCard from "@/assets/components/base/nft/NFTIntroCard/NFTIntroCard"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.getStartContainer}>
        <div className={styles.getStartContainer__leftside}>
          <h1 className={styles.getStartContainer__title}>
            Discover Digital Art & Collect NFTs
          </h1>

          <p className={styles.getStartContainer__discription}>
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>

          <Button type="primary">
            <Icon icon="rocket" />
            <p className={styles.getStartContainer__button}>Get Started</p>
          </Button>

          <div className={styles.getStartContainer__statsContainer}>
            <div className={styles.getStartContainer__stats}>
              <h4 className={styles.getStartContainer__header}>240k+</h4>
              <p className={styles.getStartContainer__text}>Total Sale</p>
            </div>

            <div className={styles.getStartContainer__stats}>
              <h4 className={styles.getStartContainer__header}>100k+</h4>
              <p className={styles.getStartContainer__text}>Auctions</p>
            </div>

            <div className={styles.getStartContainer__stats}>
              <h4 className={styles.getStartContainer__header}>240k+</h4>
              <p className={styles.getStartContainer__text}>Artists</p>
            </div>
          </div>
        </div>
        <NFTIntroCard
          nft={{
            src: "https://s3-alpha-sig.figma.com/img/8ac9/e0e3/bcf2d5507a81254146143702cd71f923?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Npsz5scFuRGoiaYa2f2ojgYtT5XHAUptrXZQLYcdenqD1sy8x6CBlefiqNnwvkC4M39Lp6LkWFjRQ6XdqsnZyxngHOx8gikxP5Znq7bIITbe94RYHsDpkmZ-qKe7EOg8UAxL1WU52fRZ0G~6GHcMz5OdQ1XLf9cbGbxTWfoedeNsV8pucWUvSMvjerr7SZiA7Q~Hxd8Fm7fxg-libVi7Fc~st3W8h77CcxpxjfUO2KI~Ha9WliotlwKuctHetY-GvreFDELkfVcXRVmRjIWI~X6FbeJAUXF--R2wet~pd0UhCyPzS0cyop2~mLVyc-Biaj8LBYYMjLLc43SLoLpk0A__",
            alt: "nft",
            title: "Space Walking",
            avtorSrc:
              "https://s3-alpha-sig.figma.com/img/9113/13b2/d79c0afb936279fe8427b823bc6218b6?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CaZ6smd1ZF0lkvlB4Mxc7~eoLXyClxEt9QExlv0F9Ul74pgHs2NNPlJ5q3Z5xCXoWLDJgzKJMznjNoUjhl-pyg1fIjqoBGzRz1n3fDrwSpMgIbncBkr9WoXPA3kW1mf8IuUcjE91uqSbAH2njdJPLG8QXgSTDPnrpV8xh3X~TgeTE2ykmPT9O0oJr-ttfO9E~E~V6QUd~M0F-tlAipclApwNktVjPyFxXVOl9mJ5ASNIMJaETMLmFZe50yupvQ7z78RUebGRIqYykPDlcM2tA9N-MVxfucS2AdN407enSvdNpWNu66gaOw~NFIUlXcG3Aj0RrlGNczx69wyWn4p7rw__",
            avtorAlt: "avtor",
            avtor: "Animakid",
          }}
        />
      </div>
      <div className={styles.getStartContainer__rightside}>
        <AvtorCard
          avtor={{
            src: "https://s3-alpha-sig.figma.com/img/9acf/2677/568b38bc98ba36dbd43c768c40de6716?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mqoz3UW~zQAsAXEdrFu9xqAlk91PLTgKcJGfVACV8FkFb2Sx3b5KuQsvjZn1bcswwo74f5SiJYMJ4bcQCWyJtic4uK1Z9InIywjRUWdajQe1-fvMWtaPv0Wcy1RZfCNxTxc7AOle5tB5YAxTnXZ~CMJYOpU061P5TpBcqmv448brU6tDbowYhoTdA9mMPRTG78DBa6DRSrl-nrugeQpBXPeo5-E5rkUYWiSku-adAhXPOQT5IoXeUvjMyMgZl34nv9RDfHML5MXashPI2cAsZf88u6Qxzkqv50Bn6Ht-LN7ZLX8g3hqFoZLaNF0RHT4JTbJLhG5r9DBAF0XrLRH0Lw__",
            alt: "avtor",
            nick: "Keepitreal",
          }}
          total={"34.5 ETH"}
          number={"1"}
        />
      </div>
    </main>
  )
}

import styles from "./Home.module.scss"
import Button from "@/assets/components/ui/Button/Button"
import Icon from "@/assets/components/ui/Icon"
import AvtorCard from "@/assets/components/base/avtor/AvtorCard"
import NFTIntroCard from "@/assets/components/base/nft/NFTIntroCard"
import TrandingCollection from "@/assets/components/base/nft/TrandingCollection/TrandingCollection"

const NFTsrc = 'https://s3-alpha-sig.figma.com/img/8ac9/e0e3/bcf2d5507a81254146143702cd71f923?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nZu4CtJfRoo-ognvLP~KZ4A-QXpyehRg6yhJLVUrd5oYOAHIB9okhgw7Rw8wNDhlmcL7XP8ZkGark3ITcMm82-XiGppFO60q-bMTUjmiiZLkFap10NPbf1hR7VD2iYkbP4Q6ZcBoK1pIcu3HmyMyojW0NRSDmySdH5Cnky4wZdM2zroCxlx4dUVl85gxzrDRunQwMzXdPLQdjxc-7Jet-PRRimoYnqBdHdbJzuIN7Nur~FvFiTNiTMVZ7H-LwaEmqJrG~hlXRhlAwHq7Y8f3wSP~MKijVwHQfq25jIISqZGEsBd2dxok6Uq8m96fwGA5QWeJrbH3KnSmBsHuQQJcng__'
const Avtorsrc = 'https://s3-alpha-sig.figma.com/img/9113/13b2/d79c0afb936279fe8427b823bc6218b6?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V4FamXFDZdQWFVqGijP0RkEFypdZoM38~2DuyC6LvKOR4OwfSSWixn2QW1tHkA~6UBY6lhK7SP9Ld5cI9FZ7Hs1i3nfD5eyRlsbSuY20Zb4sDa0-APG~xwfPQ2AVjAtBlOlTvym6aWNHHurwxLSymhPqmYXZAkAUQr7JNweVsB~mUgHXCENPxbaFBABv5ZPXaSrkVlObtRDs8leB2n2CYHEj24U3ZPPpfXFw3GdCnwo4LhwOQCRU75YV63XDgo7Voe3y-uGIlV-sShObCD~GMncOX5OFdQwQ9v3I8ub030vwAf6sd-w1tm5-dEji7cq4hB6z6LQfPB9ezvP3IYxqHg__'

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
            src: NFTsrc,
            alt: "nft",
            title: "Space Walking",
            avtorSrc:
              Avtorsrc,
            avtorAlt: "avtor",
            avtor: "Animakid",
            price: '20',
            highestBid: '20'
          }}
        />
      </div>
      <div className={styles.collectionContainer}>
        <p className={styles.collectionContainer__title}>Trending Collection</p>
        <p className={styles.collectionContainer__discription}>Checkout our weekly updated trending collection.</p>
        <div className={styles.cardsCollections}>
          <TrandingCollection {...{url:[NFTsrc, NFTsrc, NFTsrc, NFTsrc], alt:['NFT', 'NFT', 'NFT'], title:'DSGN Animals', avtor:{src:Avtorsrc, alt:'avtor', nick:'MrFox'}}}>

          </TrandingCollection>
        </div>
      </div>
      <div className={styles.getStartContainer__rightside}>
        <AvtorCard
          avtor={{
            src: Avtorsrc,
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

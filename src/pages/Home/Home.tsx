import styles from "./Home.module.scss"
import Button from "@/components/ui/Button"
import Icon from "@/components/ui/Icon"
import AvtorCard from "@/components/base/avtor/AvtorCard"
import NFTIntroCard from "@/components/base/nft/NFTIntroCard"
import TrandingCollection from "@/components/base/nft/TrandingCollection/TrandingCollection"
import NFTCategories from "@/components/base/nft/NFTCategories"

const NFTsrc =
  "https://s3-alpha-sig.figma.com/img/a792/ddc0/c4e1193ffd08cf4918e6f696bbc8d8fe?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tA1MLhV-UJYKMcVqezEZAD2BVQ6crHEbpi4xywyP~BBOuOZs-d1abWt5um2B~Or-u6paiDC2xJkAWJXdULy4jQO2hW3xo-j7hH1~BErQVVzcX5AP0OpmjtEK8uK2rIaISy80bu0cBbz-9ghby0MfBnsHPh~ZFDLyI04fXyBne996ISfwdkzElG~OxpQj686Kk2oXEbKcRKNDIcanDXz48Ewyq212~jfvK5ONQ0ysfuJIystfc54jispSsG3pkhCLRq-9xfGYPGTAncP6xmvpZLcUjqKlfhL79p1-n8f0X2sPA9c9iF~7RzgVMeTDAtekVfwNRTIzwgdhB~hPsJE3ww__"
const Avtorsrc =
  "https://s3-alpha-sig.figma.com/img/5f29/0aef/1589d4b7ed50db6bf310ffa8392539ea?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=b7iwi-eYYhoBvy59F4cXi9X7AF37WYKQOXyJpRdh2ZthPJJm0fBfp87BP9NX7a9SFelcezhsitFI8ymhwfReVCI-LkJszIJBMOMA5Lj8sZ5WOZNBHtPJ0Uod5lVFJnmm-5Z1m89s1QkI6GheHFdFYFbneIHz58Em4cqlrLlY1cdSXz1Tk1UMK2tIglLvHCBTkt31xAKLXfR3SseFAQ58iv2lOa0K~svLwwWn1BoDiomo09MVAHBb-kAJ0T9r86VrnjWlCjCXJ49PEWSexTohoX57pN0eLTwu1dRio7yl96STDAVmMYx9yHPiE6A1ID8I2016TGO~Z1017mUloSmi0g__"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.getStartContainer}>
          <div className={styles.getStartContainer__leftside}>
            <h1 className={styles.getStartContainer__title}>
              Discover Digital Art & Collect NFTs
            </h1>

            <p className={styles.getStartContainer__discription}>
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>

            <Button type="primary" className={styles.getStartContainer__Button}>
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
          <div className={styles.getStartContainer__rightside}>
            <NFTIntroCard
              nft={{
                src: NFTsrc,
                alt: "nft",
                title: "Space Walking",
                avtorSrc: Avtorsrc,
                avtorAlt: "avtor",
                avtor: "Animakid",
                price: "20",
                highestBid: "20",
              }}
              className={styles.NFTIntroCard}
            />
          </div>
        </div>
        <div className={styles.collectionContainer}>
          <p className={styles.collectionContainer__title}>
            Trending Collection
          </p>
          <p className={styles.collectionContainer__discription}>
            Checkout our weekly updated trending collection.
          </p>
          <div className={styles.cardsCollections}>
            <TrandingCollection
              {...{
                url: [NFTsrc, NFTsrc, NFTsrc, NFTsrc],
                alt: ["NFT", "NFT", "NFT"],
                title: "DSGN Animals",
                avtor: { src: Avtorsrc, alt: "avtor", nick: "MrFox" },
              }}
            ></TrandingCollection>
            <TrandingCollection
              {...{
                url: [NFTsrc, NFTsrc, NFTsrc, NFTsrc],
                alt: ["NFT", "NFT", "NFT"],
                title: "DSGN Animals",
                avtor: { src: Avtorsrc, alt: "avtor", nick: "MrFox" },
              }}
            ></TrandingCollection>
            <TrandingCollection
              {...{
                url: [NFTsrc, NFTsrc, NFTsrc, NFTsrc],
                alt: ["NFT", "NFT", "NFT"],
                title: "DSGN Animals",
                avtor: { src: Avtorsrc, alt: "avtor", nick: "MrFox" },
              }}
            ></TrandingCollection>
          </div>
        </div>

        <div className={styles.topCreators}>
          <div className={styles.topCreators__text}>
            <div className={styles.topCreators__title}>
              <h3 className={styles.topCreators__header}>Top Creators</h3>
              <p className={styles.topCreators__discription}>
                Checkout Top Rated Creators on the NFT Marketplace
              </p>
            </div>
            <Button
              type="secondary"
              link="./ranking"
              className={styles.topCreatorsButton}
            >
              <Icon
                icon="rocket"
                className={styles.topCreatorsIcon}
                svgColor="purple"
              />
              <p>View Rankings</p>
            </Button>
          </div>
          <div className={styles.arrayCreators}>
            <AvtorCard
              avtor={{
                src: Avtorsrc,
                alt: "avtor",
                nick: "Keepitreal",
              }}
              total={"34.5 ETH"}
              number={"1"}
              className={styles.avtorCard}
            />
          </div>
        </div>
        <div className={styles.categories}>
          <h3 className={styles.categoriesTitle}>Browse Categories</h3>
          <div className={styles.categories__card}>
            <NFTCategories
              className={styles.categoriesCard}
              url={NFTsrc}
              alt="alt"
              title="Art"
              icon="paintBrush"
            ></NFTCategories>
          </div>
        </div>
      </div>
    </main>
  )
}

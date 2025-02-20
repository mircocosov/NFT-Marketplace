import styles from "./Home.module.scss"
import Button from "@/components/ui/Button"
import Icon from "@/components/ui/Icon"
import AvtorCard from "@/components/base/avtor/AvtorCard"
import NFTIntroCard from "@/components/base/nft/NFTIntroCard"
import TrandingCollection from "@/components/base/nft/TrandingCollection/TrandingCollection"
import NFTCategories from "@/components/base/nft/NFTCategories"
import NFTCard from "@/components/base/nft/NFTCard"
import HowWork from "@/components/base/howWork/howWork"

const NFTsrc = "../src/assets/data/nft.png"
const Avtorsrc = "../src/assets/data/avatar.png"

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
        <div className={styles.discoverNFTs}>
          <div className={styles.discoverNFTs__header}>
            <div className={styles.discoverNFTs__text}>
              <h3 className={styles.discoverNFTs__title}>Discover More NFTs</h3>
              <p className={styles.discoverNFTs__discription}>
                Explore new trending NFTs
              </p>
            </div>
            <Button
              type="secondary"
              link="/marketplace"
              className={styles.discoverNFTs__button}
            >
              <Icon icon="eye" svgColor="purple" />
              <p>See All</p>
            </Button>
          </div>
          <div className={styles.discoverNFTs__NFTCards}>
            <NFTCard
              className={styles.NFTCard}
              nft={{
                src: NFTsrc,
                alt: "alt",
                title: "Distant Galaxy",
                avtor: "MoonDancer",
                avtorSrc: Avtorsrc,
                avtorAlt: "avtor",
                price: "1.63 ETH",
                highestBid: "0.33 wETH",
              }}
            />
          </div>
        </div>
        <div className={styles.howWorkCon}>
          <HowWork
            className={styles.howWork}
            icon="purse"
            title="Setup Your wallet"
            discription="Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner."
          />
          <HowWork
            icon="folder"
            title="Create Collection"
            discription="Upload your work and setup your collection. Add a description, social links and floor price."
          />
          <HowWork
            icon="basket"
            title="Start Earning"
            discription="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
          />
        </div>
      </div>
    </main>
  )
}

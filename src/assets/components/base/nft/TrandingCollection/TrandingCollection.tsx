import style from "./TrandingCollection.module.scss"
import cn from "classnames"
import Image from "@/assets/components/ui/Image"
import { Avtor } from "@/types/avtor"

interface Props {
  className?: string
  url: Array<string>
  alt: Array<string>
  title: string
  avtor: Avtor
}

export default function TrandingCollection({
  className,
  url,
  alt,
  title,
  avtor,
}: Props) {
  if (url.length > 4) {
    return (
      <div className={cn(style.card, className)}>
        <div className={style.mainNft}>
          <Image src={url[0]} alt={alt[0]} />
        </div>
        <div>
          <Image src={url[1]} alt={alt[1]} />
          <Image src={url[2]} alt={alt[2]} />
          <div>
            <p>{url.length - 3}</p>
          </div>
        </div>
        <div>
          <p>{title}</p>
          <div>
            <Image src={avtor.src} alt={avtor.alt} />
            <p>{avtor.nick}</p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={cn(style.card, className)}>
        <div className={style.mainNft}>
          <Image src={url[0]} alt={alt[0]} />
        </div>
        <div>
          <Image src={url[1]} alt={alt[1]} />
          <Image src={url[2]} alt={alt[2]} />
          <Image src={url[3]} alt={alt[3]} />
        </div>
        <div>
          <p>{title}</p>
          <div>
            <Image src={avtor.src} alt={avtor.alt} />
            <p>{avtor.nick}</p>
          </div>
        </div>
      </div>
    )
  }
}

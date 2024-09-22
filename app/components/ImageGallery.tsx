import Image from "next/image"
import styles from "../ImageGallery.module.css"

interface Image {
  id: number
  src: string
  alt: string
  width: number
  height: number
}
export default function ImageGallery({ images }: { images: Image[] }) {
  return (
    <div className={styles.gallery}>
      {images.map((img) => (
        <div key={img.id} className={styles.galleryItem}>
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            layout="responsive"
            placeholder="blur"
            blurDataURL={img.src}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}

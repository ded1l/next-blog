import Image from "next/image"
import styles from "./card.module.css"
import Link from "next/link"
import dayjs from "dayjs"
export const Card =({title,img,subTitle,date,id})=>{
return(
<div className={styles.card}>
 <div className={styles.pics}><Image src={img} alt="img" width={300} height={300}/>
   </div>
 <div className={styles.title}>{title}</div>
 <div className={styles.subtitle}>{subTitle}</div>
    <div className={styles.footer}>
        <Link href={`/article/${id}`}>Read Article</Link>
        <span>{dayjs(date).format(
            "YYYY dddd MM"
        )}</span>
    </div>
</div>
)
}
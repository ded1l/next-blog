import Link from "next/link"
import styles from "./footer.module.css"
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { Container } from "../container/Container";
export default function Footer() {
  return (
    <div>
        <div className={styles.main}>
            <Container>
            <div className={styles.inside}>
            
                <h3 className={styles.left}>All Rights Reserved - Taha2023</h3>
            

            <div className={styles.right}>
                <Link href="/" ><ImFacebook2 /></Link>
                <Link href="/" ><FaTwitterSquare/></Link>
                <Link href="/" ><ImInstagram/></Link>
            </div>
            </div>
            </Container>
        </div>


    </div>
  )
}

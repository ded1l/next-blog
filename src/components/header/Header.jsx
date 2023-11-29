import Link from "next/link";
import styles from "./header.module.css";
import { Container } from "../container/Container";
export default function Header() {
  return (
    <div className={styles.main}>
        <div className={styles.border}>
      <Container>
        <div className={styles.head}>
          <h1>taha`s blog</h1>
          <ul className={styles.ul}>
            <li>
              <Link className={styles.active} href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Help</Link>
            </li>
          </ul>
        </div>
      </Container>
      </div>
    </div>
  );
}

import { Container } from "@/components/container/Container";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import styles from "./id.module.css"
import Image from "next/image";
import dayjs from "dayjs";
async function getData(id) {
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }) {
  let data = await getData(params.id);

  return (
    <div>
      <Header />
      <Container>
        {/* <h1>Page {params.id}</h1> */}

        <div className={styles.top}>
          <div>
            <h1>{data.blog.title}</h1>
            <p>{data.blog.category}</p>
          </div>
          <span>
          {dayjs(data.blog.created_at).format("YYYY dddd MM ")}
          </span>
        </div>
        <div className={styles.banner}>
<Image src={data.blog.photo_url} fill={true} />
        </div>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.blog.content_html || '' }}></div>
      </Container>
      <Footer />
    </div>
  );
}

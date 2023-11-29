"use client"


import styles from './page.module.css'
import Header from '@/components/header/Header'
import { Container } from '@/components/container/Container'
import { Card } from '@/components/card/Card'
import { useState ,useEffect } from 'react'
import Footer from '@/components/footer/Footer'

export default function Home() {
const [loading,setLoading]=useState(false)
const [info,setInfo]=useState([])
//

const getData = async () => {
  try {
    setLoading(true);
    let res = await fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts?limit=9&offset=0`);
    let data = await res.json();
    setInfo(data.blogs);
    setLoading(false); // also set loading to false if an error occurs
// set loading to false after data is fetched
  } catch (error) {
    console.log(error);
  }
}
useEffect(() => {
  getData()
}
, [info.blogs]) 

// if (loading) {
//   return <div>Loading...</div>; // render a loading message while data is being fetched
// }

  return (
    <main className={styles.main}>
      <Header />
  
  <div className={styles.banner}>
        <Container>
    <h1>Simple Blog.</h1>
    <h3> Powered by Next.js </h3>
 </Container>
  </div>
<Container>
  
  <div className={styles.grid}>
 

  {info.map((e, index) => (
    
                    <Card key={index} title={e.title} subTitle={e.category} img={e.photo_url} id={e.id} date={e.created_at} />
                ))}
    </div> <div className={styles.load}>
     {loading ? <div className={styles.loader}></div>: ""
  }

    </div>
    </Container>
  <Footer/>
 
    </main>

  )
}

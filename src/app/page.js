"use client"


import styles from './page.module.css'
import Header from '@/components/header/Header'
import { Container } from '@/components/container/Container'
import { Card } from '@/components/card/Card'
import { useState ,useEffect } from 'react'
import Footer from '@/components/footer/Footer'

export default function Home() {

const [info,setInfo]=useState([])

  const getData=async()=>{
    try {
      let res =await fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts?limit=9&offset=0`)
      let data=await res.json()
     
      setInfo(data.blogs)
      console.log(info);
      
    } catch (error) {
      console.log(error)
      
    }
  }
useEffect(() => {
  getData()
}
, [info.blogs]) 


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
    </div>
    </Container>
  <Footer/>
 
    </main>

  )
}

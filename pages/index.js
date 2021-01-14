import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const images = [
    { src: '/spartana_1.jpg', alt: "Farinata e salsa di pomodoro" },
    { src: '/spartana_2.jpg', alt: "Pizza acciughe, bufala e fiori di zucca"},
    { src: '/spartana_3.jpg', alt: "Impasto pizza"},
]

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>La Spartana - Pizzeria</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    🍕 La Spartana
                </h1>

                <div className={styles.grid}>
                    <Link href={"/menu"}>
                        <a className={styles.card}>
                            📒 Menu Online
                        </a>
                    </Link>
                </div>
                <section className={styles.imageContainer}>
                    {images.map(({src,alt}) => <Image src={src}
                                                      alt={alt}
                                                      width={200}
                                                      height={200}
                                                      layout="responsive"
                                                      objectFit="cover" />)}
                </section>
            </main>

            <footer className={styles.footer}>
                <div><p>Non usiamo <i>Cookies 🍪</i>, al limite li abbiamo tra i dolci del giorno.</p></div>
            </footer>
        </div>
    )
}

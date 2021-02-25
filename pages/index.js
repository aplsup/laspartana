import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { images } from '../data/image';

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

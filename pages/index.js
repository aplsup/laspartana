import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { images } from '../data/image';
import {seo} from "../data/seo";

const seoHome = seo;

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>{seoHome.pageTitle}</title>
                <meta name={"description"} content={seoHome.description} />
                <meta name="google-site-verification" content={seo.googleSiteVerification} />
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    🍕 Pizzeria La Spartana
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
                <div><p>Non utilizziamo <i>Cookies 🍪</i>, ma potresti trovarli tra i dolci del giorno.</p></div>
            </footer>
        </div>
    )
}

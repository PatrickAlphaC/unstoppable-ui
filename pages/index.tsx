import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import logo from "../public/frog.png"

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Unstoppable Froge</title>
                <meta name="description" content="Just a humble froge" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <p>I am but a humble froge</p>
                <Image src={logo} alt="Froge" />
            </main>
        </div>
    )
}

export default Home

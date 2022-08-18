import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import logo from "../public/lily-pad.png"

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
                <p>
                    Join the{" "}
                    <a className={styles.link} href="https://discord.gg/FJvECDTpjp">
                        Lily Pad Discord{" "}
                    </a>
                    for interacing with other growing web3 devs!
                </p>
            </main>
        </div>
    )
}

export default Home

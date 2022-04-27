import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

export default function Works() {
    return(
        <div>
            <Head>
                <title>My Works</title>
            </Head>
            <Navbar />
        </div>
    )
}
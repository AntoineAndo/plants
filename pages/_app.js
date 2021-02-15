import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Styles
import styles from '../components/layout.module.scss'
import utilStyles from '../styles/utils.module.css'

import Layout from '../components/layout'
import Sidebar from '../components/Sidebar/sidebar'
import Head from 'next/head'

import App from 'next/app'

import axios from 'axios'

export default function MyApp({ Component, pageProps }) {
    return (
    	<div className={styles.container}>
		      <Head>
		        <link rel="icon" href="/favicon.ico" />
		        <meta
		          name="plants"
		          content="just. more. plants."
		        />
		      </Head>
      		<div className={styles.header}>Header</div>
    		<Sidebar plants={pageProps.plants} />
			<div className={styles.main}>
	    		<Component {...pageProps} />
			</div>
    	</div>
    );
}
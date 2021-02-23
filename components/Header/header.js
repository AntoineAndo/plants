import React from "react";
import ReactDOM from "react-dom";

import Head from 'next/head'
import styles from './header.module.scss'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

export default function Header(){

	var background = [];
	for(let i = 0;i<200;i++){
		background.push(<span>PLANTS</span>)
	}

	return (
		<div className={styles.header}>
			<div className={styles.background}>
				{background}
			</div>
			<div className={styles.branding}>
				<div className={styles.img_container}>
					<Link href="/plants">
						<a>
							<img src="/images/plant.svg"/>
						</a>
					</Link>
				</div>
				<h1>Plants!!!</h1>
			</div>
		</div>
	)
} 
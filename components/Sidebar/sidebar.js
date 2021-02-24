import React from "react";
import ReactDOM from "react-dom";

import Head from 'next/head'
import styles from './sidebar.module.scss'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

import useSWR from 'swr'

class Sidebar extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			"plants" : props.plants
		}
	}

	render(){
	  return (
		<div className={styles.sidebar}>
			<div className={styles.sidebar_content}>
				<h1>SIDEBAR</h1>

				<ul>
					{this.state.plants.map(function(plant,key){
						return (
							<li key={key}>
								<Link href={"/plants/"+plant.slug}>
									<a>{plant.scientific_name}</a>
								</Link>
							</li>
						)
					})}
				</ul>
			</div>

			<Link href="/plants/new">
				<a class="button_primary">Nouvelle plante</a>
			</Link>
		</div>
	  )
	}
}   

export default Sidebar
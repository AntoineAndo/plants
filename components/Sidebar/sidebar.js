import React from "react";
import ReactDOM from "react-dom";

import Head from 'next/head'
import styles from './sidebar.module.scss'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

class Sidebar extends React.Component{

	constructor(props) {
		super(props);
		this.plants = props.plants;
	}

	render(){
	  return (
		<div className={styles.sidebar}>
			<h1>Sidebar</h1>

			<ul>
				{this.plants.map(function(plant){
					return <li>{plant.scientific_name}</li>
				})}
			</ul>
			<Link href="/plants/new">
				<a>Nouvelle plante</a>
			</Link>
		</div>
	  )
	}
}   

export default Sidebar
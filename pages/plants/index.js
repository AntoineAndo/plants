import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

import axios from 'axios'

export default function Index({plants}) {
  return (
    <Layout>
    	<Head>
    		<title>rénold</title>
    	</Head>
		<ul>
			{plants.map((plant) => (
				<li>
					<h2>{plant.name}</h2>
					<p>{plant.watering}</p>
				</li>
			))}
		</ul>
    </Layout>
  )
}


export async function getServerSideProps(){
	var response = [];
	await axios.get('http://localhost:3000/api/plants')
	.then(function(answer){
		response = answer.data
		console.log(answer.data)
	}).catch(function(error){
		console.log(error);
		//response = plants
	}).then(function(){
	})

		return {
			props : {
				plants : response
			}
		}

}
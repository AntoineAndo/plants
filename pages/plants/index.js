import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

//lib
import axios from 'axios'

export default function Index({props}) {
  return (
    <>
    	<Head>
    		<title>plants</title>
    	</Head>
		<h1>PLANTS</h1>
		<h1>PLANTS</h1>
		<h1>PLANTS</h1>
    </>
  )
}

export async function getServerSideProps (context){
	var response = [];
  await axios.get('http://localhost:3000/api/plants')
  .then(function(answer){
    response = answer.data
  }).catch(function(error){
    console.log(error);
    console.log("error");
    //response = plants
  }).then(function(){
  })
    return {
      props : {
        plants : response
      }
    }
}

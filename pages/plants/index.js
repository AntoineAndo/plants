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

      <div class="d-flex flex-column card w-50 p-4 align-items-center">
        <h3 class="text-center">Oh no, you have no plants in your collection... How about adding some?</h3>

        <Link href="/plants/new">
          <a class="button_primary">Yes please</a>
        </Link>
      </div>
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

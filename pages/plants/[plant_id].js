import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

import { useRouter } from 'next/router'

import axios from 'axios'

export default function PlantDetail({plant}) {

  if(plant.name == undefined){
    return (
      <div>
        <h1>Oops couldn't find the plant you are looking for</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>test</h1>
      <h2>{plant.name}</h2>
      <p>{plant.watering}</p>
    </div>
  )
}

export async function getServerSideProps(context){

  const plant_id = context.query.plant_id;

  var response = [];
  await axios.get('http://localhost:3000/api/plants/'+plant_id)
  .then(function(answer){
    response = answer.data
    console.log(answer)
  }).catch(function(error){
    console.log("error");
    console.log(error);
  }).then(function(){
    //console.log("then")
  })

  return {
    props : {
      plant : response
    }
  }
}
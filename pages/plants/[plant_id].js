import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

import { useRouter } from 'next/router'

import axios from 'axios'


import { useState  } from "react";

export default function PlantDetail({plant}) {

  const [state, setState] = useState({"isOwned" : true});
  const [count, setCount] = useState(0);
  
  const router = useRouter();

  const deletePlant = function(plant_slug){
    console.log("DELETEazdazdazd")
    console.log(state)
    axios.delete('http://localhost:3000/api/plants/'+plant_slug)
    .then(function(answer){
      setState({ "isOwned": false });
      router.replace(router.asPath);
    }).catch(function(error){
      console.log("error")
    })
  }

  if(plant == undefined){
    return (
      <div>
        <h1>Oops couldn't find the <span className="green">plant</span> you are looking for</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>{plant.scientific_name}</h1>
      {state.isOwned == true && <button onClick={() => deletePlant(plant.slug)} >Delete</button>}
      <p>{/*JSON.stringify(plant)*/}</p>
    </div> 
  )
}

export async function getServerSideProps(context){

  const plant_slug = context.query.plant_id;

  var requestedPlant = [];
  await axios.get('http://localhost:3000/api/plants/'+plant_slug)
  .then(function(answer){
    requestedPlant = answer.data
  }).catch(function(error){
    console.log("error");
    console.log(error);
    requestedPlant = null
  }).then(function(){
    //console.log("then")
  })


      //HORRIBLE
      //Trouver un moyen de mieux gérer le layout
      var sidebar_plantList = [];
      await axios.get('http://localhost:3000/api/plants')
      .then(function(answer){
        sidebar_plantList = answer.data
      }).catch(function(error){
        console.log(error);
        console.log("error");
      }).then(function(){
      })

  return {
    props : {
      plant : requestedPlant,
      plants: sidebar_plantList
    }
  }
}
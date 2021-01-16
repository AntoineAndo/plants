import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

import axios from 'axios'

import {Form, Button, Alert} from 'react-bootstrap'


import { useState  } from "react";

export default function New() {

  const initialInputState = { name: "", watering: "" };
  const [eachEntry, setEachEntry] = useState(initialInputState);
  const {name, watering} = eachEntry;

  const handleInputChange = e => {
    setEachEntry({ ...eachEntry, [e.target.id]: e.target.value });
  };


  const handleFinalSubmit = e => {
    axios.post('/api/plants/new', eachEntry)
      .then(function(response) {
        console.log(response)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

  };





  return (
    <Layout>
    	<Head>
    		<title>Ajouter une nouvelle plante</title>
    	</Head>	
      <h1>Ajouter une nouvelle plante</h1>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Nom vernaculaire</Form.Label>
          <Form.Control type="text" placeholder="Corkscrew rush" onChange={handleInputChange} value={name} ></Form.Control>
        </Form.Group>
        <Form.Group controlId="watering">
          <Form.Label>Fréquence d'arrosage</Form.Label>
          <Form.Control  as="select" value={watering} onChange={handleInputChange} >
            <option>Une fois par semaine</option>
            <option>Deux fois par semaines</option>
            <option>Tous les jours</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" onClick={handleFinalSubmit}>Enregistrer</Button>
      </Form>
    </Layout>
  )
}
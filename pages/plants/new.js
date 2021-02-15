import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import SearchResult from '../../components/SearchResult/searchResult'

import axios from 'axios'
import fetch from 'node-fetch'

import {Form, Button, Alert, Col, Row} from 'react-bootstrap'


import { useState  } from "react";

export default function New() {

  const initialSearchState = { searchText: "", searchResult: []};
  const [searchState, setSearchState] = useState(initialSearchState);
  const {searchText, searchResult} = searchState;

  const handleInputChange = e => {
    var localState = searchState;
    localState.searchResult = initialSearchState.searchResult;
    setSearchState({ ...localState, [e.target.id]: e.target.value });
  };


  const handleSearch = e => {
    (async () => {
      const response = await fetch('https://trefle.io/api/v1/plants/search?token=neDmD4I8F-HTbUTNRvSd9ZEwnwRClCBnHwHFyBxvU3Q&q='+searchState.searchText)
      response.json().then(function(json){
        var localState = searchState;
        localState.searchResult = json.data;
        setSearchState({ ...localState, "searchResult": json.data });
      });
    })();
  }

  const handlePlantSubmit = (plantToSave) => {
    console.log(plantToSave)

    axios.post('/api/plants/new', plantToSave)
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
    <>
    	<Head>
    		<title>Ajouter une nouvelle plante</title>
    	</Head>	
      <h1>Ajouter une nouvelle plante</h1>
      <Form>
        <Form.Group as={Row} controlId="searchText">
          <Col xs={10} sm={8}>
            <Form.Control 
              className="sm-4" 
              type="text"
              placeholder="ex: Corkscrew rush"
              onChange={handleInputChange}
              value={searchText} >
            </Form.Control>
          </Col>
          <Col xs={8} sm={4}>
            <Button variant="primary" onClick={handleSearch}>Rechercher</Button>
          </Col>
        </Form.Group>
      </Form>
      { searchState.searchResult.length > 0 && (
        <div className="searchResult">
          <h2>Résultat recherche</h2>
          <ul>
            {searchState.searchResult.map(function(plant, key){
              return <SearchResult key={key} plant={plant} onClick={handlePlantSubmit} />
            })}
          </ul>
        </div>
      )}
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
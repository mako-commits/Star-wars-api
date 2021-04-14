import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Route, Switch } from 'react-router-dom';
import FilmsPage from './pages/FilmsPage';
import PeoplesPage from './pages/PeoplesPage';
import PlanetsPage from './pages/PlanetsPage';
import SpeciesPage from './pages/SpeciesPage';
import StarshipsPage from './pages/StarshipsPage';
import VehiclesPage from './pages/VehiclesPage';
import NotFoundPage from './pages/NotFoundPage';


const Routes = () => {
  const [people, setPeople] = useState([])
  const [films, setFilms] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [starship, setStarships] = useState([])
  const [specie, setSpecies] = useState([])
  const [planet, setPlanets] = useState([])
  const [isLoading, setIsLoading] = useState([true])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchPeople = async () => {

      let response = await axios.get(`https://swapi.dev/api/people/`)
      let result_people = await response.data.results;
      // console.log(response.data.results)
      setPeople(result_people)
      setIsLoading(false)
    }
    fetchPeople()
  }, [query])

  useEffect(() => {
    const fetchStarships = async () => {
      let response = await axios.get(`https://swapi.dev/api/starships/`)
      let result_starship = await response.data.results
      // console.log(result)
      setStarships(result_starship)
      setIsLoading(false)
    }
    fetchStarships()
  }, [])

  useEffect(() => {
    const fetchVehicles = async () => {
      let response = await axios.get(`https://swapi.dev/api/vehicles/`)
      let result_vehicle = await response.data.results
      // console.log(result)
      setVehicles(result_vehicle)
      setIsLoading(false)
    }
    fetchVehicles()
  }, [])

  useEffect(() => {
    const fetchFilms = async () => {
      let response = await axios.get(`https://swapi.dev/api/films/`)
      let result_film = await response.data.results
      // console.log(result)
      setFilms(result_film)
      setIsLoading(false)
    }
    fetchFilms()
  }, [])

  useEffect(() => {
    const fetchSpecies = async () => {
      let response = await axios.get(`https://swapi.dev/api/species/`)
      let result_specie = await response.data.results
      // console.log(result)
      setSpecies(result_specie)
      setIsLoading(false)
    }
    fetchSpecies()
  }, [])

  useEffect(() => {
    const fetchPlanets = async () => {
      let response = await axios.get(`https://swapi.dev/api/planets/`)
      let result = await response.data.results
      console.log(result)
      setPlanets(result)
      setIsLoading(false)
    }
    fetchPlanets()
  }, [])
  return (
    <Switch>
      <Route exact path='/'>
        <FilmsPage result_film={films} isLoading={isLoading} />
      </Route>
      <Route path='/films'>
        <FilmsPage result_film={films} isLoading={isLoading} />
      </Route>
      <Route path='/people'>
        <PeoplesPage result_people={people} isLoading={isLoading} />
      </Route>
      <Route path='/planets'>
        <PlanetsPage result={planet} isLoading={isLoading} />
      </Route>
      <Route path='/species'>
        <SpeciesPage result_specie={specie} isLoading={isLoading} />
      </Route>
      <Route path='/starships'>
        <StarshipsPage result_starship={starship} isLoading={isLoading} />
      </Route>
      <Route path='/vehicles'>
        <VehiclesPage result_vehicle={vehicles} isLoading={isLoading} />
      </Route>
      <Route path='/404' component={NotFoundPage} />
    </Switch>
  );

}

export default Routes;

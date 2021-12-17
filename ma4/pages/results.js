import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { BASE_URL } from "../constants/base-url";
import Pokemon from "../components/Pokemon";
import Link from "next/link";

export default function results(props) {
  return (
    <Layout>
      <Head title="Results" />
      <h1>Results</h1>
      <div className="container">
        {props.pokemon.map((pokemon) => {
          return (
            <div key={pokemon.url} className="pokemonCard">
              <h3>{pokemon.name}</h3>
              <Pokemon data={pokemon.url} />
              <Link href={`pokeman/${pokemon.name}`}>Pokedex</Link>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // in case there is an error in the API call
  // we'll send an empty array in as the prop
  let pokemon = [];

  try {
    const response = await axios.get(BASE_URL);
    // the log here will happen on the server, you can check the console in your editor
    console.log(response);
    // the array is on the response.data.data property
    pokemon = response.data.results;
  } catch (error) {
    console.log(error);
  }

  // the props object we return here will become the props in the component
  return {
    props: {
      pokemon: pokemon,
    },
  };
}

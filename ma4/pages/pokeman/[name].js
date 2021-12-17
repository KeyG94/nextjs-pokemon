import Head from "../../components/layout/Head";
import Layout from "../../components/layout/Layout";
import { BASE_URL } from "../../constants/base-url";
import Image from "next/image";
import Link from "next/link";

export const getStaticPaths = async () => {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();

    const paths = data.results.map((pokemon) => {
      return {
        params: {
          name: pokemon.name,
        },
      };
    });
    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.log(err);
  }
};

export const getStaticProps = async (context) => {
  try {
    const name = context.params.name;
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
    const data = await res.json();

    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.log(err);
  }
};

export const Name = ({ data }) => {
  return (
    <Layout>
      <Head title="details" />
      <div style={{ flex: "none", textAlign: "left" }}>
        <Link href={"/results"}>Back</Link>
        <h1>{data.name.toUpperCase()}</h1>
        <ul style={{ listStyle: "none" }}>
          <li>Height: {data.height}</li>
          <li>Weight: {data.weight}</li>
        </ul>
        <Image
          src={data.sprites.front_shiny}
          alt={data.species.name}
          width={100}
          height={150}
        />
        <Image
          src={data.sprites.back_shiny}
          alt={data.species.name}
          width={100}
          height={150}
        />
        <Image
          src={data.sprites.other.dream_world.front_default}
          alt={data.species.name}
          width={100}
          height={150}
        />
        <Image
          src={data.sprites.other["official-artwork"].front_default}
          alt={data.species.name}
          width={100}
          height={150}
        />
        <div className="abilities">
          <ul>
            <h4>Abilities</h4>
            {data.abilities.map(({ ability, slot }) => {
              return <li key={slot}>{ability.name}</li>;
            })}
          </ul>
        </div>
        <div className="types">
          <ul>
            <h4>Types</h4>
            {data.types.map(({ type, slot }) => {
              return <li key={slot}>{type.name}</li>;
            })}
          </ul>
        </div>
        <div className="stats">
          <ul>
            <h4>stats</h4>
            {data.stats.map(({ stat, base_stat }) => {
              return (
                <div key={stat.name}>
                  <h5>{stat.name}</h5>
                  <li>{base_stat}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Name;

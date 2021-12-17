import { useState, useEffect } from "react";
import Image from "next/image";

export default function Pokemon({ data }) {
  const loadingText = "Loading...";

  const [pokemon, setPokemon] = useState(data);
  const [id, setId] = useState(loadingText);
  const [image, setImage] = useState(null);
  const [name, setName] = useState(loadingText);
  const [type, setType] = useState(loadingText);
  const [XP, setXP] = useState(loadingText);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemon = async () => {
      setLoading(true);
      try {
        const res = await fetch(pokemon);
        const data = await res.json();
        setPokemon(data);
        setImage(data.sprites.other.dream_world.front_default);
        setId(data.id);
        setName(data.name);
        setType(data.types[0].type.name);
        setXP(data.base_experience);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getPokemon();
  }, []);

  if (loading) {
    return (
      <ul>
        <li>Id: {id}</li>
        <li>Type: {type}</li>
        <Image
          src="https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a351d9e0236c03a539181b95faced9e0.gif"
          alt="loader placeholder"
          width={200}
          height={150}
        />
        <li>xp: {XP}</li>
      </ul>
    );
  }

  return (
    <ul>
      <li># {id}</li>
      <li>Type: {type}</li>
      <Image src={image} alt={name} width={100} height={150} />
      <li>xp: {XP}</li>
    </ul>
  );
}

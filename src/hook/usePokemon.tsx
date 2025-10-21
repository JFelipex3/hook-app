import { useEffect, useState } from "react"

interface Pokemon {
    id: number;
    name: string;
    imageUrl: string;
}

interface Props {
    id: number;
}

export const usePokemon = ({ id }: Props) => {

    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [isLoading, setisLoading] = useState(true); 

    const getPokemonById = async(id: number) => {

        setisLoading(true);

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        
        if (!response.ok) {
            setPokemon(null);
            setisLoading(false);
            return;
        }

        const data = await response.json();

        setPokemon({
            id: id,
            name: data.name,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        });

        setisLoading(false);
    };

    useEffect(() => {
      getPokemonById(id);
    }, [id]);
    

    return {
        // Props
        pokemon,
        isLoading,

        // Computed
        formattedId: id.toString().padStart(3, '0')
    }

}


import useData from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    metacritic: number;
    background_image: string;
    parent_platforms: { platform: Platform}[]
    // parent platforms is not a platform array
    // it is an array of objects where each object
    // has a property called platform of type platform.
    // design smell
  }
  
  const useGames = () => useData<Game>('/games');
  
  export default useGames;
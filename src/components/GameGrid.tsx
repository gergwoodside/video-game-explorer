import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid // added properties to grid
        // different column sizes on different screens
        // added padding and spacing
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
          // game is passed as a prop to the game card
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

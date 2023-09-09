import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContiner from "./GameCardContiner";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid // added properties to grid
        // different column sizes on different screens
        // added padding and spacing
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContiner>
              <GameCardSkeleton key={skeleton} />
            </GameCardContiner>
          ))}
        {data.map((game) => (
          <GameCardContiner>
            <GameCard key={game.id} game={game} />
          </GameCardContiner>
          // game is passed as a prop to the game card
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

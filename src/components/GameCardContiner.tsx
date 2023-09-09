import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContiner = ({ children }: Props) => {
  return (
    <Box
      borderRadius={"10px"}
      overflow={"hidden"}
      width={{ sm: "500px", md: "400px", lg: "300px", xl: "200px" }}
    >
      {children}
    </Box>
  );
};

export default GameCardContiner;

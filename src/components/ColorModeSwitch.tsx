import { HStack, Icon, Switch, color, useColorMode } from "@chakra-ui/react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      {colorMode === "dark" ? (
        <Icon as={BsMoonFill} />
      ) : (
        <Icon as={BsSunFill} />
      )}
    </HStack>
  );
};

export default ColorModeSwitch;

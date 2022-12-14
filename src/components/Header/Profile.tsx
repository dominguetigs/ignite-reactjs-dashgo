import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export const Profile = ({
  showProfileData = true,
}: ProfileProps): JSX.Element => {
  return (
    <Flex alignItems="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Gustavo Domingueti</Text>
          <Text color="gray.300" fontSize="small">
            gustavo.s.domingueti@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Gustavo Domingueti"
        src="https://github.com/dominguetigs.png"
      />
    </Flex>
  );
};

import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { RiContactsLine, RiDashboardLine } from 'react-icons/ri';

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export const NavSection = ({
  title,
  children,
}: NavSectionProps): JSX.Element => {
  return (
    <Box>
      <Text fontWeight="bold" fontSize="small" color="gray.400">
        {title}
      </Text>
      <Stack spacing="4" marginTop="8" alignItems="stretch">
        {children}
      </Stack>
    </Box>
  );
};

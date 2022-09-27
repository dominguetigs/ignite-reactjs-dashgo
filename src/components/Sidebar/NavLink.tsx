import {
  Icon,
  Link,
  Text,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import { ElementType } from 'react';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
}

export const NavLink = ({
  icon,
  children,
  ...rest
}: NavLinkProps): JSX.Element => {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text marginLeft="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
};

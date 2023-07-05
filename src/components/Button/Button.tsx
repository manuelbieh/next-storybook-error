import React from 'react';
import { Button as ChakraButton, forwardRef } from '@chakra-ui/react';

export interface ButtonProps {
  children?: React.ReactNode;
  dataCy?: string;
  icon?: React.ReactElement;
  key?: string;
  shouldRender?: boolean;
  isLoading?: boolean;
}

const Button = forwardRef(
  ({ children, dataCy, icon, ...props }: ButtonProps, ref) => {
    return (
      <ChakraButton data-cy={dataCy} leftIcon={icon} ref={ref} {...props}>
        {/*
          As long as we use React 17 and its types we need a fragment to wrap children,
          otherwise we get this error:
          children Type '{}' is not assignable to type 'ReactNode'. ts(2322)
          Source: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18051
        */}
        <> {children} </>
      </ChakraButton>
    );
  }
);

export default Button;

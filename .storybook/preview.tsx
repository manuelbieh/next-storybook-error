import * as React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { StoryContext } from '@storybook/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { withPerformance } from 'storybook-addon-performance';
import chakraTheme from '../src/theme/theme';

/* publicRuntimeConfig undefined when using Storybook with Next.js */
/* https://dev.to/justincy/publicruntimeconfig-undefined-when-using-storybook-with-next-js-5ea9 */
import { setConfig } from 'next/config';
import { publicRuntimeConfig } from '../next.config';
setConfig({ publicRuntimeConfig });

/* How to Use the Next.js Image Component in Storybook */
/* https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415 */
// import * as NextImage from 'next/image';
// const OriginalNextImage = NextImage.default;
// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   value: (props: any) => <OriginalNextImage {...props} unoptimized />,
// });

export const parameters = {
  layout: 'centered',
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

/**
 * Add global context for RTL-LTR switching
 */
export const globalTypes = {
  direction: {
    name: 'Direction',
    description: 'Direction for layout',
    defaultValue: 'LTR',
    toolbar: {
      icon: 'globe',
      items: ['LTR', 'RTL'],
    },
  },
};

const withChakra = (StoryFn: Function, context: StoryContext) => {
  const { direction } = context.globals;
  const dir = direction.toLowerCase();

  return (
    <ChakraProvider resetCSS theme={chakraTheme()}>
      <Flex dir={dir} h="100%" direction="column">
        <StoryFn />
      </Flex>
    </ChakraProvider>
  );
};

export const decorators = [withChakra, withPerformance];

import { HStack } from '@chakra-ui/react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story: any) => (
      <HStack h="100%" spacing="24px">
        <Story />
      </HStack>
    ),
  ],
};

export const Variants = (args: any) => (
  <>
    <Button variant="primary" {...args}>
      Primary Button
    </Button>

    <Button variant="secondary" {...args}>
      Secondary Button
    </Button>

    <Button variant="tertiary" {...args}>
      Tertiary Button
    </Button>
  </>
);

Variants.args = {
  disabled: false,
};

import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@mk-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: <Text>Testing the component Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: 'null',
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@mk-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <span>Testing the component Box</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

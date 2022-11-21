import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@mk-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Custom title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Per default the heading will be `h2`, but is allowed to change with the property `as`',
      },
    },
  },
}

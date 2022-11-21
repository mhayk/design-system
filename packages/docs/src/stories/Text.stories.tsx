import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@mk-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatem perferendis sit. Cum, consequuntur quia quos corrupti libero hic, voluptates recusandae repudiandae sed voluptate accusamus debitis quas natus perspiciatis blanditiis!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}

import * as React from 'react'

import * as Avatar from './index'

export default {
  title: 'ui/Avatar'
}

export const Template = () => (
  <Avatar.Root>
    <Avatar.Image src="http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/media/school_logos/download.png" alt="school" />
    <Avatar.Name>School Name</Avatar.Name>
  </Avatar.Root>
)

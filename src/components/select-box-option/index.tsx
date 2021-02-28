import React from 'react'
import { MenuItem } from '@material-ui/core'

const options = [
  {
    value: 1,
    label: 'Watching K-drama',
  },
  {
    value: 2,
    label: 'Hanging out with my friend',
  },
  {
    value: 3,
    label: 'Staying at home',
  },
]

export const Options: React.FC = () => (
  <>
    {options.map(option => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </>
)

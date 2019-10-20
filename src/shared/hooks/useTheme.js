import { useContext } from 'react'
import { ThemeContext } from 'grommet'

export const useTheme = () => useContext(ThemeContext)

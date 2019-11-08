import { useContext } from 'react'
import { ThemeContext, ThemeType } from 'grommet'

export const useTheme = () => useContext<ThemeType>(ThemeContext)

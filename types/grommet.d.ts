export * from 'grommet'

import { TextProps } from 'grommet/components/Text'

declare module 'grommet' {
  export const Text: React.FC<TextProps &
    Omit<React.AllHTMLAttributes<any>, 'size'>>
}

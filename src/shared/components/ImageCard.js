import React from 'react'
import { Box, Heading, Image, Text } from 'grommet'

import { ExternalLink } from './ExternalLink'
import { TimeFromNow } from './TimeFromNow'
import { useCurrentDate } from '../hooks/useCurrentDate'

export const ImageCard = ({
  imageAlt,
  imageSaveDate,
  imageSrc,
  link,
  name,
  ...rest
}) => {
  const currentDate = useCurrentDate()

  return (
    <Box pad='medium' {...rest}>
      <Image
        alt={imageAlt}
        fit='contain'
        margin={{
          bottom: 'small'
        }}
        src={imageSrc}
      />
      <Heading
        margin={{
          bottom: 'small',
          top: 'none'
        }}
        size='small'
      >
        {name}
      </Heading>
      <Box direction='row' gap='small'>
        {!!link && <ExternalLink href={link} />}
        <Text as='time' color='light-6' dateTime={imageSaveDate.toISOString()} size='small'>
          Updated
          {' '}
          <TimeFromNow from={imageSaveDate} now={currentDate} />
          {' '}
          ago
        </Text>
      </Box>
    </Box>
  )
}

import React from 'react'
import { Box, Heading, Image, Text } from 'grommet'

import { useCurrentDate } from '../hooks/useCurrentDate'
import { ExternalLink } from './ExternalLink'

const getDateDiff = (a, b) => {
  const diff = a.getTime() - b.getTime()

  if (diff > 60 * 60 * 1000) {
    return <>{Math.round(diff / 60 / 60 / 1000)}<abbr title='hours'>h</abbr></>
  } else if (diff > 60 * 1000) {
    return <>{Math.round(diff / 60 / 1000)}<abbr title='minutes'>m</abbr></>
  }

  return <>{Math.round(diff / 1000)}<abbr title='seconds'>s</abbr></>
}

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
      <Box direction='row' justify='between'>
        <Text as='time' dateTime={imageSaveDate.toISOString()}>
          Updated {getDateDiff(currentDate, imageSaveDate)} ago
        </Text>
        {!!link && <ExternalLink href={link} />}
      </Box>
    </Box>
  )
}

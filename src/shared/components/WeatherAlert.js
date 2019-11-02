import React from 'react'
import moment from 'moment'
import style from 'styled-components'
import { Alert } from 'grommet-icons'
import { Box, Heading, Text, Paragraph } from 'grommet'

import { ExternalLink } from './ExternalLink'

export const WeatherAlertTimes = style.dl`
  display: flex;
  flex-direction: row;
  margin: 0;
`

WeatherAlertTimes.Label = style.dt`
  :after {
    content: '\u00A0';
    display: inline-block;
  }
`
WeatherAlertTimes.Time = style.dd`
  margin: 0;

  :after {
    content: '\u2001';
    display: inline-block;
  }
`

export const WeatherAlert = ({
  'cap:areaDesc': [areaDesc],
  'cap:effective': [effective],
  'cap:event': [name],
  'cap:expires': [expires],
  link: [{ $: { href } }],
  ...rest
}) => {
  const effectiveTime = moment(effective)
  const expiresTime = moment(expires)

  return (
    <Box as='article' direction='row' gap='medium' {...rest}>
      <Box
        margin={{
          top: 'small'
        }}
      >
        <Alert
          color='accent-4'
          size='medium'
        />
      </Box>
      <Box>
        <Heading
          margin={{
            bottom: 'small',
            top: 'none'
          }}
          size='small'
        >
          {name}
        </Heading>
        <WeatherAlertTimes>
          <WeatherAlertTimes.Label>Effective</WeatherAlertTimes.Label>
          <WeatherAlertTimes.Time>
            <Text as='time' dateTime={effectiveTime.format()} weight='bold'>
              {effectiveTime.fromNow()}
            </Text>
          </WeatherAlertTimes.Time>
          <WeatherAlertTimes.Label>Expires</WeatherAlertTimes.Label>
          <WeatherAlertTimes.Time>
            <Text as='time' dateTime={expiresTime.format()} weight='bold'>
              {expiresTime.fromNow()}
            </Text>
          </WeatherAlertTimes.Time>
        </WeatherAlertTimes>
        <Paragraph
          margin={{
            vertical: 'small'
          }}
        >
          {areaDesc}
        </Paragraph>
        <ExternalLink href={href} />
      </Box>
    </Box>
  )
}

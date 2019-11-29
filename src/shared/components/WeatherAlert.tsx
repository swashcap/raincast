import React from 'react'
import moment from 'moment'
import style from 'styled-components'
import { Alert } from 'grommet-icons'
import { Box, Heading, Text, Paragraph, BoxProps } from 'grommet'

import { ExternalLink } from './ExternalLink'
import { WeatherAlertsEntry } from '../../server/services/weatherAlerts'

export const WeatherAlertTimes = (style.dl`
  display: flex;
  flex-direction: row;
  margin: 0;
` as unknown) as React.FC<React.HTMLAttributes<HTMLDListElement>> & {
  Label: React.FC<React.HTMLAttributes<HTMLDataListElement>>
  Time: React.FC<React.HTMLAttributes<HTMLDataListElement>>
}

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

export const WeatherAlert: React.FC<BoxProps &
  Pick<
    WeatherAlertsEntry,
    'cap:areaDesc' | 'cap:effective' | 'cap:event' | 'cap:expires' | 'link'
  >> = ({
  'cap:areaDesc': [areaDesc],
  'cap:effective': [effective],
  'cap:event': [name],
  'cap:expires': [expires],
  link: [
    {
      $: { href },
    },
  ],
  ...rest
}) => {
  const effectiveTime = moment(effective)
  const expiresTime = moment(expires)

  return (
    <Box as="article" direction="row" gap="medium" {...rest}>
      <Box
        margin={{
          top: 'small',
        }}
      >
        <Alert color="accent-4" size="medium" />
      </Box>
      <Box>
        <Heading
          margin={{
            bottom: 'small',
            top: 'none',
          }}
          size="small"
        >
          {name}
        </Heading>
        <WeatherAlertTimes>
          <WeatherAlertTimes.Label>Effective</WeatherAlertTimes.Label>
          <WeatherAlertTimes.Time>
            <Text as="time" dateTime={effectiveTime.format()} weight="bold">
              {effectiveTime.fromNow()}
            </Text>
          </WeatherAlertTimes.Time>
          <WeatherAlertTimes.Label>Expires</WeatherAlertTimes.Label>
          <WeatherAlertTimes.Time>
            <Text as="time" dateTime={expiresTime.format()} weight="bold">
              {expiresTime.fromNow()}
            </Text>
          </WeatherAlertTimes.Time>
        </WeatherAlertTimes>
        <Paragraph
          margin={{
            vertical: 'small',
          }}
        >
          {areaDesc}
        </Paragraph>
        <ExternalLink href={href} />
      </Box>
    </Box>
  )
}

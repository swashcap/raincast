import React from 'react'
import style from 'styled-components'

const Abbr = style.abbr`
  text-decoration: none;
`

export const getAbbreviation = (diff, units) => {
  if (units === 'hours') {
    return <Abbr title={diff === 1 ? 'hour' : 'hours'}>h</Abbr>
  } else if (units === 'minutes') {
    return <Abbr title={diff === 1 ? 'minute' : 'minutes'}>m</Abbr>
  }

  return null
}

export const getDiff = (a, b) => {
  const diff = a.getTime() - b.getTime()

  if (diff > 60 * 60 * 1000) {
    return {
      diff: Math.round(diff / 60 / 60 / 1000),
      units: 'hours'
    }
  } else if (diff > 60 * 1000) {
    return {
      diff: Math.round(diff / 60 / 1000),
      units: 'minutes'
    }
  }

  return {
    diff: '<1',
    units: 'minutes'
  }
}

export const TimeFromNow = ({ from, now, ...rest }) => {
  const { diff, units } = getDiff(now, from)

  return <>{diff}{getAbbreviation(diff, units)}</>
}

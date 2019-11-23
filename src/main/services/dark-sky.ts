import { request } from '../utils/request';

export const darkSky = ({
  apiKey,
  // TODO: Move location (PDX) to config
  latitude = 45.512794,
  longitude = -122.679565
}) => {
  if (process.env.NODE_ENV === 'development') {
    return Promise.resolve(require('../../../mocks/darksky.json'))
  }

  return request({
    headers: {
      'Accept-Encoding': 'gzip,deflate'
    },
    url: `https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`
  })
    .then((response) => JSON.parse(response))
}
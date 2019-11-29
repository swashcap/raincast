import { serviceRequest } from './serviceRequest'
import { ServiceContext } from '../plugins/apolloServer'

export interface ForecastOptions {
  apiKey: string
  latitude: number
  longitude: number
}

export interface ForecastResponse {}

export const forecast = async (
  {
    apiKey,
    // TODO: Move location (PDX) to config
    latitude = 45.512794,
    longitude = -122.679565,
  }: ForecastOptions,
  context: ServiceContext
): Promise<ForecastResponse> => {
  const response = await serviceRequest<string>(
    {
      headers: {
        'Accept-Encoding': 'gzip,deflate',
      },
      url: `https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`,
    },
    context
  )

  return JSON.parse(response.data)
}

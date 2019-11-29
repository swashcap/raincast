import { forecastQuery } from '../../../shared/queries/forecast'
import { requestGraphQL } from '../utils/request'

export const forecast = () =>
  requestGraphQL({
    query: forecastQuery,
  })

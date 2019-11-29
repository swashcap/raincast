import { requestGraphQL } from '../utils/request'
import { weatherAlertsQuery } from '../../../shared/queries/weatherAlerts'

export const weatherAlerts = () =>
  requestGraphQL({
    query: weatherAlertsQuery,
  })

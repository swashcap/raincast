import { requestGraphQL } from '../utils/request'
import { configQuery } from '../../../shared/queries/config'

export const config = () =>
  requestGraphQL({
    query: configQuery,
  })

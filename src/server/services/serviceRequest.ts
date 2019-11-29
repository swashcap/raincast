import { RequiredUriUrl, Response } from 'request'
import request, { RequestPromiseOptions } from 'request-promise-native'
import { ServiceContext } from '../plugins/apolloServer'

export interface ServiceResponse<T>
  extends Pick<Response, 'statusCode' | 'statusMessage'> {
  data: T
}

export class ServiceError extends Error {
  error: Error | null
  statusCode: Response['statusCode'] | null
  statusMessage: Response['statusMessage'] | null

  constructor(options: Error | Response) {
    super(
      options instanceof Error
        ? options.message
        : `${options.url} failed: ${options.statusCode}`
    )

    this.error = null
    this.statusCode = null
    this.statusMessage = null

    if (options instanceof Error) {
      this.error = options
    } else {
      this.statusCode = options.statusCode
      this.statusMessage = options.statusMessage
    }
  }
}

export const serviceRequest = async <T>(
  options: RequestPromiseOptions & RequiredUriUrl,
  context: ServiceContext
): Promise<ServiceResponse<T>> => {
  let response: Response
  try {
    response = await request({
      ...options,
      simple: false,
      resolveWithFullResponse: true,
    })
  } catch (error) {
    throw new ServiceError(error)
  }

  if (response.statusCode >= 400) {
    throw new ServiceError(response)
  }

  return {
    data: response.body,
    statusCode: response.statusCode,
    statusMessage: response.statusMessage,
  }
}

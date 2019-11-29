import { Action, ErrorAction } from '../types'

export enum actions {
  CONFIG_ERROR = 'CONFIG_ERROR',
  CONFIG_REQUEST = 'CONFIG_REQUEST',
  CONFIG_RESPONSE = 'CONFIG_RESPONSE',
}

export const configError = (
  error: Error
): ErrorAction<actions.CONFIG_ERROR> => ({
  error: true,
  payload: error,
  type: actions.CONFIG_ERROR,
})

export const configRequest = (): Action<actions.CONFIG_REQUEST> => ({
  payload: null,
  type: actions.CONFIG_REQUEST,
})

export const configResponse = (data): Action<actions.CONFIG_RESPONSE> => ({
  payload: data,
  type: actions.CONFIG_RESPONSE,
})

export type ConfigAction =
  | ReturnType<typeof configError>
  | ReturnType<typeof configRequest>
  | ReturnType<typeof configResponse>

import { ApolloServer, gql } from 'apollo-server-fastify'
import { FastifyRequest, Logger } from 'fastify'
import DataLoader from 'dataloader'
import fs from 'fs'
import path from 'path'

import resolvers from '../resolvers/index'
import { Config, ConfigOptions, config } from '../services/config'
import {
  WeatherAlertsOptions,
  WeatherAlertsFeed,
  weatherAlerts,
} from '../services/weatherAlerts'
import {
  ForecastOptions,
  ForecastResponse,
  forecast,
} from '../services/forecast'

const typeDefs = gql`
  ${fs.readFileSync(path.join(__dirname, '../schema/config.gql'), 'utf8')}
  ${fs.readFileSync(path.join(__dirname, '../schema/forecast.gql'), 'utf8')}
  ${fs.readFileSync(path.join(__dirname, '../schema/root.gql'), 'utf8')}
  ${fs.readFileSync(
    path.join(__dirname, '../schema/weatherAlerts.gql'),
    'utf8'
  )}
  ${fs.readFileSync(path.join(__dirname, '../schema/window.gql'), 'utf8')}
`

export interface ServiceContext {
  log: Logger
  requestId: string
}

export interface Context extends ServiceContext {
  loaders: {
    config: DataLoader<ConfigOptions, Config>
    darkSky: DataLoader<ForecastOptions, ForecastResponse>
    weatherAlert: DataLoader<WeatherAlertsOptions, WeatherAlertsFeed>
  }
}

const server = new ApolloServer({
  context(request: FastifyRequest): Context {
    const serviceContext: ServiceContext = {
      log: request.log,
      requestId: request.id,
    }

    return {
      ...serviceContext,
      loaders: {
        config: new DataLoader(args => Promise.all(args.map(a => config(a)))),
        darkSky: new DataLoader(args =>
          Promise.all(args.map(a => forecast(a, serviceContext)))
        ),
        weatherAlert: new DataLoader(args =>
          Promise.all(args.map(a => weatherAlerts(a, serviceContext)))
        ),
      },
    }
  },
  resolvers,
  typeDefs,
  uploads: false,
})

export const apolloServer = server.createHandler()

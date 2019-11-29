export interface Config {
  location: {
    latitude: number
    longitude: number
  }
  theme: 'DARK' | 'LIGHT'
}

export interface ConfigOptions {}

export const config = (options: ConfigOptions): Promise<Config> =>
  Promise.resolve({
    location: {
      latitude: 45.512794,
      longitude: -122.679565,
    },
    theme: 'DARK',
  })

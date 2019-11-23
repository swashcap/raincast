import React from 'react'

import { ImageCard } from './ImageCard'

export default {
  component: ImageCard,
  title: 'Components|ImageCard',
}

export const Default = () => (
  <ImageCard
    imageAlt="A placeholder kitten"
    imageSaveDate={new Date(Date.now() - 60 * 60 * 1000)}
    imageSrc="//placekitten.com/600/400"
    name="Robert Kitten"
  />
)

export const WithLink = () => (
  <ImageCard
    imageAlt="Placeholder kittens"
    imageSaveDate={new Date(Date.now() - 24 * 60 * 60 * 1000)}
    imageSrc="//placekitten.com/600/400?image=2"
    link="http://placekitten.com"
    name="Kittens in a Basket"
  />
)

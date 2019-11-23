import EventEmitter from 'events'
import { useEffect, useState } from 'react'

const applicationClockEmitter = new (class extends EventEmitter {
  _interval: NodeJS.Timeout
  constructor() {
    super()
    this._interval = setInterval(() => this.emit('tick', new Date()), 1000)
  }
})()

export const useCurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    applicationClockEmitter.on('tick', setCurrentDate)
    return () => applicationClockEmitter.off('tick', setCurrentDate)
  })

  return currentDate
}

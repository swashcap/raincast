import test from 'ava'

import { formatTemperature } from '../../../src/render/lib/formatTemperature'

test('formatTemperature', t => {
  t.is(formatTemperature(76.543), '76.5°', 'formats temperature')
})

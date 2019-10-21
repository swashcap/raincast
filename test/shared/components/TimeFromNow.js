import test from 'ava'

import { getDiff } from '../../../src/shared/components/TimeFromNow'

test('time difference', (t) => {
  t.deepEqual(
    getDiff(new Date(), new Date(Date.now() - 30 * 1000)),
    {
      diff: '<1',
      units: 'minutes'
    }
  )
  t.deepEqual(
    getDiff(new Date(), new Date(Date.now() - 60 * 1000 * 2)),
    {
      diff: 2,
      units: 'minutes'
    }
  )
  t.deepEqual(
    getDiff(new Date(), new Date(Date.now() - 61 * 60 * 1000)),
    {
      diff: 1,
      units: 'hours'
    }
  )
})

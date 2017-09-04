import { expect } from 'chai'
import { setAlarm } from '../../src/utils'

describe.only('utils.setAlarm', () => {
  it('exists', () => {
    expect(setAlarm).to.exist
  })
})


       // BEGIN:VALARM
       // TRIGGER;VALUE=DATE-TIME:19970317T133000Z
       // REPEAT:4
       // DURATION:PT15M
       // ACTION:AUDIO
       // ATTACH;FMTTYPE=audio/basic:ftp://example.com/pub/
       //  sounds/bell-01.aud
       // END:VALARM
/**
 *  This worker performs the calculation
 *  for finding out how many bars are required.
 *  Since this is compute heavy task, we delegate this task
 *  to a separate thread.
 */

const { isMainThread, parentPort } = require('worker_threads')
const REBAR_UNIT_LENGTH = 12

if (!isMainThread) {
  parentPort.on('message', ({ lengths }) => {
    const result = {
      totalLengthRebars: 0,
      wastedRebars: 0,
      totalNumberRebars: 0,
    }

    console.log('Worker recieve', { lengths })

    for (const val of lengths) {
      if (val.length === 0) continue

      const totalLength = val.length * val.quantity

      const wholeRequired = Math.floor(totalLength / REBAR_UNIT_LENGTH)
      const totalMadeFromWhole = wholeRequired * REBAR_UNIT_LENGTH

      const leftToMake = totalLength - totalMadeFromWhole

      result.totalNumberRebars =
        result.totalNumberRebars + (leftToMake > 0 ? wholeRequired + 1 : wholeRequired)
      result.totalLengthRebars = result.totalLengthRebars + totalLength
      result.wastedRebars =
        result.wastedRebars + (leftToMake > 0 ? REBAR_UNIT_LENGTH - leftToMake : 0)
    }

    setTimeout(() => {
      parentPort.postMessage({ result })
    }, 1500)
  })
}

/**
 *  This worker performs the calculation
 *  for finding out how many bars are required.
 *  Since this is compute heavy task, we delegate this task
 *  to a separate thread.
 */

const { isMainThread, parentPort } = require('worker_threads')

if (!isMainThread) {
  parentPort.on('message', (data) => {
    console.log('Worker recieve', data)

    setTimeout(() => {
      parentPort.postMessage({ data })
    }, 1500)
  })
}

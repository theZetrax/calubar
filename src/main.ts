import { app, BrowserWindow } from 'electron'
import { ipcMain } from 'electron'
import { env } from 'process'
import { isMainThread, Worker } from 'worker_threads'
import path from 'path'

// this should be placed at top of main.js to handle setup events quickly
if (handleSquirrelEvent()) {
  // squirrel event handled and app will exit in 1000ms, so don't do anything else
}

// Handle squirrel for managing setup.
function handleSquirrelEvent() {
  if (process.argv.length === 1) {
    return false
  }

  const ChildProcess = require('child_process')
  const path = require('path')

  const appFolder = path.resolve(process.execPath, '..')
  const rootAtomFolder = path.resolve(appFolder, '..')
  const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'))
  const exeName = path.basename(process.execPath)

  const spawn = function (command: any, args: any) {
    let spawnedProcess, error

    try {
      spawnedProcess = ChildProcess.spawn(command, args, { detached: true })
    } catch (error) {}

    return spawnedProcess
  }

  const spawnUpdate = function (args: any) {
    return spawn(updateDotExe, args)
  }

  const squirrelEvent = process.argv[1]
  switch (squirrelEvent) {
    case '--squirrel-install':
    case '--squirrel-updated':
      // Install desktop and start menu shortcuts
      spawnUpdate(['--createShortcut', exeName])

      setTimeout(app.quit, 1000)
      return true

    case '--squirrel-uninstall':
      // Remove desktop and start menu shortcuts
      spawnUpdate(['--removeShortcut', exeName])

      setTimeout(app.quit, 1000)
      return true

    case '--squirrel-obsolete':
      app.quit()
      return true
  }
}

const ICON_PATH = path.join(__dirname, 'assets', 'icons', 'png', '64x64.png')

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

// If not, the mainWindow object will be garbage collected
let mainWindow

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    height: 800,
    width: 800,
    icon: ICON_PATH,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  })

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  // Open the DevTools, if in dev mode.
  if (env.MODE === 'development') mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.

// Added Worker
// Do process intensive task
ipcMain.on('calculate-bars', (event, { lengths }) => {
  let calculationWorker: Worker
  if (isMainThread) {
    // Loading calculation worker
    calculationWorker = new Worker(path.join(__dirname, 'worker.js'))

    calculationWorker.on('error', (err) => {
      console.log('\nGot Error', {
        err,
      })
    })

    calculationWorker.on('exit', (data) => {
      console.log('Worker Exiting...')
    })

    calculationWorker.on('message', ({ result }) => {
      event.reply('calculate-bars-complete', { result })
      calculationWorker.terminate()
    })
  }

  calculationWorker.postMessage({ lengths })
})

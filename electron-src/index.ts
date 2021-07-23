/* eslint-disable import/no-extraneous-dependencies */
// Native
import { join } from 'path'
import { format } from 'url'
import { env } from 'process'

// Packages
import { BrowserWindow, app, ipcMain, IpcMainEvent } from 'electron'
import isDev from 'electron-is-dev'
import prepareNext from 'electron-next'
import ffmpeg from 'ffmpeg-static'
import ffprobe from 'ffprobe-static'
import dotenv from 'dotenv'

import MediaServersWrapper from '../server/out/mediaServersWrapper'

dotenv.config()
env.FFMPEG_PATH = ffmpeg
env.FFPROBE_PATH = ffprobe.path

const servers = new MediaServersWrapper()
servers.start()

// Prepare the renderer once the app is ready
app.on('ready', async () => {
  await prepareNext('./renderer')

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: false,
      preload: join(__dirname, 'preload.js'),
    },
  })

  const url = isDev
    ? 'http://localhost:8000/'
    : format({
        pathname: join(__dirname, '../../renderer/out/index.html'),
        protocol: 'file:',
        slashes: true,
      })

  mainWindow.loadURL(url)
})

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit)

// listen the channel `message` and resend the received message to the renderer process
ipcMain.on('message', (event: IpcMainEvent, message: any) => {
  console.log(message)
  setTimeout(() => event.sender.send('message', 'hi from electron'), 500)
})

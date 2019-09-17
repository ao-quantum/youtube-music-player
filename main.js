const { app, BrowserWindow, Notification} = require('electron');
const notifier = require('node-notifier')

let win;

function createWindow() {
    win = new BrowserWindow({
        length: 800,
        width: 600,
        webPreferences: {
            nodeIntegration: true
        },
        icon: __dirname + "/icon.png"
    })
    win.removeMenu()
    win.setTitle('Youtube Desktop')

    win.loadURL('https://music.youtube.com')
}

app.on('ready', () => {
    createWindow()
})

app.on('closed', () => {
    win = null
})

app.on('activate', () => {
    if (!win) {
        createWindow()
    }
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})


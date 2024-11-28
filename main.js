// console.log("Processo Principal")
const { app, BrowserWindow, nativeTheme } = require('electron')

// janela principal
const createWindow = () => {
    // nativeTheme.themeSource = 'dark'
    // nativeTheme.themeSource = 'light'
    nativeTheme.themeSource = 'system'
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    icon: './src/public/img/dark_icone_img.jpg',
    autoHideMenuBar: true,
    // resizable: false
    
  })

  win.loadFile('./src/views/index.html')
}

// janelas adicionais
const newWindow = () => {
    // nativeTheme.themeSource = 'dark'
    // nativeTheme.themeSource = 'light'
    nativeTheme.themeSource = 'system'
  const novaJanela = new BrowserWindow({
    width: 800,
    height: 600,
    icon: './src/public/img/dark_icone_img.jpg',
    autoHideMenuBar: true,
    resizable: false
    
  })

  novaJanela.loadFile('./src/views/modelo_nova_janela.html')
}


app.whenReady().then(() => {
  createWindow()
//   newWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
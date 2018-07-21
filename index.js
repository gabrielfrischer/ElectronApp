const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow

function createWindow(){

    mainWindow = new BrowserWindow({width:1000,height:700})
    mainWindow.loadFile("InstagramLogin.html")
    
     

}

app.on('ready',createWindow)

app.on('window-all-closed',function()
{
    app.quit();
})
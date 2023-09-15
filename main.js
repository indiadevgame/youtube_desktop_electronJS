const {app , BrowserWindow} = require('electron');


function windowApi(){
const win = new BrowserWindow({
    width:1400,
    height:600,
    webPreferences:{
        nodeIntegration: true
    }
})
win.loadFile("index.html")    
};


app.whenReady().then(windowApi);
import { app, BrowserWindow, } from "electron";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function createWindow() {
    const win = new BrowserWindow({
        title: "My manager",
        width: 800,
        height: 600,
    });
    win.webContents.openDevTools();
    win.loadURL("http://localhost:3000/");
}

app.whenReady().then(() => {
    createWindow();
    app.on("activate", () => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", () => {
    if(process.platform === "darwin") app.quit();
})
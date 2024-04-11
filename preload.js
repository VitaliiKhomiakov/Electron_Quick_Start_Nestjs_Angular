// preload.js
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  // Настройка заголовка Content-Security-Policy
  setCSP: function (policy) {
    const { session } = require('electron');
    session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
      callback({ responseHeaders: `default-src 'self' ${policy}` });
    });
  }
});


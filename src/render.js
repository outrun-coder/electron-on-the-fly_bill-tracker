// FW
const { ipcRenderer } = require('electron');

console.log("SSR RENDER.js WORKING!");

// Buttons
const videoElement = document.querySelector('video');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const videoSelectBtn = document.getElementById('videoSelectBtn');

// Get the available video sources
async function getVideoSources() {
  console.log('POC: GET_VID_SOURCES', ipcRenderer);
  ipcRenderer.send("vid-sources:collect", {
    test: true,
    asdf: 'apple'
  });
}

// Event Handlers
videoSelectBtn.onclick = getVideoSources;

// x Bad attempt to access the Menu module from the render side
// ipcRenderer.on('vid-sources:ready', (err, inputSources) => {
//   const possibleSourceSelections = inputSources.map(source => {
//     console.log('>> label:', source.name);
//     return {
//       label: source.name,
//       click: () => console.log(`>> ${source.name} CLICKED!`) // TODO selectSource(source)
//     }
//   });

//   const videoOptionsMenu = Menu.buildFromTemplate(
//     possibleSourceSelections.map(possibleSourceSelections)
//   );

//   videoOptionsMenu.popup();
// });
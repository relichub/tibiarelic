const mobileAudioLayout=matchMedia("(max-width: 600px)");
const siteAudio=document.querySelector('#site-audio'),soundToggle=document.querySelector('#sound-toggle');siteAudio.volume=.35;
function paintSoundButton(){const on=!siteAudio.paused;soundToggle.setAttribute('aria-pressed',String(on));soundToggle.setAttribute('aria-label',on?'Turn sound off':'Play sound');soundToggle.title=on?'Turn sound off':'Play sound';soundToggle.classList.toggle('sound-on',on);soundToggle.innerHTML=`<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z${on?'M17 8q4 4 0 8M19 5q7 7 0 14':'M17 9l5 6m0-6-5 6'}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;}
soundToggle.onclick=async()=>{if(!siteAudio.paused){siteAudio.pause();return}try{await siteAudio.play()}catch{soundToggle.title='Click to try playing sound again';}};siteAudio.addEventListener('play',paintSoundButton);siteAudio.addEventListener('pause',paintSoundButton);paintSoundButton();
// Request sound on entry; resume after the first gesture when autoplay is blocked.
let waitingForAudioGesture=false;
function removeAudioStartListeners(){document.removeEventListener('pointerdown',startAudioAfterGesture);document.removeEventListener('keydown',startAudioAfterGesture);waitingForAudioGesture=false;}
async function startAudioAfterGesture(event){if(mobileAudioLayout.matches)return;if(event?.target?.closest?.('#sound-toggle'))return;removeAudioStartListeners();try{await siteAudio.play()}catch{}}
siteAudio.addEventListener('play',removeAudioStartListeners);
(async()=>{if(mobileAudioLayout.matches)return;try{await siteAudio.play()}catch{waitingForAudioGesture=true;document.addEventListener('pointerdown',startAudioAfterGesture);document.addEventListener('keydown',startAudioAfterGesture)}})();

mobileAudioLayout.addEventListener("change",event=>{if(event.matches){removeAudioStartListeners();siteAudio.pause();}});

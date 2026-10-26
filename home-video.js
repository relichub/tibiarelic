function hideRelicVideo(){const panel=document.querySelector('.relic-video-panel');panel?.querySelector('video')?.pause();panel?.remove();}
function addHomeVideo(){if(!document.querySelector('main .equipment-layout')||selectedCategory==='backpacks'){hideRelicVideo();return;}if(document.querySelector('.relic-video-panel'))return;const shortcut=document.querySelector('.shortcut-loot');if(!shortcut)return;shortcut.insertAdjacentHTML('beforebegin',`<section class="panel relic-video-panel"><a href="https://www.tibiarelic.com/" target="_blank" rel="noopener noreferrer" class="relic-video-link" aria-label="Visit TibiaRelic.com" title="Visit TibiaRelic.com"><video src="assets/relic-video.mp4" autoplay muted loop playsinline preload="metadata" aria-label="TibiaRelic promotional video"></video></a></section>`);}
const appendLootBeforeVideo=appendLoot;appendLoot=function(){appendLootBeforeVideo();addHomeVideo()};const showHuntBeforeVideo=showHunt;showHunt=function(name){hideRelicVideo();showHuntBeforeVideo(name)};
const catalogueBeforeVideo=catalogue;catalogue=function(query=''){catalogueBeforeVideo(query);addHomeVideo()};
addHomeVideo();


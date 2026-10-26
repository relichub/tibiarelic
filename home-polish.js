let ammunitionTimers=[];
function clearAmmunitionAnimation(){ammunitionTimers.forEach(clearTimeout);ammunitionTimers=[];}
function polishHomeIcons(){clearAmmunitionAnimation();const ring=document.querySelector('.equipment-layout .slot-rings .icon img');if(ring)ring.src='assets/home-golden-ring.png';const icon=document.querySelector('.equipment-layout .slot-ammunition .icon');if(!icon)return;icon.classList.add('ammunition-cycle');icon.dataset.sequence='1,2,3,4,5';icon.dataset.frameMs='1000';icon.innerHTML='<img class="ammunition-frame" src="assets/ammo-Burst_Arrow-0.png" alt="" width="48" height="48" style="opacity:1">';if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;let frame=0;function advance(){if(!icon.isConnected)return;frame=(frame+1)%5;icon.firstElementChild.src=`assets/ammo-Burst_Arrow-${frame}.png`;icon.dataset.quantity=String(frame+1);ammunitionTimers.push(setTimeout(advance,1000))}icon.dataset.quantity='1';ammunitionTimers.push(setTimeout(advance,1000));}
const renderBeforeHomePolish=render;render=function(){clearAmmunitionAnimation();renderBeforeHomePolish();polishHomeIcons()};const catalogueBeforeHomePolish=catalogue;catalogue=function(query=''){catalogueBeforeHomePolish(query);polishHomeIcons()};
const rightColumn=document.querySelector('.right');let rightFadeAnimation;
new MutationObserver(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;rightFadeAnimation?.cancel();rightFadeAnimation=rightColumn.animate([{opacity:0},{opacity:1}],{duration:500,easing:'ease-out'});}).observe(rightColumn,{childList:true});
polishHomeIcons();



// Complete mobile menu actions consistently for category and spell navigation.
const showSpellsBeforeResponsive=showSpells;
showSpells=function(vocation){showSpellsBeforeResponsive(vocation);document.querySelector('#sidebar').classList.remove('open');document.querySelector('#menu').setAttribute('aria-expanded','false');};
// Translate uppercase section labels as well as mixed-case menu labels.
for(const dictionary of Object.values(languageText)){
 for(const [label,translation] of Object.entries(dictionary)){
  const uppercase=label.toUpperCase();
  if(!dictionary[uppercase])dictionary[uppercase]=translation.toUpperCase();
 }
}

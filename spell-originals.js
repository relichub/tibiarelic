// User-supplied PNG sprites take precedence over reference screenshot crops.
const uploadedSpellKeys = new Set(["berserk","enchant-staff","energy-beam","energy-field","energy-strike","energy-wall","energy-wave","find-person","fire-field","fire-wave","fireball","flame-strike","force-strike","great-light","haste","heavy-magic-missile","levitate","light","light-healing","light-magic-missile","magic-wall","poison-field","poison-storm","power-bolt","sudden-death","summon-creature","ultimate-explosion","ultimate-light"]);
const uploadedSpellAliases = {
 'Antidote':'light-healing','Intense Healing':'light-healing','Ultimate Healing':'light-healing',
 'Invisible':'light-healing','Creature Illusion':'light-healing','Cancel Invisibility':'light-healing',
 'Challenge':'light-healing','Strong Haste':'haste','Great Energy Beam':'flame-strike'
};
const spellArtworkBeforeOriginals = spellArtwork;
spellArtwork = function(spell) {
 const key = uploadedSpellAliases[spell.name] || spell.name.toLowerCase().replaceAll(' ', '-');
 if (!uploadedSpellKeys.has(key)) return spellArtworkBeforeOriginals(spell);
 return `<img class="magic-sprite original-spell-sprite" src="assets/spell-original-${key}.png" alt="" width="40" height="40">`;
};
const animatedSpellArtworkBefore=spellArtwork;
spellArtwork=function(spell){
 const animated={'Invisible':'invisible','Food':'food','Animate Dead':'skeleton'};
 const key=animated[spell.name];
 return key?`<img class="magic-sprite animated-spell-sprite" src="assets/spell-animated-${key}.gif" alt="" width="40" height="40">`:animatedSpellArtworkBefore(spell);
};

const lootPanelBeforeToolLinks=lootPanel;
lootPanel=function(){return lootPanelBeforeToolLinks().replace('<h2>SHORTCUT LOOT</h2>',`<div class="loot-heading"><a class="loot-heading-link" href="https://relichub.github.io/relicloot/" target="_blank" rel="noopener noreferrer">Relic Loot</a><h2>SHORTCUT LOOT</h2><a class="loot-heading-link" href="https://relichub.github.io/teamhunt/" target="_blank" rel="noopener noreferrer">Team Hunt</a></div>`)};
appendLoot();

module.exports = {
  description: "A Pokémon's experience should match its level.",
  field: 'level',
  test (pkmn) {
    const currentLevel = pkmn.level;
    const currentExp = pkmn.exp;
    const growthRate = pkmn.growthRate;
    const maxExpSlowToFast = 600000;
    const maxExpFast = 800000;
    const maxExpMedium = 1000000;
    const maxExpMediumSlow = 1059860;
    const maxExpSlow = 1250000;
    const maxExpFastToSlow = 1640000;
    let pkmnMaxExp = 0;

    if (currentLevel === 100) {
      if (growthRate === 'slow-then-very-fast') {
        pkmnMaxExp = maxExpSlowToFast;
      }
      if (growthRate === 'fast') {
        pkmnMaxExp = maxExpFast;
      }
      if (growthRate === 'medium') {
        pkmnMaxExp = maxExpMedium;
      }
      if (growthRate === 'medium-slow') {
        pkmnMaxExp = maxExpMediumSlow;
      }
      if (growthRate === 'slow') {
        pkmnMaxExp = maxExpSlow;
      }
      if (growthRate === 'fast-then-very-slow') {
        pkmnMaxExp = maxExpFastToSlow;
      }
      return pkmnMaxExp > currentExp;
    }
    return currentLevel < 100;
  }
};

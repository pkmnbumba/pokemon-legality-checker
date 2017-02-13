module.exports = {
  description: "A Pokémon's experience should match its level.",
  field: 'level',
  test (pkmn) {
    const currentLevel = pkmn.level;
    const currentExp = pkmn.exp;
    const growthRate = pkmn.growthRate;
    const maxExp = {
      'slow-then-very-fast': 600000,
      fast: 800000,
      medium: 1000000,
      'medium-slow': 1059860,
      slow: 1250000,
      'fast-then-very-slow': 1640000};

    if (currentLevel === 100) {
      return maxExp[growthRate] > currentExp;
    }
    return currentLevel < 100;
  }
};

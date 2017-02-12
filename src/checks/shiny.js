module.exports = {
  description: 'Certain Pokemon cannot be obtained shiny.',
  field: 'isShiny',
  filter (pkmn) {
    return [251, 494, 647, 648, 718, 720, 721, 785, 786,
      787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797,
      798, 799, 800, 801, 802].includes(pkmn.dexNo);
  },
  test (pkmn) {
    return !pkmn.isShiny;
  }
};

module.exports = {
  description: 'A Pokémon from SuMo can only be hyper trained if level 100.',
  filter (pkmn) {
    return pkmn.level !== 100;
  },
  field: 'level',
  test (pkmn) {
    return !(pkmn.hyperTrainedHp || pkmn.hyperTrainedAtk ||
             pkmn.hyperTrainedDef || pkmn.hyperTrainedSpAtk ||
             pkmn.hyperTrainedSpDef || pkmn.hyperTrainedSpe);
  }
};

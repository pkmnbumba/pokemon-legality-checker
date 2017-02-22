module.exports = {
  description: 'A maxed IV (31) cannot be hypertrained.',
  field: 'iv',
  test (pkmn) {
    return !(
      pkmn.ivHp === 31 && pkmn.hyperTrainedHp ||
      pkmn.ivAtk === 31 && pkmn.hyperTrainedAtk ||
      pkmn.ivDef === 31 && pkmn.hyperTrainedDef ||
      pkmn.ivSpAtk === 31 && pkmn.hyperTrainedSpAtk ||
      pkmn.ivSpDef === 31 && pkmn.hyperTrainedSpDef ||
      pkmn.ivSpe === 31 && pkmn.hyperTrainedSpe
);
  }
};

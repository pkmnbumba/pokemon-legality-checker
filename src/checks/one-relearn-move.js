const gameCheck = require('../helpers/gameId.js');

module.exports = {
  description: 'Pokemon hatched from an egg in gen 6-7 must have at least one relearn move.',
  field: 'eggMoveName',
  filter (pkmn) {
    return !(pkmn.eggLocationId === 0);
  },
  test (pkmn) {
    if (gameCheck.originGen(pkmn.otGameId) < 6) {
      return pkmn.eggMove1Id === 0;
    }
    return pkmn.eggMove1Id > 0;
  }
};

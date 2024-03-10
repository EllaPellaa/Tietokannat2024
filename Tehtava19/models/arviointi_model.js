const db = require('../database');

const arviointi = {
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from arviointi where idArviointi=?', [id], callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (idOpiskelija, idOpintojakso, arvosana, paivamaara) values(?,?,?,?)',
      [arviointi.idOpiskelija, arviointi.idOpintojakso, arviointi.arvosana, arviointi.paivamaara],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where idArviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set idOpiskelija=?, idOpintojakso=?, arvosana=?, paivamaara=? where idarviointi=?',
      [arviointi.idOpiskelija, arviointi.idOpintojakso, arviointi.arvosana, arviointi.paivamaara, id],
      callback
    );
  }
};
module.exports = arviointi;
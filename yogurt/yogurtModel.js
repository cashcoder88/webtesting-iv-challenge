const db = require('../data/dbConfig.js');

module.exports = {
    getYogurt,
    getYogurtById,
    addYogurt
}

function getYogurt() {
    return db('yogurts');
}


function getYogurtById(id) {
    return db('yogurts')
        .where( {id} )
        .first();
}


function addYogurt(yogurt) {
    return db('yogurts')
    .insert(yogurt, 'id')
}


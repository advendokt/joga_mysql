const db = require('../utils/db')

const getAllArticles = (req, res) => {
    let sql = 'SELECT * FROM article'
    db.query(sql, (error, result) => {
        console.log(result)
    })
}

module.exports = {
    getAllArticles: (req, res) => {
        res.send('Все статьи');
    }
};

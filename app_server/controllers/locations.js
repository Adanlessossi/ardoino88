/* GET 'Location list' page */
module.exports.locationlist = function(req, res) {
    res.render('index', { title: 'Location List' });
};
/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('index', { title: 'Location info' });
};
/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('index', { title: 'Bewertung' });
};
/* GET 'Food location' page */
module.exports.food = function(req, res) {
    res.render('index', { title: 'Was Essen' });
};
/* GET 'Excursion location' page */
module.exports.tour = function(req, res) {
    res.render('index', { title: 'Ausflüge' });
};
/* GET 'Beach location' page */
module.exports.beach = function(req, res) {
    res.render('index', { title: 'Strände' });
};
/* GET 'Excursion location' page */
module.exports.shopping = function(req, res) {
    res.render('index', { title: 'Shopping' });
};
module.exports.serviceList = function(req, res) {
    res.render('index', { title: 'Service List' });
};

module.exports.description = function(req, res) {
    res.render('index', { title: 'Beschreibung des Hauses' });
};

module.exports.direction = function(req, res) {
    res.render('index', { title: 'Weg Beschreibung' });
};

module.exports.costs = function(req, res) {
    res.render('index', { title: 'Kosten pro Woche' });
};
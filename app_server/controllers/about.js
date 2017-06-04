/* GET 'About' page */
module.exports.about = function(req, res) {
    res.render('about', {
        title: 'Über uns',
        owners: [{
            name: 'Michael Stranner',
            strasse: 'Dorfbergstrasse 13',
            plz: '3550',
            ort: 'Langnau',
            email: 'michael@stranner.ch',
            phone: '0041-79-330-9919',
            description: 'Michael ist ein Weinberater',
            male: true
        }, {
            name: 'Magdalena Stranner',
            strasse: 'Grossweidweg 15',
            plz: '3174',
            ort: 'Thörishaus Dorf',
            email: 'magda.stranner@gmail.com',
            phone: '0041-79-238-3229',
            description: 'Magdalena ist Orientteppich -un Ethno Schmuck Liebhaberin',
            male: false
        }]
    });
};
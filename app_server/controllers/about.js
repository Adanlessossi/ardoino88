/* GET 'About' page */
module.exports.about = function(req, res) {
    res.render('about', {
        title: 'Über uns',
        owner1: 'Michael Stranner',
        address1: {
            strasse: '',
            plz: '',
            ort: '',
            email: '',
            phone: '',
            picture: ''
        },
        owner2: 'Magdalena Stranner',
        address2: {
            strasse: 'Grossweidweg 15',
            plz: '3174',
            ort: 'Thörishaus Dorf',
            email: 'magda.stranner@gmail.com',
            phone: '+41-79-238-3229',
            picture: ''
        },
        description: ''
    });
};
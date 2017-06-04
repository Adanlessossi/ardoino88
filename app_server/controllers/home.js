/* GET home page */
module.exports.index = function(req, res) {
    res.render('home', {
        title: 'Ardoino 88',
        panelText1: 'Von San Bartolomeo über Villa Faraldi (in diesem Fall nicht: Chiappa) her kommend, vor der Kirche links abbiegen. Dem Weg folgen. Er ist eng, stellenweise steil und Du kannst das Gefühl bekommen, Du seist falsch. Dann bist Du richtig... Der Weg endet bei einem Parkplatz; dort parkieren.',
        panelText2: 'Möchten Sie auftanken, entspannen und einfach dem Alltagsstress entfliehen? Auf unserem grosszügigen Anwesen (ca. 4‘000m2) gibt es viele, gemütliche und sonnige Plätzchen, die direkt dazu einladen, auf einem Liegebett auszuruhen oder ein Buch zu lesen.',
        panelText3: 'Ein Aufenthalt im Ferienhaus Tovo Faraldi kostet 300.-- schweizer Franken pro Woche. Zusätzlich wurde ein Pauschal von 50.-- Franken für Nachreinigung angerechnet.'
    });
};
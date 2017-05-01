/* GET home page */
module.exports.index = function(req, res) {
    res.render('home', {
        title: 'Ardoino 88',
        panelText1: 'Eingebettet in ewig grüne Olivenbäume, oberhalb von San Bartolomeo al mare, liegt auf 350 m.ü.M. das Dörfchen Tovo- Faraldi. Gerade noch 45 einheimische Bewohner bevölkern ganzjährig das malerische Dorf. Tovo Faraldi ist ca. 9 km vom Mittelmeer entfernt.',
        panelText2: 'Möchten Sie auftanken, entspannen und einfach dem Alltagsstress entfliehen? Auf unserem grosszügigen Anwesen (ca. 4‘000m2) gibt es viele, gemütliche und sonnige Plätzchen, die direkt dazu einladen, auf einem Liegebett auszuruhen oder ein Buch zu lesen.',
        panelText3: 'Ein Aufenthalt im Ferienhaus Tovo Faraldi kostet 300.-- schweizer Franken pro Woche. Zusätzlich wurde ein Pauschal von 50.-- Franken für Nachreinigung angerechnet.'
    });
};
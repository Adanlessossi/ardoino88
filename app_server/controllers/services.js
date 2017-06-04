module.exports.description = function(req, res) {
    res.render('description', {
        title: 'Beschreibung des Hauses',
        ruleText: 'Haus Ordnung',
        ruleDocument: 'Bedienungsanleitung'
    });
};

module.exports.direction = function(req, res) {
    res.render('wegbeschreibung', {
        title: 'Weg Beschreibung',
        panelText1: 'Von San Bartolomeo über Villa Faraldi (in diesem Fall nicht: Chiappa) her kommend, vor der Kirche links abbiegen. Dem Weg folgen.',
        panelText2: ' Er ist eng, stellenweise steil und Du kannst das Gefühl bekommen, Du seist falsch. Dann bist Du richtig...',
        panelText3: 'Der Weg endet bei einem Parkplatz; dort parkieren. Der grosse Platz bei der Kirche ist übrigens auch ein Parkplatz, der benutzt werden kann.',
        panelText4: 'Den Weg hinunterlaufen, wohl 100 Meter, bis die ziegelrote Pflästerung beginnt. Dort führt links ein "Tunnel" durch ein Haus in den Hof.',
        panelText5: 'Vorne links ist ein kleines Häuschen mit einem Briefkasten, welcher mit "Stranner"  beschriftet ist. Gegenüber das Gartentööri zur Terrasse. Vor dem Fenster rechts der Türe ist ein Töpfli, dort ist der Schlüssel drin. Voilà.'
    });
};

module.exports.costs = function(req, res) {
    res.render('costs', {
        title: 'Kosten pro Woche',
        costs: [{
                name: 'Okt-März',
                description: 'Ferien vom Oktober bis März',
                image: '../images/panorama1.jpg',
                price: 400,
                cleaning: 50
            },
            {
                name: 'April-Juni',
                description: 'Ferien vom April bis Juni',
                image: '../images/panorama1.jpg',
                price: 450,
                cleaning: 60
            }, {
                name: 'Juli-Sept',
                description: 'Ferien vom Juli bis September',
                image: '../images/panorama1.jpg',
                price: 550,
                cleaning: 70
            }
        ]
    });
};
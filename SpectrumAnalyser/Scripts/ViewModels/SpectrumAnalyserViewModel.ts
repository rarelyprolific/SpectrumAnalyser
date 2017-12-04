class SpeccyGame {
    Title: string
    Publisher: string
    Genre: string
    ReleaseYear: number
}

class SpectrumAnalyserViewModel {
    public SpectrumGame: KnockoutObservable<SpeccyGame>;

    constructor() {
        this.SpectrumGame = ko.observable(new SpeccyGame());

        $.getJSON('/api/speccygamesapi', (gameData: any, textStatus: string, jqXHR: JQueryXHR) => {
             this.SpectrumGame($.extend(new SpeccyGame(), gameData[0]));
        });
    }
    
}

$(document).ready(function () {
    ko.applyBindings(new SpectrumAnalyserViewModel, document.getElementById('SpectrumAnalyser'));
})
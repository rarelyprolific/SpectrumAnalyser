var SpeccyGame = /** @class */ (function () {
    function SpeccyGame() {
    }
    return SpeccyGame;
}());
var SpectrumAnalyserViewModel = /** @class */ (function () {
    function SpectrumAnalyserViewModel() {
        var _this = this;
        this.SpectrumGame = ko.observable(new SpeccyGame());
        $.getJSON('/api/speccygamesapi', function (gameData, textStatus, jqXHR) {
            _this.SpectrumGame($.extend(new SpeccyGame(), gameData[0]));
        });
    }
    return SpectrumAnalyserViewModel;
}());
$(document).ready(function () {
    ko.applyBindings(new SpectrumAnalyserViewModel, document.getElementById('SpectrumAnalyser'));
});
//# sourceMappingURL=SpectrumAnalyserViewModel.js.map
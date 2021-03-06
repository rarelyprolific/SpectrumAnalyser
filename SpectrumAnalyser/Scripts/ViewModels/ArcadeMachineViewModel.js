var PoundCoin = Currency.PoundCoin;
var TwentyPenceCoin = Currency.TwentyPenceCoin;
var ArcadeMachine = /** @class */ (function () {
    function ArcadeMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        this.gameName = ko.observable('');
        this.acceptedCoins = [new PoundCoin(), new TwentyPenceCoin()];
        this.acceptCoin = function (coin) {
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.Value);
        };
    }
    return ArcadeMachine;
}());
//# sourceMappingURL=ArcadeMachineViewModel.js.map
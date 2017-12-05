var PoundCoin = /** @class */ (function () {
    function PoundCoin() {
        this.value = .25;
    }
    Object.defineProperty(PoundCoin.prototype, "Value", {
        get: function () {
            return this.value;
        },
        set: function (newValue) {
            this.value = newValue;
        },
        enumerable: true,
        configurable: true
    });
    PoundCoin.prototype.getImageUrl = function () {
        return "img/PoundCoin.png";
    };
    return PoundCoin;
}());
//# sourceMappingURL=Coin.js.map
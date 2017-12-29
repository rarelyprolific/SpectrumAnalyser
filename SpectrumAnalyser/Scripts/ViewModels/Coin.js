var PoundCoin = /** @class */ (function () {
    function PoundCoin() {
        this.value = 1;
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
var TwentyPenceCoin = /** @class */ (function () {
    function TwentyPenceCoin() {
        this.value = 0.25;
    }
    Object.defineProperty(TwentyPenceCoin.prototype, "Value", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    TwentyPenceCoin.prototype.getImageUrl = function () {
        return "img/TwentyPence.png";
    };
    return TwentyPenceCoin;
}());
//# sourceMappingURL=Coin.js.map
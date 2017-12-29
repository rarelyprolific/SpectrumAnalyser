interface Coin {
    getImageUrl(): string;

    Value: number;
}

class PoundCoin implements Coin {
    private value: number = 1;

    get Value(): number {
        return this.value;
    }

    set Value(newValue: number) {
        this.value = newValue;
    }

    getImageUrl(): string {
        return "img/PoundCoin.png";
    }
}

class TwentyPenceCoin implements Coin {
    private value: number = 0.25;

    get Value(): number {
        return this.value;
    }

    getImageUrl(): string {
        return "img/TwentyPence.png";
    }
}
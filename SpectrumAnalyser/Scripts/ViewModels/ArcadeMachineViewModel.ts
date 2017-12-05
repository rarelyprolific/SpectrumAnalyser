class ArcadeMachine {
    private paid = ko.observable(0);
    public gameName = ko.observable('');

    acceptedCoins: PoundCoin[] = [new PoundCoin()]

    acceptCoin = (coin: PoundCoin): void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.Value);
    }
}

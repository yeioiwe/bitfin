export interface UserT {
    name: string;
    rub: string;
    usdt: string;
}

export interface Currency {
    value: string;
    usdt_value: string;
}

export interface UserAssets {
    USDT: Currency;
    BTC: Currency;
    XRP: Currency;
    BNB: Currency;
    DOGE: Currency;
    SOL: Currency;
}

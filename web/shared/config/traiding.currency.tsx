import AptosIcon from '@/public/traiding/aptos-icon.png';
import ArbitrumIcon from '@/public/traiding/arbitrum-icon.png';
import BchIcon from '@/public/traiding/bch-icon.png';
import BnbIcon from '@/public/traiding/bnb-icon.png';
import BtcIcon from '@/public/traiding/btc-icon.png';
import DogeIcon from '@/public/traiding/doge-icon.png';
import EthIcon from '@/public/traiding/eth-icon.png';
import LinkIcon from '@/public/traiding/link-icon.png';
import LtcIcon from '@/public/traiding/ltc-icon.png';
import NotIcon from '@/public/traiding/not-icon.png';
import OpIcon from '@/public/traiding/op-icon.png';
import PepeIcon from '@/public/traiding/pepe-icon.png';
import SolIcon from '@/public/traiding/sol-icon.png';
import StellarIcon from '@/public/traiding/stellar-icon.png';
import StarkIcon from '@/public/traiding/strk-icon.png';
import SuiIcon from '@/public/traiding/sui-icon.png';
import TonIcon from '@/public/traiding/ton-icon.png';
import TrxIcon from '@/public/traiding/trx-icon.png';
import XrpIcon from '@/public/traiding/xrp-icon.png';
import { StaticImageData } from 'next/image';

export interface TraidingCurrency {
    name: string;
    code: string;
    icon: StaticImageData;
}

export const traidingCurrency: TraidingCurrency[] = [
    { name: 'Bitcoin', code: 'BTC', icon: BtcIcon },
    { name: 'Etherium', code: 'ETH', icon: EthIcon },
    { name: 'Litecoin', code: 'LTC', icon: LtcIcon },
    { name: 'Tron', code: 'TRX', icon: TrxIcon },
    { name: 'DogeCoin', code: 'DOGE', icon: DogeIcon },
    { name: 'Binance Coin', code: 'BNB', icon: BnbIcon },
    { name: 'Ripple', code: 'XRP', icon: XrpIcon },
    { name: 'Ton Coin', code: 'TON', icon: TonIcon },
    { name: 'Solana', code: 'SOL', icon: SolIcon },
    { name: 'Pepe Coin', code: 'PEPE', icon: PepeIcon },
    { name: 'Chainlink', code: 'LINK', icon: LinkIcon },
    { name: 'NOT Coin', code: 'NOT', icon: NotIcon },
    { name: 'Starknet', code: 'STRK', icon: StarkIcon },
    { name: 'Optimism', code: 'OP', icon: OpIcon },
    { name: 'Arbitrum', code: 'ARB', icon: ArbitrumIcon },
    { name: 'Aptos', code: 'APT', icon: AptosIcon },
    { name: 'Bitcoin Cash', code: 'BCH', icon: BchIcon },
    { name: 'Stellar coin', code: 'XLM', icon: StellarIcon },
    { name: 'Sui coin', code: 'SUI', icon: SuiIcon },
];

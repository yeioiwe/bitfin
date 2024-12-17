import { Col } from '@/shared/ui/boxes';
import { WalletAssets } from './wallet.assets';
import { WalletHistory } from './wallet.history';
import { WalletUserCard } from './wallet.usercard';

export const WalletMain = () => {
    return (
        <Col flex={1} mx={3} gap={4}>
            <WalletUserCard />
            <WalletAssets />
            <WalletHistory />
        </Col>
    );
};

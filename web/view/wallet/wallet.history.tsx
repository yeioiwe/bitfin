import { Col } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';

export const WalletHistory = () => {
    return (
        <Col gap={2} borderRadius={'6px'} alignItems={'flex-start'} py={2} px={4} bgcolor={'#172d3e'}>
            <Typography>История торговли:</Typography>
        </Col>
    );
};

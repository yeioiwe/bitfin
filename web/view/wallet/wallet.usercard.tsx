'use client';
import { Col, Row } from '@/shared/ui/boxes';
import { StyledButton } from '@/shared/ui/styled.button';
import { Typography } from '@mui/material';

export const WalletUserCard = () => {
    return (
        <Col gap={2} borderRadius={'6px'} alignItems={'flex-start'} p={4} bgcolor={'#172d3e'}>
            <Row gap={2}>
                <Typography>Аккаунт:</Typography>
                <Typography fontWeight={700} color="white">
                    Иван Иванов Иванович
                </Typography>
            </Row>
            <Col>
                <Typography>Общая стоимость активов:</Typography>
                <Typography color="white" fontSize={'32px'} fontWeight={700}>
                    3400.00 USDT
                </Typography>
                <Typography color="white">Баланс: 70000.23 RUB</Typography>
            </Col>
            <DepositButton />
        </Col>
    );
};

const DepositButton = () => {
    return (
        <Row gap={2}>
            <StyledButton>Пополнение</StyledButton>
            <StyledButton>Вывод</StyledButton>
        </Row>
    );
};

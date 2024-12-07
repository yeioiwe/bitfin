'use client';
import theme from '@/shared/theme/theme';
import { Col } from '@/shared/ui/boxes';
import { StyledButton } from '@/shared/ui/styled.button';
import { Box, Typography, useMediaQuery } from '@mui/material';

export const UserCard = ({ user }: { user: any }) => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Col bgcolor={'#172d3e'} p={4} borderRadius={'16px'} gap={4}>
            <Box
                display={'flex'}
                flexDirection={isSm ? 'column' : 'row'}
                justifyContent={'space-between'}
                alignItems={'flex-start'}
                gap={isSm ? 2 : 0}
            >
                <Col>
                    <Typography fontSize={'24px'}>Пользователь: {user.username}</Typography>
                    <Typography color="#fff" fontWeight={700} fontSize={isSm ? '21px' : '48px'}>
                        Торговый баланс: ₽ {user.balance}
                    </Typography>
                </Col>

                <StyledButton>Выплата</StyledButton>
            </Box>

            <Col gap={4}>
                <Typography fontWeight={700} fontSize={'24px'}>
                    Ваша прибыль:
                </Typography>

                <Box
                    display={'flex'}
                    gap={isSm ? 2 : 0}
                    flexDirection={isSm ? 'column' : 'row'}
                    justifyContent={'space-between'}
                >
                    <ProfitCard24 time="24ч" profit={user.profit_24} />
                    <ProfitCard24 time="7д" profit={user.profit_7} />
                    <ProfitCard24 time="30д" profit={user.profit_1} />
                </Box>
            </Col>
        </Col>
    );
};

const ProfitCard24 = ({ profit, time }: { profit: number; time: string }) => {
    return (
        <Col py={3} px={5} borderRadius={'10px'} bgcolor={'rgb(13, 29, 41)'}>
            <Typography>Прибыль за {time}</Typography>
            <Typography fontSize={'24px'} fontWeight={700} color={'#01A781'}>
                ₽ {profit}
            </Typography>
        </Col>
    );
};

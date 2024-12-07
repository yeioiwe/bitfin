import { Statistics } from '@/shared/config/statistics.items';
import { texts } from '@/shared/config/texts';
import theme from '@/shared/theme/theme';
import { Col } from '@/shared/ui/boxes';
import { Box, Typography, useMediaQuery } from '@mui/material';

export const StatisticsSection = () => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const items = Statistics;
    const text = texts;

    return (
        <Box
            id="statistics"
            height={isSm ? '100%' : '450px'}
            width={'100%'}
            sx={{
                backgroundImage: 'linear-gradient(180deg, #0e3452 50%, #0e3452 0, #0d1d29 85.8%)',
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <Col
                height={'100%'}
                sx={{
                    backgroundImage: 'url(chart.png)',

                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                <Col gap={4} height={'100%'} mx={isSm ? 3 : 6}>
                    <Col>
                        <Typography fontSize={30} fontWeight={700}>
                            {text.statisticsTitle}
                        </Typography>
                        <Typography color="#5a6972">{text.statisticsDescription}</Typography>
                    </Col>

                    <Box
                        justifyContent={'space-between'}
                        display={'flex'}
                        flexDirection={isSm ? 'column' : 'row'}
                        gap={4}
                    >
                        {items.map((s, i) => (
                            <StatisticsItem {...s} key={i} />
                        ))}
                    </Box>
                </Col>
            </Col>
        </Box>
    );
};

const StatisticsItem = ({ title, value }: { title: string; value: string }) => {
    return (
        <Col
            p={'30px'}
            sx={{
                backgroundColor: 'rgba(17, 42, 63, .9)',
                borderRadius: '16px',
            }}
            flexGrow={1}
        >
            <Typography fontSize={'18px'} color="#fff" fontWeight={700}>
                {title}
            </Typography>
            <Typography fontSize={'44px'} color="rgb(3,202,155)">
                {value}
            </Typography>
        </Col>
    );
};

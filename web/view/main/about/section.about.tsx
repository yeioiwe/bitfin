import { texts } from '@/shared/config/texts';
import theme from '@/shared/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Box, Typography, useMediaQuery } from '@mui/material';

export const AboutSection = () => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const text = texts;
    return (
        <Row id="about" alignItems={'flex-start'} mt={isSm ? 4 : 0}>
            <Col gap={4} mx={isSm ? 3 : 6}>
                <Box
                    sx={{
                        background: 'linear-gradient(117deg, #9bfee6, #4166bc)',
                        backgroundClip: 'text',
                        color: 'transparent',
                        WebkitBackgroundClip: 'text',
                    }}
                >
                    <Typography fontSize={'38px'} fontWeight={700}>
                        {text.aboutTitle}
                    </Typography>
                </Box>
                <Typography color="#fff" fontSize={'24px'}>
                    {text.aboutDescription}
                </Typography>
                <Typography>{text.aboutBlock_1}</Typography>

                <Typography>{text.aboutBlock_2}</Typography>

                <Typography>{text.aboutBlock_3}</Typography>

                <Typography>{text.aboutBlock_4}</Typography>
            </Col>

            {isSm ? null : (
                <Box
                    height={'705px'}
                    width={'1500px'}
                    sx={{
                        backgroundImage: 'url(dashboard.png)',
                    }}
                />
            )}
        </Row>
    );
};

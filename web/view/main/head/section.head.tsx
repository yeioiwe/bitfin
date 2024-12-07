'use client';
import BtcSVG from '@/public/coin-btc.svg';
import EosSVF from '@/public/coin-eos.svg';
import EthSVG from '@/public/coin-eth.svg';
import LtcSVG from '@/public/coin-ltc.svg';
import UsdtSVG from '@/public/coin-usdt.svg';
import XrpSVG from '@/public/coin-xrp.svg';
import { texts } from '@/shared/config/texts';
import theme from '@/shared/theme/theme';
import { Col } from '@/shared/ui/boxes';
import { StyledButton } from '@/shared/ui/styled.button';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const HeadSection = () => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const text = texts;
    const router = useRouter();

    return (
        <Col alignItems={'center'} paddingTop={'80px'}>
            <Col gap={4} paddingBottom={'90px'}>
                <Col maxWidth={550} textAlign={'center'} gap={2}>
                    <Typography fontWeight={700} fontSize={'66px'} lineHeight={1.1}>
                        {text.headTitle}
                    </Typography>

                    <Typography>{text.headDescription}</Typography>

                    {/* левая секция с монетами */}

                    <Box
                        sx={{ opacity: isSm ? '30%' : '100%' }}
                        position={'absolute'}
                        zIndex={-1}
                        top={'13%'}
                        left={isSm ? '-7%' : '20%'}
                    >
                        <Image src={UsdtSVG} alt="" />
                    </Box>

                    <Box
                        sx={{ opacity: isSm ? '30%' : '100%' }}
                        position={'absolute'}
                        zIndex={-1}
                        top={'27%'}
                        left={isSm ? '-19%' : '5%'}
                    >
                        <Image src={BtcSVG} alt="" />
                    </Box>

                    <Box
                        sx={{ opacity: isSm ? '30%' : '100%' }}
                        position={'absolute'}
                        zIndex={-1}
                        top={isSm ? '57%' : '43%'}
                        left={isSm ? '5%' : '24%'}
                    >
                        <Image src={EthSVG} alt="" />
                    </Box>

                    {/* правая секция с монетами */}

                    <Box
                        sx={{ opacity: isSm ? '30%' : '100%' }}
                        position={'absolute'}
                        zIndex={-1}
                        top={'13%'}
                        right={'20%'}
                    >
                        <Image src={EosSVF} alt="" />
                    </Box>

                    <Box
                        sx={{ opacity: isSm ? '30%' : '100%' }}
                        position={'absolute'}
                        zIndex={-1}
                        top={'27%'}
                        right={'5%'}
                    >
                        <Image src={XrpSVG} alt="" />
                    </Box>

                    <Box
                        sx={{ opacity: isSm ? '30%' : '100%' }}
                        position={'absolute'}
                        zIndex={-1}
                        top={isSm ? '65%' : '43%'}
                        right={'24%'}
                    >
                        <Image src={LtcSVG} alt="" />
                    </Box>
                </Col>

                <Box
                    justifyContent={'center'}
                    alignItems={'center'}
                    display={'flex'}
                    flexDirection={isSm ? 'column' : 'row'}
                    gap={4}
                >
                    <Button onClick={() => router.push('#about')} variant="outlined">
                        О проекте
                    </Button>
                    <StyledButton onClick={() => router.push('#review')} variant="contained">
                        Отзывы
                    </StyledButton>
                </Box>
            </Col>

            <Box
                height={'450px'}
                maxHeight={'450px'}
                width={'100%'}
                sx={{
                    backgroundImage: 'linear-gradient(0, #0e3452, transparent), url(header-bottom.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    margin: 'auto',
                }}
            />
        </Col>
    );
};

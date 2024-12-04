import LogoSVG from '@/public/logo.svg';
import theme from '@/shared/theme/theme';
import { Row } from '@/shared/ui/boxes';
import { Link, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';

export const AppBarLayout = () => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Row justifyContent={'space-around'} width={'100%'} height={'60px'} bgcolor={'rgb(13, 29, 41)'}>
            <Image src={LogoSVG} alt="" />

            {isSm ? null : (
                <Row gap={6}>
                    <Link href={'#statistics'}>
                        <Typography>Статистика</Typography>
                    </Link>
                    <Link href={'#about'}>
                        <Typography>О нас</Typography>
                    </Link>
                    <Link href={'#review'}>
                        <Typography>Отзывы</Typography>
                    </Link>
                </Row>
            )}
        </Row>
    );
};

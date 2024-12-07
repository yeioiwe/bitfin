'use client';
import LogoSVG from '@/public/logo.svg';
import theme from '@/shared/theme/theme';
import { Row } from '@/shared/ui/boxes';
import { Link, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LoginButton } from './login.button';

export const AppBarLayout = () => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const pathname = usePathname();

    console.log(pathname);

    return (
        <Row justifyContent={'space-around'} width={'100%'} height={'60px'} bgcolor={'rgb(13, 29, 41)'}>
            <Link href={'/'}>
                <Image src={LogoSVG} alt="" />
            </Link>

            {!isSm && pathname === '/' ? (
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
            ) : null}

            <LoginButton />
        </Row>
    );
};

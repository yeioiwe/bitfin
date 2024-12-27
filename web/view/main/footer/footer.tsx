import theme from '@/shared/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import RedditIcon from '@mui/icons-material/Reddit';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Link, Typography, useMediaQuery } from '@mui/material';
import { ReactNode } from 'react';

export const Footer = () => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Col mx={6} pt={12} height={400} alignItems={'flex-start'} justifyContent={'flex-start'}>
            <Box display={'flex'} flexDirection={isSm ? 'column' : 'row'} gap={isSm ? 4 : 12} alignItems={'flex-start'}>
                <Col gap={2}>
                    <Typography fontSize={'21px'} fontWeight={700} color="rgb(3,202,155)">
                        Legal & privacy
                    </Typography>

                    <Link href={'/privacy'}>
                        <Typography>Privacy</Typography>
                    </Link>

                    <Link href={'/cookies'}>
                        <Typography>Cookies Policy</Typography>
                    </Link>

                    <Link href={'/cookies_preferences'}>
                        <Typography>Cookies Preferences</Typography>
                    </Link>

                    <Link href={'/derivative'}>
                        <Typography>Derivative Terms</Typography>
                    </Link>

                    <Link href={'/terms'}>
                        <Typography>Terms</Typography>
                    </Link>
                </Col>

                <Col gap={2}>
                    <Typography fontSize={'21px'} fontWeight={700} color="rgb(3,202,155)">
                        Помощь
                    </Typography>

                    <Link href={'/help_center'}>
                        <Typography>Help Center</Typography>
                    </Link>

                    <Link href={'/contact_us'}>
                        <Typography>Contact Us</Typography>
                    </Link>

                    <Link href={'/bug_bounty'}>
                        <Typography>Bug Bounty</Typography>
                    </Link>
                </Col>
            </Box>

            <Row mt={isSm ? 4 : 0} width={'100%'} justifyContent={'space-between'}>
                <Typography>Copyright ©️ 2013-2024 iFinex Inc. All rights reserved.</Typography>

                <Row gap={2}>
                    <SocialMediaButton icon={<YouTubeIcon />} href="https://youtube.com" />
                    <SocialMediaButton icon={<XIcon />} href="https://x.com" />
                    <SocialMediaButton icon={<TelegramIcon />} href="https://telegram.org" />
                    <SocialMediaButton icon={<RedditIcon />} href="https://reddit.com" />
                </Row>
            </Row>
        </Col>
    );
};

const SocialMediaButton = ({ icon, href }: { icon: ReactNode; href: string }) => {
    return (
        <Link href={`${href}`}>
            <Box borderRadius={'15px'} p={1} bgcolor={'#0e3452'}>
                {icon}
            </Box>
        </Link>
    );
};

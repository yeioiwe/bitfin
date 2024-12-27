import { Col } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';

export const CookiesPreferencesMain = () => {
    return (
        <Col m={6} gap={4}>
            <Typography color="white" fontWeight={700} fontSize={36}>
                Manage Cookies Preferences
            </Typography>

            <Typography color="white" fontWeight={700} fontSize={24}>
                Strictly Necessary Cookies
            </Typography>
            <ul>
                <Typography>Last updated November 13, 2024</Typography>

                <Typography>
                    We use essential and functional cookies that are fundamental for the proper functioning of the
                    website. They ensure that the website operates efficiently and delivers the intended functionality.
                    In addition, they enable us to remember your preferences and settings, such as language and region
                    preferences so that you get a consistent experience without having to re-select your preferred
                    language or region each time you visit.
                </Typography>

                <Typography>For more information, see our Cookies Policy</Typography>
            </ul>

            <Typography color="white" fontWeight={700} fontSize={24}>
                Analytical Cookies
            </Typography>
            <ul>
                <Typography>Last updated November 9, 2024</Typography>

                <Typography>
                    We use analytical cookies to measure how users interact with site content, allowing us to record how
                    many people visit our site, how they navigate within, and what content is popular so we can make
                    improvements to enhance their experience.
                </Typography>

                <Typography>For more information, see our Cookies Policy</Typography>
            </ul>

            <Typography color="white" fontWeight={700} fontSize={24}>
                Marketing Cookies
            </Typography>
            <ul>
                <Typography>Last updated November 26, 2024</Typography>

                <Typography>
                    We use marketing cookies to provide you with relevant and customized information based on your
                    online activity and to analyse the effectiveness of our campaigns.
                </Typography>

                <Typography>For more information, see our Cookies Policy</Typography>
            </ul>
        </Col>
    );
};

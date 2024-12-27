import { Col } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';

export const CookiesMain = () => {
    return (
        <Col m={6} gap={4}>
            <Typography color="white" fontWeight={700} fontSize={36}>
                Cookies Policy
            </Typography>

            <Typography color="white" fontWeight={700} fontSize={24}>
                Bitfinex Privacy Statement
            </Typography>

            <Typography>Last updated December 19, 2024</Typography>

            <Typography>
                Thank you for visiting (the “Site”). The Site is owned and operated by iFinex Inc. and its affiliates
                (together “Bitfinex”). “We”, “our”, or “us” means either or respectively: iFinex Inc., BFXWW Inc., BFXNA
                Inc., Unus Sed Leo Limited, iFinex Financial Technologies Limited.
            </Typography>

            <Typography>
                We place small text files called cookies and other tracking technologies (such as scripts) on your
                device (together “cookies”). This cookies notice (the “Cookies Policy”) explains how cookies are used on
                the Site and how you can control them. These tracking technologies may be deployed by us but also by
                other third parties. Cookies may also collect Personal Information (such as your IP address). Take a
                look at our Privacy Statement to know how we process such Personal Information.
            </Typography>

            <Col>
                <Typography>1. What are cookies?</Typography>
                <ul>
                    <Typography>
                        1.1 "Cookies" are small text files placed on your device/terminal. They are used to collect
                        information about how you use websites or applications, as well as information about your
                        computer or device, web browser and operating system and their settings, the pages and content
                        you see during your visit and when and for how long you do so, etc.
                    </Typography>

                    <Typography>
                        1.2 They can be classified in 3 different ways according to: what purpose they serve, how long
                        they endure, and their provenance. You can find more information in the table below.
                    </Typography>
                </ul>
            </Col>

            <Col>
                <Typography>2. What types of Cookies We Use and Why?</Typography>
                <Typography>We use cookies for different purposes.</Typography>
                <ul>
                    <Typography>
                        2.1 Strictly necessary cookies: We use essential and functional cookies that are fundamental for
                        the proper functioning of the website. They ensure that the website operates efficiently and
                        delivers the intended functionality. In addition, they enable us to remember your preferences
                        and settings, such as language and region preferences, so that you get a consistent experience
                        without having to re-select your preferred language or region each time you visit.
                    </Typography>

                    <Typography>
                        2.2 Analytical cookies: We use analytical cookies to measure user interaction with the Site
                        content allowing us to make improvements to enhance their experience. They allow us to record
                        how many people visits our Site, how they navigate within, and what content is popular.
                    </Typography>
                </ul>
            </Col>

            <Col>
                <Typography>3. How can I set up my cookies’ preferences?</Typography>

                <ul>
                    <Typography>
                        3.1 The website uses strictly necessary cookies by default. When you visit the site for the
                        first time, a cookies banner appears; this banner informs you on the use of cookies. This banner
                        gives you the following options:
                    </Typography>

                    <Typography>3.2 To accept all cookies being stored on your device.</Typography>
                    <Typography>3.3 To only use strictly necessary cookies and opt out analytical cookies.</Typography>
                    <Typography>3.4 To manage your preferences.</Typography>
                    <Typography>3.5 To view and read this Cookies Policy.</Typography>
                </ul>
            </Col>

            <Col>
                <Typography>4.Contact</Typography>

                <ul>
                    <Typography>
                        If you have any queries about the way we use cookies, please contact privacy@bitfinex.com.
                    </Typography>
                </ul>
            </Col>
        </Col>
    );
};

import { Col } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';

export const HelpCenterMain = () => {
    return (
        <Col m={6} gap={4}>
            <Typography color="white" fontWeight={700} fontSize={36}>
                Welcome to the Bitfinex Help Center
            </Typography>

            <Typography color="white" fontWeight={700} fontSize={24}>
                What is Bitfinex
            </Typography>

            <Typography>
                Bitfinex is a digital asset trading platform offering state-of-the-art services for digital currency
                traders and global liquidity providers.
            </Typography>

            <Typography>
                Founded in 2012, Bitfinex was one of the first professional platforms set up to accommodate the booming
                interest in cryptocurrency trading. Since then, the team has gained invaluable experience whilst
                cementing its spot as the go-to platform for digital asset traders and institutions.
            </Typography>

            <Typography>
                In addition to a suite of advanced trading features and charting tools, Bitfinex provides access to
                Exchange Trading, Margin Trading & Funding (peer-to-peer financing), Over the Counter (OTC), Derivatives
                Trading*, and the Peer-To-Peer Market Place** for a wide selection of digital assets.
            </Typography>

            <Typography>
                Bitfinex’s strategy focuses on providing unparalleled support, tools, and innovation for professional
                traders and liquidity providers worldwide.
            </Typography>

            <Typography>
                To keep informed about Bitfinex, browse our Bitfinex Social Media Channels and follow the appropriate
                medium for you.
            </Typography>

            <Typography>
                If you have any inquiries about Bitfinex, please do not hesitate to contact Bitfinex Support.
            </Typography>

            <Typography color="white" fontWeight={700} fontSize={24}>
                How to create an account on Bitfinex
            </Typography>

            <Typography>
                Bitfinex is a state-of-the-art digital asset trading platform for traders and global liquidity
                providers. The process of opening a Bitfinex account is simple and will take a few minutes.
            </Typography>
            <Typography>
                Firstly, access the Bitfinex platform login page and press the Sign Up button in the top right corner or
                at the centre of the page.
            </Typography>
            <Typography>
                Then, on the Bitfinex sign-up page, enter a username, an email address and a password that you would
                link to your account. Choose your country of residence from the dropdown, and add a referral code (if
                you have one). After that, click Sign up.
            </Typography>
            <Typography>
                Important: If you have a referral code, enter it before signing up because you won’t be able to use it
                afterwards.
            </Typography>
            <Typography>
                At this step, you must enable a Google Two-Factor Authenticator to protect the security of your account.
            </Typography>
            <Typography>
                Important: If you log out of this process at this stage, even though your account will be created, you
                will not be able to access any Bitfinex features until you have completed setting up the Two-Factor
                Authentication. To complete this step, you can visit How to set up a 2FA at Bitfinex.
            </Typography>
            <Typography>
                You did a great job! Now, you should see the notice below when you return to your sign-up page. After
                that, click Login to get started with your new account.
            </Typography>
            <Typography>
                If you have any questions, please feel free to reach out to Bitfinex Support. We are happy to help!
            </Typography>

            <Typography color="white" fontWeight={700} fontSize={24}>
                A Beginner's guide to Bitfinex
            </Typography>

            <Typography>
                If you are new to Bitfinex, this article can act as an introductory guide to the various features and
                functions of the platform.
            </Typography>
            <Typography>
                If you are new to Bitfinex, this article can act as an introductory guide to the various features and
                functions of the platform.
            </Typography>
            <Typography>
                Important: As of November 9th, 2022, all new accounts created on Bitfinex will need to be at least Basic
                Plus verified in order to access available features on the Bitfinex platform and the Bitfinex Mobile
                App.
            </Typography>
            <Typography>
                Exchange Trading entails trading without the use of leverage. At the heart of Bitfinex are central limit
                order books for the spot trade of digital tokens.
            </Typography>
            <Typography>
                Bitfinex enables qualified users to trade with up to 10x leverage and receive financing through its
                Margin Funding and peer-to-peer financing features. You can manually input a funding order when
                initiating a margin position to acquire the desired amount of funds at the rate and duration of your
                choice. Or you can also open a margin trading position, and Bitfinex will automatically link it with
                peer-to-peer funding at the current market rate.
            </Typography>
            <Typography>
                Important: Margin Trading requires at least Intermediate level verification for all Bitfinex accounts
                created after March 1, 2022. Only Bitfinex accounts created before March 1st, 2022 will be able to
                access this feature with Basic Plus verification.
            </Typography>
        </Col>
    );
};

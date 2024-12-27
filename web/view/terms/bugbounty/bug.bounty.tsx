import { Col } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';

export const BugBountyMain = () => {
    return (
        <Col m={6} gap={4}>
            <Typography color="white" fontWeight={700} fontSize={36}>
                Bitfinex Bug Bounty Rewards
            </Typography>

            <Typography color="white" fontWeight={700} fontSize={24}>
                Hunt, report, and get rewarded!
            </Typography>

            <Typography color="white" fontWeight={700} fontSize={24}>
                Bitfinex believes that establishing relationships with security researchers and nurturing security
                research is a vital part of our mission to deliver the most advanced, security-enhanced, and trusted
                trading platform for digital tokens.
            </Typography>

            <Typography color="white" fontWeight={700} fontSize={24}>
                In collaboration with the cybersecurity and hacker development community, Bitfinex runs this program to
                incentivise and reward the responsible disclosure of security vulnerabilities ("Responsible
                Disclosure"). Bitfinex is always building and pushing out new code, so join our growing research
                community and help our developers to squash bugs with attractive rewards paid out to successful bugs
                discovered.
            </Typography>

            <Typography color="rgb(3,202,155)" fontWeight={700} fontSize={24}>
                Responsible Disclosure Policy:
            </Typography>

            <Typography>
                To ensure a quick fix, the disclosure as a user or organisation must work with the Bitfinex security and
                development team in a timely and secure manner. Ensuring any vulnerabilities will be dealt with in the
                most secure manner, you must:
            </Typography>

            <ul>
                <Typography>
                    submit your report once you discover the bug, the fastest way to alert our team is via our form at
                    the bottom of this page;
                </Typography>
                <Typography>
                    not share details of the bug in our customer support chat or publicly. If the matter is urgent you
                    can advise the customer support team you have completed the bug report but do not disclose
                    information and we will immediately alert our security team.
                </Typography>
                <Typography>
                    make every effort not to interrupt or degrade our service during your investigation.
                </Typography>
                <Typography>not harm or defraud Bitfinex systems or our users during your investigation</Typography>
                <Typography>
                    only target your own accounts during your research for vulnerabilities. Please do not violate the
                    privacy of other users, destroy data, attempt to access or disrupt any other user accounts.
                </Typography>
                <Typography>
                    provide written authority from the owner to perform such tasks, if working on behalf of a client or
                    organisation where more than one account is used.
                </Typography>
            </ul>
            <Typography>
                Work with us in good faith by following our responsible disclosure policy ensures no legal action will
                be taken against you by Bitfinex.
            </Typography>

            <Typography color="rgb(3,202,155)" fontWeight={700} fontSize={24}>
                Bug Bounty eligibility & rules:
            </Typography>

            <Typography>
                Please follow our Responsible Disclosure Policy above when working to discover security vulnerabilities
                and bugs.
            </Typography>

            <ul>
                <Typography>You must fully accept and adhere to our terms of service</Typography>
                <Typography>
                    You must not be a Prohibited Person, such as a citizen or resident of the United States of America,
                    or acting for the benefit of a Prohibited Person
                </Typography>
                <Typography>
                    You must not disclose information relating to your discovery publicly before it has been fixed
                </Typography>
                <Typography>
                    You must not try to access or damage other users' Bitfinex accounts. When completing the research,
                    you must use your own Bitfinex account
                </Typography>
                <Typography>
                    You must not attempt social engineering or phishing techniques on our users or Bitfinex personnel
                </Typography>
                <Typography>
                    You must not use software or perform attacks that could affect the stability of our platforms, such
                    as DDOS attacks, spamming techniques or blackhat SEO.
                </Typography>
            </ul>

            <Typography color="rgb(3,202,155)" fontWeight={700} fontSize={24}>
                Rewards Policy:
            </Typography>

            <Typography>
                All bounties are priced in $USD and paid in USDt or Bitcoin or any other digital token as determined in
                Bitfinex's sole and absolute discretion.
            </Typography>

            <Typography>
                We are happy to give you recognition for your collaboration but will respect your privacy if you prefer
                not to reveal your identity publicly. Bitfinex may, at its sole discretion, honour your skills in its
                upcoming Hall of Fame, with any bugs appropriate for public disclosure.
            </Typography>

            <Typography>
                We're always looking to meet talented security engineers. Get our attention by joining our Bug Bounty
                community, sign up!
            </Typography>
        </Col>
    );
};

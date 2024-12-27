import { Col } from '@/shared/ui/boxes';
import { Button, OutlinedInput, Typography } from '@mui/material';

export const ContactUsMain = () => {
    return (
        <Col m={6} gap={4}>
            <Typography color="white" fontWeight={700} fontSize={36}>
                Contact Us
            </Typography>

            <Col gap={2}>
                <Col>
                    <Typography>Please type your issue below</Typography>
                    <OutlinedInput />
                </Col>

                <Col>
                    <Typography>Amount</Typography>
                    <OutlinedInput />
                </Col>

                <Col>
                    <Typography>Transaction ID</Typography>
                    <OutlinedInput />
                </Col>

                <Col>
                    <Typography>Deposit Address</Typography>
                    <OutlinedInput />
                </Col>

                <Col>
                    <Typography>Payment ID/Tag/Memo</Typography>
                    <OutlinedInput />
                </Col>

                <Col>
                    <Typography>Describe your issue</Typography>
                    <OutlinedInput multiline rows={6} />
                </Col>

                <Button variant="contained">Отправить обращение</Button>
            </Col>
        </Col>
    );
};

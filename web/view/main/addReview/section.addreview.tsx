import { texts } from '@/shared/config/texts';
import theme from '@/shared/theme/theme';
import { Col } from '@/shared/ui/boxes';
import { StyledButton } from '@/shared/ui/styled.button';
import { OutlinedInput, Typography, useMediaQuery } from '@mui/material';

export const AddReviewSection = () => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const text = texts;

    return (
        <Col gap={3} p={6} mx={isSm ? 3 : 6} mt={6} bgcolor={'#172d3e'} borderRadius={'6px'} alignItems={'center'}>
            <Typography fontSize={30} fontWeight={700}>
                {text.addReviewTitle}
            </Typography>

            <Col width={'100%'} gap={2}>
                <Typography fontWeight={700}>{text.addReviewField_1}</Typography>
                <OutlinedInput />
            </Col>

            <Col width={'100%'} gap={2}>
                <Typography fontWeight={700}>{text.addReviewField_2}</Typography>
                <OutlinedInput multiline minRows={6} />
            </Col>

            <StyledButton sx={{ width: '250px' }} variant="contained">
                Отправить
            </StyledButton>
        </Col>
    );
};

import { Reviews } from '@/shared/config/reviews';
import theme from '@/shared/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Stars } from '@/shared/ui/stars';
import { Typography, useMediaQuery } from '@mui/material';

export const ReviewSection = () => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const review = Reviews;

    return (
        <Col id="review" gap={2} mx={isSm ? 3 : 6} mt={6}>
            <Typography fontSize={30} fontWeight={700}>
                Отзывы о нашем проекте:
            </Typography>

            <Col gap={2} justifyContent={'flex-start'}>
                {review.map((r, i) => (
                    <ReviewItem {...r} key={i} />
                ))}
            </Col>
        </Col>
    );
};

const ReviewItem = ({ name, date, text, stars }: { name: string; date: string; text: string; stars: number }) => {
    return (
        <Col gap={2} bgcolor={'#172d3e'} borderRadius={'6px'} padding={'30px'}>
            <Row justifyContent={'space-between'} alignItems={'flex-start'}>
                <Col>
                    <Typography color="#fff" fontWeight={700}>
                        {name}
                    </Typography>
                    <Typography color="#5a6972">{date}</Typography>
                </Col>

                {Stars[stars]}
            </Row>

            <Typography>{text}</Typography>
        </Col>
    );
};

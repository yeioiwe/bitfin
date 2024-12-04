import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { ReactNode } from 'react';
import { Row } from './boxes';

interface Stars {
    [key: number]: ReactNode;
}

export const Stars: Stars = {
    1: (
        <Row>
            <StarIcon />
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
        </Row>
    ),
    1.5: (
        <Row>
            <StarIcon />
            <StarHalfIcon />
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
        </Row>
    ),
    2: (
        <Row>
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
        </Row>
    ),
    2.5: (
        <Row>
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
            <StarBorderIcon />
            <StarBorderIcon />
        </Row>
    ),
    3: (
        <Row>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />
            <StarBorderIcon />
        </Row>
    ),
    3.5: (
        <Row>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
            <StarBorderIcon />
        </Row>
    ),
    4: (
        <Row>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />
        </Row>
    ),
    4.5: (
        <Row>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
        </Row>
    ),
    5: (
        <Row>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
        </Row>
    ),
};

'use client';

import { Row } from '@/config/boxes';
import { EditUser } from './edit.user';
import { EditWallet } from './edit.wallet';

export const EditMain = ({ id }: { id: number }) => {
    return (
        <Row gap={6} justifyContent={'flex-start'} alignItems={'flex-start'} width={'100%'}>
            <EditUser id={id} />
            <EditWallet id={id} />
        </Row>
    );
};

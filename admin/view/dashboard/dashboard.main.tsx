'use client';
import { User } from '@/config/api/api.schemas';
import { useUserGetUsers } from '@/config/api/user/user';
import { Col, Row } from '@/config/boxes';
import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export const DashboardMain = () => {
    const router = useRouter();

    const { data: users } = useUserGetUsers();

    return (
        <Col width={'100%'} gap={4}>
            <NewUserButton onClick={() => router.push('/add')} />

            <Col gap={2}>
                <Typography fontWeight={700}>СПИСОК ПОЛЬЗОВАТЕЛЕЙ:</Typography>
                <Row justifyContent={'space-between'}>
                    <Row gap={12}>
                        <Typography fontWeight={700}>#ID</Typography>
                        <Typography fontWeight={700}>LOGIN</Typography>
                    </Row>
                    <Typography fontWeight={700}>ФИО</Typography>
                </Row>

                {!users?.items ? (
                    <EmptyUserList />
                ) : (
                    <Col gap={2}>
                        {users?.items.map((u, i) => (
                            <UserItem key={i} user={u} />
                        ))}
                    </Col>
                )}
            </Col>
        </Col>
    );
};

const UserItem = ({ user }: { user: User }) => {
    return (
        <Row
            sx={{ cursor: 'pointer' }}
            p={2}
            borderRadius={'6px'}
            justifyContent={'space-between'}
            border={'2px solid #1976d2'}
        >
            <Row gap={10}>
                <Typography fontWeight={700}>{user.id}</Typography>
                <Typography fontWeight={700}>{user.username}</Typography>
            </Row>
            <Typography fontWeight={700}>{user.name}</Typography>
        </Row>
    );
};

const EmptyUserList = () => {
    return (
        <Box width={'100%'} justifyContent={'center'} display={'flex'}>
            <Typography>Список пользователей пуст.</Typography>
        </Box>
    );
};

const NewUserButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <Box onClick={() => onClick()} display={'flex'} justifyContent={'flex-end'}>
            <Button variant="contained">Добавить пользователя</Button>
        </Box>
    );
};

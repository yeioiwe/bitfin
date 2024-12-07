import { Col } from '@/shared/ui/boxes';
import { UserCard } from './user.dashboard';

export const DashboardMain = ({ user }: { user: any }) => {
    return (
        <Col>
            <UserCard user={user} />
        </Col>
    );
};

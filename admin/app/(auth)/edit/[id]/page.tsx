'use client';
import { Col } from '@/config/boxes';
import { EditHistory } from '@/view/edit/edit.history';
import { HistoryItems } from '@/view/edit/edit.history.items';
import { EditPage } from '@/view/edit/edit.main';
import { usePathname } from 'next/navigation';

export default function EditUser() {
    const pathname = usePathname();
    const match = pathname.match(/\/edit\/(\d+)/);
    let userId = match ? match[1] : null;

    if (!userId) return null;

    return (
        <Col p={8}>
            <EditPage userId={+userId} />
            <EditHistory userId={+userId} />
            <HistoryItems userId={+userId} />
        </Col>
    );
}

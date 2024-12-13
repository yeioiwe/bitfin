import { EditMain } from '@/view/edit/edit.main';

export default async function EditPage({ params }: { params: Promise<{ id: number }> }) {
    const id = (await params).id;
    return <EditMain id={id} />;
}

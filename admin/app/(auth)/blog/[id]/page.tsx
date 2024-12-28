import { BlogEdit } from '@/view/blog/edit/edit.blog';

export default async function BlogEditPost({ params }: { params: Promise<{ id: number }> }) {
    const id = (await params).id;
    return <BlogEdit id={id} />;
}

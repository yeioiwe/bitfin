import { BlogPostId } from '@/view/blog/blog.post';

export default async function BlogPost({ params }: { params: Promise<{ id: number }> }) {
    const id = (await params).id;
    return <BlogPostId id={id} />;
}

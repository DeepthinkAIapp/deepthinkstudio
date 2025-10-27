import { notFound } from 'next/navigation';

export default function SlugPage({ params }: { params: { slug: string } }) {
  // For any unmatched routes, return 404
  notFound();
}

import type { Post } from '$lib/entities/posts.type';
import { loadPostBySlug, loadPosts } from '$lib/services/post.service';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({
	params
}): Promise<{ post: Post & { formattedDate: string } }> => {
	const post = await loadPostBySlug(params.slug);

	if (!post) {
		throw error(404, { message: 'Not found', code: 'NOT_FOUND', id: 'not_found' });
	}

	return {
		post: {
			...post,
			formattedDate: new Date(post.createdAt).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})
		}
	};
};

export const entries = async (): Promise<string[]> => {
	const allItems = await loadPosts();
	return allItems.docs.map((post) => `/shelf/${post.slug}`);
};

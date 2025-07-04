import type { Post } from '$lib/entities/posts.type';
import { loadPostBySlug } from '$lib/services/post.service';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }): Promise<{ post: Post }> => {
	const post = await loadPostBySlug(params.slug);

	if (!post) {
		throw error(404, { message: 'Not found', code: 'NOT_FOUND', id: 'not_found' });
	}

	return { post };
};

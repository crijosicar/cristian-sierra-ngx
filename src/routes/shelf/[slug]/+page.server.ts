import type { Post } from '$lib/entities/posts.types';
import { loadPost } from '$lib/services/post.service';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }): Promise<{ post: Post }> => {
	const post = await loadPost(params.slug);

	if (!post) {
		throw error(404, 'Not found');
	}

	return { post };
};
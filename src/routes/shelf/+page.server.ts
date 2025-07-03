import { loadPosts } from '$lib/services/post.service';
import type { Post } from '$lib/entities/posts.types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (): Promise<{ posts: Array<Post> }> => {
	return {
		posts: await loadPosts()
	};
};
import { loadPosts } from '$lib/services/post.service';
import type { Post } from '$lib/entities/posts.type';
import type { APIPaginationResponse } from '$lib/entities/APIResponse.type';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (): Promise<APIPaginationResponse<Post>> => loadPosts();

export const entries = async (): Promise<string[]> => {
	const allItems = await loadPosts();
	return allItems.docs.map((post) => `/shelf/${post.slug}`);
};

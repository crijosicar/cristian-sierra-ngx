import { API_URL } from '$env/static/private';
import type { Post } from '$lib/entities/posts.type';
import type { APIPaginationResponse } from '$lib/entities/APIResponse.type';

/**
 * Use SvelteKit's `event.fetch` (not the global fetch) so that:
 * - Requests are tracked/deduplicated by SvelteKit during SSR
 * - Cookies and headers from the incoming request are forwarded correctly
 * - The "eager fetch during SSR" warning is avoided
 */
export const loadPosts = async (
	fetch: typeof globalThis.fetch
): Promise<APIPaginationResponse<Post>> => {
	const response = await fetch(`${API_URL}/posts?depth=2&draft=false`);

	if (!response.ok) {
		throw new Error(`Failed to load posts with status: ${await response.text()}`);
	}

	const posts = await response.json();
	return posts;
};

export const loadPostBySlug = async (fetch: typeof globalThis.fetch, slug: string): Promise<Post> => {
	const response = await fetch(
		`${API_URL}/posts?where[slug][equals]=${encodeURIComponent(slug)}&depth=2&draft=false`
	);

	if (!response.ok) {
		throw new Error(`Failed to load post with slug: ${slug}`);
	}

	const post = await response.json();

	return post.docs[0];
};

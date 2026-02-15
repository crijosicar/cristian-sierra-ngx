import { API_URL } from '$env/static/private';
import type { Post } from '$lib/entities/posts.type';
import type { APIPaginationResponse } from '$lib/entities/APIResponse.type';

export const loadPosts = async (): Promise<APIPaginationResponse<Post>> => {
	const response = await fetch(`${API_URL}/posts?depth=2&draft=false`);

	if (!response.ok) {
		throw new Error(`Failed to load posts with status: ${await response.text()}`);
	}

	const posts = await response.json();
	return posts;
};

export const loadPostBySlug = async (slug: string): Promise<Post> => {
	const response = await fetch(
		`${API_URL}/posts?where[slug][equals]=${encodeURIComponent(slug)}&depth=2&draft=false`
	);

	if (!response.ok) {
		throw new Error(`Failed to load post with slug: ${slug}`);
	}

	const post = await response.json();

	return post.docs[0];
};

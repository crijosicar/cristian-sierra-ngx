import { API_URL } from '$env/static/private';
import type { Post } from '$lib/entities/posts.types';

export const loadPosts = async (): Promise<Array<Post>> => {
    const response = await fetch(`${API_URL}/posts`);
    if (!response.ok) {
        throw new Error(`Failed to load posts with status: ${await response.text()}`);
    }
    const posts = await response.json();
    return posts;
}

export const loadPost = async (slug: string): Promise<Post> => {
    const response = await fetch(`${API_URL}/posts/${slug}`);
    if (!response.ok) {
        throw new Error(`Failed to load post with slug: ${slug}`);
    }
    const post = await response.json();
    return post;
}
import { loadPosts } from '$lib/services/post.server';
import type { Post } from '$lib/entities/posts.type';
import type { APIPaginationResponse } from '$lib/entities/APIResponse.type';
import type { PageServerLoad } from './$types';

export const prerender = false;

export const load: PageServerLoad = async (): Promise<APIPaginationResponse<Post>> => loadPosts();

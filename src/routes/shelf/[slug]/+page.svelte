<script lang="ts">
	import {
		Composer,
		RichTextPlugin,
		HistoryPlugin,
		ContentEditable
	} from '@paddim8/svelte-lexical';
	import {
		HeadingNode,
		QuoteNode,
		ListNode,
		ListItemNode,
		HorizontalRuleNode,
		ImageNode
	} from '@paddim8/svelte-lexical';
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const stripBlockNodes = (lexicalRoot: any) => {
		return {
			...lexicalRoot,
			children: lexicalRoot.children.filter((n: any) => n.type !== 'block')
		};
	};

	const cleaned = stripBlockNodes(data.post.content.root);
	const serialized = JSON.stringify({ root: cleaned });

	const initialConfig = {
		editable: false,
		namespace: 'ReadOnlyViewer',
		nodes: [HeadingNode, QuoteNode, ListNode, ListItemNode, HorizontalRuleNode, ImageNode],
		editorState: (editor: any) => {
			const state = editor.parseEditorState(serialized);
			editor.setEditorState(state);
		},
		onError: (e: Error) => {
			console.error(e);
			throw e;
		}
	};
</script>

<svelte:head>
	<title>{data.post.title} | Cristian Sierra</title>
	<meta name="description" content={data.post.title} />
	<meta name="keywords" content="Cristian Sierra | Software Engineer" />
	<meta name="author" content="Cristian Sierra" />
</svelte:head>

<Header />

<main class="main">
	<h1 class="section__title">{data.post.title}</h1>
	<Composer {initialConfig}>
		<div class="editor-shell svelte-lexical">
			<div class="editor-container">
				<div class="editor-scroller">
					<div class="editor">
						<ContentEditable />
					</div>
				</div>
				<RichTextPlugin />
				<HistoryPlugin />
			</div>
		</div>
	</Composer>
</main>

<Footer />

<style>
	.section__title {
		font-size: var(--h1-font-size);
		margin-bottom: var(--mb-2);
		font-weight: var(--font-medium);
	}
</style>

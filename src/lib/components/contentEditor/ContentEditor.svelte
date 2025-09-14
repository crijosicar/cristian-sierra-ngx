<script lang="ts">
	import Prism from 'prismjs';
	import 'prismjs/components/prism-typescript';
	import 'prismjs/components/prism-javascript';
	import 'prismjs/components/prism-css';
	import './prism-vsc-dark-plus.css';
	import type { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical';
	import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
	import {
		convertLexicalToHTML,
		type HTMLConvertersFunction
	} from '@payloadcms/richtext-lexical/html';

	type NodeTypes = DefaultNodeTypes | SerializedBlockNode<any>;

	export let content: SerializedEditorState;

	const htmlConverters: HTMLConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
		...defaultConverters,
		blocks: {
			code: ({ node }) => {
				const language = node.fields?.language ?? 'typescript';
				const code = node.fields?.code ?? '';
				const grammar = Prism.languages[language];
				const highlighted = Prism.highlight(code, grammar, language);
				const html = `<div class="content_editor"><div class="prose max-w-none"><pre class="language-${language} line-numbers">${highlighted}</pre></div></div>`;

				return html;
			},
			banner: ({ node }) => {
				type BannerStyle = 'info' | 'error' | 'success' | 'warning';
				const style: BannerStyle = (node.fields?.style as BannerStyle) ?? 'info';
				const htmlContent = convertLexicalToHTML({
					className: 'payload-richtext tw-max-w-none',
					data: node.fields?.content,
					converters: defaultConverters
				});
				const inferedStyles: Record<BannerStyle, string> = {
					info: 'tw-border-border tw-bg-card',
					error: 'tw-border-error tw-bg-error',
					success: 'tw-border-success tw-bg-success',
					warning: 'tw-border-warning tw-bg-warning'
				};
				const currentStyle = inferedStyles[style];

				return `<div class='tw-mx-auto tw-my-8 tw-w-full tw-col-start-2 tw-mb-4'><div class='tw-border tw-py-3 tw-px-6 tw-flex tw-items-center tw-rounded ${currentStyle} tw-text-white'>${htmlContent}</div></div>`;
			}
		}
	});

	const editorOptions = { data: content, converters: htmlConverters };

	let htmlContent = convertLexicalToHTML(editorOptions);
</script>

<div>
	{@html htmlContent}
</div>

<style lang="postcss">
	.content_editor {
		position: relative;
	}

	.content_editor button {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		padding: 0.4rem 0.8rem;
		background: var(--title-color);
		color: var(--container-color);
		border: none;
		border-radius: 0.375rem;
		cursor: pointer;
		font-size: 0.875rem;
		transition: background 0.2s ease-in-out;
	}

	.content_editor button:hover {
		background: var(--title-color-dark);
	}
</style>

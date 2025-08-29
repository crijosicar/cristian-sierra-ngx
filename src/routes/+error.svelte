<script lang="ts">
	import { page } from '$app/stores';
</script>

<p>Go back to <a href="/">home</a></p>
<h1>{$page.error?.message}</h1>

<script lang="ts">
	import '../app.postcss';
	if (typeof document !== 'undefined') {
        document.documentElement.classList.add('dark');
	}
</script>

<slot />

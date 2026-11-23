<script lang="ts">
const paths = {
	search: "M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm6-2 4 4",
	sun: "M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z",
	moon: "M20.9 13.4A9.1 9.1 0 0 1 10.6 3.1 9.1 9.1 0 1 0 20.9 13.4Z",
	system: "M3 4h18v13H3zM8 21h8m-4-4v4",
	reset: "M4 11a8 8 0 1 1 2 6m-2-6V5m0 6h6",
};
let { name, class: className }: { name: keyof typeof paths; class?: string } = $props();
</script>

<svg aria-hidden="true" viewBox="0 0 24 24" width="1em" height="1em"
     fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
     stroke-linejoin="round" class={className}><path d={paths[name]} /></svg>

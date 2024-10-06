<script lang="ts">
    import { onMount } from 'svelte';

    // Replace with your actual audio file URL
    const audioUrl = "https://drive.google.com/uc?export=download&id=1-5h7Tk3fnt9zyXxuJ4bUNKxMIyVb_9sw";

    onMount(() => {
        const audio = new Audio(audioUrl);
        audio.play().catch(error => console.error("Audio play failed:", error));
    });
</script>

<!-- No visual representation needed -->
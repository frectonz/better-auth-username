<script lang="ts">
	import { authClient } from '$lib/auth-client';

	let alert = $state<string>();
	let username = $state<string>();

	async function checkUsername() {
		if (!username) return;

		const res = await authClient.isUsernameAvailable({ username });

		if (res.data) {
			if (res.data.available) {
				alert = 'Username is available';
			} else {
				alert = 'Username is not available';
			}
		} else {
			alert = `Got an error <pre>${JSON.stringify(res.error, null, 2)}</pre>`;
		}
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<h1>Check Username</h1>

<div>
	<input bind:value={username} />
	<button onclick={checkUsername}>Check Username</button>
</div>

{#if alert}
	<div class="alert" contenteditable bind:innerHTML={alert}></div>
{/if}

<style>
	.alert {
		padding: 1rem;
		width: fit-content;
		margin: 1rem 0;
		border: 1px solid black;
	}
</style>

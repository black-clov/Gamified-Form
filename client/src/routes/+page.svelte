<script lang="ts">
	import {onMount, afterUpdate, beforeUpdate} from 'svelte';
	import axios from 'axios';


	let apiUrl = import.meta.env.API_URL;
	let formSwitch:boolean=false;

	const iconsMap = new Map();
	iconsMap.set("Water", "https://img.icons8.com/ios/50/000000/water-element.png");
	iconsMap.set("Fire", "https://img.icons8.com/ios/50/000000/fire-element.png");
	iconsMap.set("Earth", "https://img.icons8.com/ios/50/000000/earth-element.png");
	iconsMap.set("Air", "https://img.icons8.com/ios/50/000000/air-element.png");

	let name:string;
	let email:string;

	const teamArray = ["Water", "Fire", "Earth", "Air"];
	let team:string
	let theme:string

	const getRandomTeam = () => {
		team = teamArray[Math.floor(Math.random() * teamArray.length)];
	};
	getRandomTeam()
	
	function setTheme(t:string) {
		switch (t) {
			case "Water":
				theme = "wintry";
				break;
			case "Fire":
				theme = "crimson";
				break;
			case "Earth":
				theme = "sahara";
				break;
			case "Air":
				theme = "seafoam";
				break;
			default:
				theme = "wintry";
		}	
	}
	setTheme(team)
	// async function checkUser() {
	// 	let session= document.cookie.split("user")[1].split(";")[0];
	// 	if (session) {
	// 		const res = await axios.post(apiUrl+"/checksession", {session});
	// 		if (res.status === 200) {
	// 			team = res.data.team;
	// 			setTheme(team);
	// 		}
	// 	}else{
	// 		team = teamArray[Math.floor(Math.random() * teamArray.length)];
	// 		setTheme(team);
	// 	}
		
	// 	if (document.cookie.split("team=").length > 1) {
	// 		document.cookie = "team=" + team;
	// 		setTheme(team);
	// 	} else {
	// 		team = document.cookie.split("team")[1].split(";")[0];
	// 		setTheme(team);
	// 	}
	// }

	async function join() {
		// const res = await axios.post(apiUrl+"/join", {team});
		// if (res.status === 200) {
		// 	document.cookie = "user=" + res.data.session;
		// 	document.cookie = "team=" + team;
		// 	setTheme(team);
		// }
	}

	let randomIcon:string
	async function iconRandomizer() {
		for (let i = 0; i < 30; i++) {
			const thisTeam = teamArray[Math.floor(Math.random() * teamArray.length)];
			await new Promise(r => setTimeout(r, 100));
			team = thisTeam
			setTheme(thisTeam)
			randomIcon = iconsMap.get(thisTeam);
		}
		await new Promise(r => setTimeout(r, 600));
		randomIcon = ""
		
	}
	
	
	onMount(async () => {
		iconRandomizer()


	})
	


</script>

<style>
	.teamDistributer {
		align-items: center;
		justify-content: center;
		display: flex;
		flex-direction: column;
		height: 100vh;
	}
	.teamDistributer h1 {
		font-size: 2rem;
		margin-bottom: 2rem;
		text-align: center;
		line-height: normal;
	}
	.teamDistributer button {
		font-size: 1rem;
	}
	.teamDistributer form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>

<body data-theme={theme}>
<div class="teamDistributer">
	{#if randomIcon != ""}
			<div class="rotating icons">
				<img src={randomIcon} alt="{randomIcon} icon" />
			</div>
	{:else}
		<h1>You are team {team}</h1>
		{#if formSwitch == false}
			<button  type="button" class="btn variant-filled-primary" on:click={()=>{formSwitch=true}}>Join Now</button>
		{:else}
		<form on:submit|preventDefault={join}>
			<input class="input" type="text" bind:value={name} placeholder="Your name" >
			<input class="input" type="email" bind:value={email} placeholder="your@email.com">

			<button type="submit" class="btn variant-filled-primary">Join Now</button>
		</form>
		{/if}
	{/if}
	
</div>
</body>
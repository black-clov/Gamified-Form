<script lang="ts">
	import {onMount} from 'svelte';
	import axios from 'axios';


	let formSwitch:boolean=false;
	let thanksSwitch:boolean=false;
	let joinedSwitch:boolean=false;
	let emailExists:boolean=false;

	const iconsMap = new Map();
	iconsMap.set("1", "https://img.icons8.com/ios/50/ffffff/1.png");
iconsMap.set("2", "https://img.icons8.com/ios/50/ffffff/2.png");
iconsMap.set("3", "https://img.icons8.com/ios/50/ffffff/3.png");
iconsMap.set("4", "https://img.icons8.com/ios/50/ffffff/4.png");
iconsMap.set("5", "https://img.icons8.com/ios/50/ffffff/5.png");
iconsMap.set("6", "https://img.icons8.com/ios/50/ffffff/6.png");
iconsMap.set("7", "https://img.icons8.com/ios/50/ffffff/7.png");
iconsMap.set("8", "https://img.icons8.com/ios/50/ffffff/8.png");
iconsMap.set("9", "https://img.icons8.com/ios/50/ffffff/9.png");
iconsMap.set("10", "https://img.icons8.com/ios/50/ffffff/10.png");
iconsMap.set("11", "https://img.icons8.com/ios/50/ffffff/11.png");
iconsMap.set("12", "https://img.icons8.com/ios/50/ffffff/12.png");
iconsMap.set("13", "https://img.icons8.com/ios/50/ffffff/13.png");
iconsMap.set("14", "https://img.icons8.com/ios/50/ffffff/14.png");
iconsMap.set("15", "https://img.icons8.com/ios/50/ffffff/15.png");
iconsMap.set("16", "https://img.icons8.com/ios/50/ffffff/16.png");
iconsMap.set("17", "https://img.icons8.com/ios/50/ffffff/17.png");
iconsMap.set("18", "https://img.icons8.com/ios/50/ffffff/18.png");
iconsMap.set("19", "https://img.icons8.com/ios/50/ffffff/19.png");
iconsMap.set("20", "https://img.icons8.com/ios/50/ffffff/20.png");
iconsMap.set("21", "https://img.icons8.com/ios/50/ffffff/21.png");
iconsMap.set("22", "https://img.icons8.com/ios/50/ffffff/22.png");
iconsMap.set("23", "https://img.icons8.com/ios/50/ffffff/23.png");
iconsMap.set("24", "https://img.icons8.com/ios/50/ffffff/24.png");
iconsMap.set("25", "https://img.icons8.com/ios/50/ffffff/25.png");
iconsMap.set("26", "https://img.icons8.com/ios/50/ffffff/26.png");
iconsMap.set("27", "https://img.icons8.com/ios/50/ffffff/27.png");
iconsMap.set("28", "https://img.icons8.com/ios/50/ffffff/28.png");
iconsMap.set("29", "https://img.icons8.com/ios/50/ffffff/29.png");
iconsMap.set("30", "https://img.icons8.com/ios/50/ffffff/30.png");
iconsMap.set("31", "https://img.icons8.com/ios/50/ffffff/31.png");
iconsMap.set("32", "https://img.icons8.com/ios/50/ffffff/32.png");
iconsMap.set("33", "https://img.icons8.com/ios/50/ffffff/33.png");
iconsMap.set("34", "https://img.icons8.com/ios/50/ffffff/34.png");
iconsMap.set("35", "https://img.icons8.com/ios/50/ffffff/35.png");
iconsMap.set("36", "https://img.icons8.com/ios/50/ffffff/36.png");
iconsMap.set("37", "https://img.icons8.com/ios/50/ffffff/37.png");
iconsMap.set("38", "https://img.icons8.com/ios/50/ffffff/38.png");
iconsMap.set("39", "https://img.icons8.com/ios/50/ffffff/39.png");
iconsMap.set("40", "https://img.icons8.com/ios/50/ffffff/40.png");
iconsMap.set("41", "https://img.icons8.com/ios/50/ffffff/41.png");
iconsMap.set("42", "https://img.icons8.com/ios/50/ffffff/42.png");
iconsMap.set("43", "https://img.icons8.com/ios/50/ffffff/43.png");
iconsMap.set("44", "https://img.icons8.com/ios/50/ffffff/44.png");
iconsMap.set("45", "https://img.icons8.com/ios/50/ffffff/45.png");
iconsMap.set("46", "https://img.icons8.com/ios/50/ffffff/46.png");
iconsMap.set("47", "https://img.icons8.com/ios/50/ffffff/47.png");
iconsMap.set("48", "https://img.icons8.com/ios/50/ffffff/48.png");
iconsMap.set("49", "https://img.icons8.com/ios/50/ffffff/49.png");
iconsMap.set("50", "https://img.icons8.com/ios/50/ffffff/50.png");
iconsMap.set("51", "https://img.icons8.com/ios/50/ffffff/51.png");
iconsMap.set("52", "https://img.icons8.com/ios/50/ffffff/52.png");
iconsMap.set("53", "https://img.icons8.com/ios/50/ffffff/53.png");
iconsMap.set("54", "https://img.icons8.com/ios/50/ffffff/54.png");
iconsMap.set("55", "https://img.icons8.com/ios/50/ffffff/55.png");
iconsMap.set("56", "https://img.icons8.com/ios/50/ffffff/56.png");
iconsMap.set("57", "https://img.icons8.com/ios/50/ffffff/57.png");
iconsMap.set("58", "https://img.icons8.com/ios/50/ffffff/58.png");
iconsMap.set("59", "https://img.icons8.com/ios/50/ffffff/59.png");
iconsMap.set("60", "https://img.icons8.com/ios/50/ffffff/60.png");
iconsMap.set("61", "https://img.icons8.com/ios/50/ffffff/61.png");
iconsMap.set("62", "https://img.icons8.com/ios/50/ffffff/62.png");
iconsMap.set("63", "https://img.icons8.com/ios/50/ffffff/63.png");
iconsMap.set("64", "https://img.icons8.com/ios/50/ffffff/64.png");
iconsMap.set("65", "https://img.icons8.com/ios/50/ffffff/65.png");
iconsMap.set("66", "https://img.icons8.com/ios/50/ffffff/66.png");
iconsMap.set("67", "https://img.icons8.com/ios/50/ffffff/67.png");
iconsMap.set("68", "https://img.icons8.com/ios/50/ffffff/68.png");
iconsMap.set("69", "https://img.icons8.com/ios/50/ffffff/69.png");
iconsMap.set("70", "https://img.icons8.com/ios/50/ffffff/70.png");
iconsMap.set("71", "https://img.icons8.com/ios/50/ffffff/71.png");
iconsMap.set("72", "https://img.icons8.com/ios/50/ffffff/72.png");
iconsMap.set("73", "https://img.icons8.com/ios/50/ffffff/73.png");
iconsMap.set("74", "https://img.icons8.com/ios/50/ffffff/74.png");
iconsMap.set("75", "https://img.icons8.com/ios/50/ffffff/75.png");
iconsMap.set("76", "https://img.icons8.com/ios/50/ffffff/76.png");
iconsMap.set("77", "https://img.icons8.com/ios/50/ffffff/77.png");
iconsMap.set("78", "https://img.icons8.com/ios/50/ffffff/78.png");
iconsMap.set("79", "https://img.icons8.com/ios/50/ffffff/79.png");
iconsMap.set("80", "https://img.icons8.com/ios/50/ffffff/80.png");
iconsMap.set("81", "https://img.icons8.com/ios/50/ffffff/81.png");
iconsMap.set("82", "https://img.icons8.com/ios/50/ffffff/82.png");
iconsMap.set("83", "https://img.icons8.com/ios/50/ffffff/83.png");
iconsMap.set("84", "https://img.icons8.com/ios/50/ffffff/84.png");
iconsMap.set("85", "https://img.icons8.com/ios/50/ffffff/85.png");
iconsMap.set("86", "https://img.icons8.com/ios/50/ffffff/86.png");
iconsMap.set("87", "https://img.icons8.com/ios/50/ffffff/87.png");
iconsMap.set("88", "https://img.icons8.com/ios/50/ffffff/88.png");
iconsMap.set("89", "https://img.icons8.com/ios/50/ffffff/89.png");
iconsMap.set("90", "https://img.icons8.com/ios/50/ffffff/90.png");
iconsMap.set("91", "https://img.icons8.com/ios/50/ffffff/91.png");
iconsMap.set("92", "https://img.icons8.com/ios/50/ffffff/92.png");
iconsMap.set("93", "https://img.icons8.com/ios/50/ffffff/93.png");
iconsMap.set("94", "https://img.icons8.com/ios/50/ffffff/94.png");
iconsMap.set("95", "https://img.icons8.com/ios/50/ffffff/95.png");
iconsMap.set("96", "https://img.icons8.com/ios/50/ffffff/96.png");
iconsMap.set("97", "https://img.icons8.com/ios/50/ffffff/97.png");
iconsMap.set("98", "https://img.icons8.com/ios/50/ffffff/98.png");
iconsMap.set("99", "https://img.icons8.com/ios/50/ffffff/99.png");
iconsMap.set("100", "https://img.icons8.com/ios/50/ffffff/100.png");


	let fullName:string;
	let email:string;
	let filiere:string;	

	const teamArray = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
    "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
    "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
    "51", "52", "53", "54", "55", "56", "57", "58", "59", "60",
    "61", "62", "63", "64", "65", "66", "67", "68", "69", "70",
    "71", "72", "73", "74", "75", "76", "77", "78", "79", "80",
    "81", "82", "83", "84", "85", "86", "87", "88", "89", "90",
    "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"
];
	let team:string
	let theme:string="crimson";

	const getRandomTeam = () => {
		team = teamArray[Math.floor(Math.random() * teamArray.length)];
	};

	let joinPromise:Promise<void>
	
	function setTheme(t: string) {
    switch (t) {
        case "1":
            theme = "wintry";
            break;
        case "2":
            theme = "crimson";
            break;
        case "3":
            theme = "sahara";
            break;
        case "4":
            theme = "seafoam";
            break;
        case "5":
            theme = "sunset";
            break;
        case "6":
            theme = "midnight";
            break;
        case "7":
            theme = "autumn";
            break;
        case "8":
            theme = "spring";
            break;
        case "9":
            theme = "ocean";
            break;
        case "10":
            theme = "desert";
            break;
        case "11":
            theme = "forest";
            break;
        case "12":
            theme = "lavender";
            break;
        case "13":
            theme = "cherry";
            break;
        case "14":
            theme = "tropical";
            break;
        case "15":
            theme = "stormy";
            break;
        case "16":
            theme = "snowfall";
            break;
        case "17":
            theme = "beach";
            break;
        case "18":
            theme = "misty";
            break;
        case "19":
            theme = "elegant";
            break;
        case "20":
            theme = "citrus";
            break;
        case "21":
            theme = "candy";
            break;
        case "22":
            theme = "earthy";
            break;
        case "23":
            theme = "moonlight";
            break;
        case "24":
            theme = "bright";
            break;
        case "25":
            theme = "bold";
            break;
        case "26":
            theme = "icy";
            break;
        case "27":
            theme = "sandy";
            break;
        case "28":
            theme = "bloom";
            break;
        case "29":
            theme = "dusk";
            break;
        case "30":
            theme = "tundra";
            break;
        case "31":
            theme = "serene";
            break;
        case "32":
            theme = "radiant";
            break;
        case "33":
            theme = "glimmer";
            break;
        case "34":
            theme = "vintage";
            break;
        case "35":
            theme = "whimsical";
            break;
        case "36":
            theme = "fairytale";
            break;
        case "37":
            theme = "chill";
            break;
        case "38":
            theme = "wildflower";
            break;
        case "39":
            theme = "crystal";
            break;
        case "40":
            theme = "tranquil";
            break;
        case "41":
            theme = "jungle";
            break;
        case "42":
            theme = "neon";
            break;
        case "43":
            theme = "geometric";
            break;
        case "44":
            theme = "classy";
            break;
        case "45":
            theme = "sunkissed";
            break;
        case "46":
            theme = "nocturnal";
            break;
        case "47":
            theme = "mellow";
            break;
        case "48":
            theme = "woodland";
            break;
        case "49":
            theme = "plush";
            break;
        case "50":
            theme = "glow";
            break;
        case "51":
            theme = "quaint";
            break;
        case "52":
            theme = "solstice";
            break;
        case "53":
            theme = "gemstone";
            break;
        case "54":
            theme = "azure";
            break;
        case "55":
            theme = "copper";
            break;
        case "56":
            theme = "onyx";
            break;
        case "57":
            theme = "sapphire";
            break;
        case "58":
            theme = "scarlet";
            break;
        case "59":
            theme = "emerald";
            break;
        case "60":
            theme = "indigo";
            break;
        case "61":
            theme = "pastel";
            break;
        case "62":
            theme = "frost";
            break;
        case "63":
            theme = "pearl";
            break;
        case "64":
            theme = "pomegranate";
            break;
        case "65":
            theme = "melon";
            break;
        case "66":
            theme = "cocoa";
            break;
        case "67":
            theme = "coffee";
            break;
        case "68":
            theme = "vibrant";
            break;
        case "69":
            theme = "breeze";
            break;
        case "70":
            theme = "silhouette";
            break;
        case "71":
            theme = "monsoon";
            break;
        case "72":
            theme = "sandstorm";
            break;
        case "73":
            theme = "saffron";
            break;
        case "74":
            theme = "plum";
            break;
        case "75":
            theme = "nectar";
            break;
        case "76":
            theme = "turquoise";
            break;
        case "77":
            theme = "cypress";
            break;
        case "78":
            theme = "seaweed";
            break;
        case "79":
            theme = "merlot";
            break;
        case "80":
            theme = "sangria";
            break;
        case "81":
            theme = "quicksilver";
            break;
        case "82":
            theme = "tangerine";
            break;
        case "83":
            theme = "sublime";
            break;
        case "84":
            theme = "deepsea";
            break;
        case "85":
            theme = "moonbeam";
            break;
        case "86":
            theme = "shimmer";
            break;
        case "87":
            theme = "pale";
            break;
        case "88":
            theme = "dark";
            break;
        case "89":
            theme = "soft";
            break;
        case "90":
            theme = "electric";
            break;
        case "91":
            theme = "dazzle";
            break;
        case "92":
            theme = "fusion";
            break;
        case "93":
            theme = "chic";
            break;
        case "94":
            theme = "ethereal";
            break;
        case "95":
            theme = "radiance";
            break;
        case "96":
            theme = "iridescent";
            break;
        case "97":
            theme = "whirlpool";
            break;
        case "98":
            theme = "fable";
            break;
        case "99":
            theme = "celestial";
            break;
        case "100":
            theme = "timeless";
            break;
        default:
            theme = "wintry";
    }
}
	let seconds = 5;
	async function join() {
		if(!fullName || !email || !filiere) return
		if(filiere === "0") return alert("Please select your major");
		try {
			joinPromise = axios.post("https://api.itech-club.com/join", {fullName, email, filiere, team});
			const res = await joinPromise;
			if (res.status === 200) {
				thanksSwitch = true;
				localStorage.setItem("joined", "true");
				for (let i = 0; i < 5; i++) {
					await new Promise(r => setTimeout(r, 1000));
					seconds--;
					if (seconds === 0) {
						window.location.replace("https://chat.whatsapp.com/GVfvRuq9AIpJema4dMgPCT");
					}
				}
				//new Promise(r => setTimeout(r, 5000)).then(() => window.location.replace("https://chat.whatsapp.com/GVfvRuq9AIpJema4dMgPCT"));
			}
		} catch (error) {
			if (error.response.status === 402) {
				emailExists = true;
				localStorage.setItem("joined", "true");
			}
		}
		// const res = await axios.post("http://localhost:8000/join", {fullName, email, filiere, team});
		// if (res.status === 200) {
		// 	thanksSwitch = true;
		// 	localStorage.setItem("joined", "true");
		// 	new Promise(r => setTimeout(r, 6000)).then(() => window.open("https://chat.whatsapp.com/GVfvRuq9AIpJema4dMgPCT"));
		// }
	}

	let randomIcon:string = "https://img.icons8.com/ios/50/000000/launched-rocket.png"
	async function iconRandomizer() {
		for (let i = 0; i < 100; i++) {
			const thisTeam = teamArray[Math.floor(Math.random() * teamArray.length)];
			await new Promise(r => setTimeout(r, 65));
			team = thisTeam
			setTheme(thisTeam)
			randomIcon = iconsMap.get(thisTeam);
		}
		await new Promise(r => setTimeout(r, 600));
		randomIcon = ""	
	}

	async function setCookies() {
		document.cookie = "team=" + team + "; max-age=31536000;";
	}
	
	
	
	
	onMount(async () => {
		if (document.cookie.includes("team")) {
			localStorage.getItem("joined")=="true" ? joinedSwitch = true : joinedSwitch = false;
			team = document.cookie.split("team=")[1].split(";")[0];
			randomIcon=""
			setTheme(team)
		} else {
			await iconRandomizer()
			await setCookies()
		}
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
	.teamDistributer .teamText {
		flex-direction: row;
	}
	.formlogo {
		width: 7rem;
		height: auto;
		margin-bottom: 2rem;
		/* position: absolute;
		width: 6rem;
		margin-bottom: 2rem;
		bottom: 0; */
	}
	.loading {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		justify-content: center;
		align-items: center;
		box-shadow: 0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.1);
	}
	.emailexists {
		color: #D4163C;
		text-align: center;
	}
	.pforsuccess {
		margin-left: 2rem;
		margin-right: 2rem;
	}
	.socialIcons {
		display: flex;
		flex-direction: row;
		gap: 2rem;
		justify-content: center;
		align-items: center;
	}
	.btn-icon {
		background-color: #fff;
		border: 1px solid #000;
		border-radius: 50%;
		padding: 0.5rem;
		margin-top: 2rem;
	}
</style>

<body data-theme={theme}>
<div class="teamDistributer">
	{#if randomIcon != "" && randomIcon != undefined}
			
			<div class="rotating icons">
				<img src={randomIcon} alt="{randomIcon} icon" />
			</div>
	{:else}
		<img class="formlogo" src="logo.png" alt="iTech logo">
		<h1 class="teamText">Your Secret number is 
		<br> {@html team?team:'<div class="placeholder animate-pulse flex-0" />'}</h1>
		{#if thanksSwitch || emailExists || joinedSwitch}
			{#if emailExists}
				<p class="emailexists">Email already exists</p>
			{:else}
				<h2>Thank you for joining!</h2>
				{#if !joinedSwitch}
					<p class="pforsuccess" style="text-align: center;">An email was sent to your inbox. Please check your spam folder if you don't see it.</p>
					<br>
					<p class="pforsuccess" style="text-align: center;">You will be redirected to our whatsapp channel in {seconds} seconds.</p>
				{:else}
					<p class="pforsuccess" style="text-align: center;">You are already a member of our community.</p>
				{/if}
			{/if}
		{:else}
			{#await joinPromise}
			<section class="card w-50 animate-pulse">
				<div class="loading p-3 ">
					<div class="placeholder-circle w-4 h-4" />
					<div class="placeholder-circle w-4 h-4" />
					<div class="placeholder-circle w-4 h-4" />
				</div>
			</section>
			{:then response}
			{#if formSwitch == false}
				{#if emailExists}
					<p class="emailexists">Email already exists</p>
				{:else}
					<button  type="button" class="btn variant-filled-primary" on:click={()=>{formSwitch=true}}>Join Now</button>
				{/if}
			{:else}
				<form on:submit|preventDefault={join}>
					<input class="input" type="text" required bind:value={fullName} placeholder="Your name" >
					<input class="input" type="email" required bind:value={email} placeholder="your@email.com">
					
					<select class="select" required bind:value={filiere}>
						<option value="0" disabled selected>Select your Major</option>
						<option value="1">Master IT</option>
						<option value="2">Master IDMS</option>
						<option value="9">Master BD</option>
						<option value="3">Génie IAGI</option>
						<option value="4">Génie MI</option>
						<option value="6">Génie MSEI</option>
						<option value="7">Genie Industriel</option>
						<option value="10">Génie EM</option>
						<option value="8">Cycle préparatoire</option>
					</select>
						

					<button type="submit" class="btn variant-filled-primary">Join Now</button>
				</form>
			{/if}
				
			{/await}
		{/if}
		<!-- <h3 class="h1" style="margin-bottom:2rem;">The event is over!</h3>
		<p class="pforsuccess" style="text-align: center;">We were happy to see you. And we will surely do it again!!!</p>
		<br>
		<p class="pforsuccess" style="text-align: center;">We welcome you this Friday the 8th and throught the whole following week, from 12h00 to 13h00, in our stand if you want to join our club</p>
		<br>
		<p class="pforsuccess" style="text-align: center;">For more information, Feel free to join the open community of itech Club via these Social links</p>
		<div class="socialIcons">
			<button type="button" class="btn-icon variant-filled "><a href="https://www.instagram.com/itech__club/"><img src="https://img.icons8.com/ios/50/000000/instagram-new.png" alt="instagram" /></a></button>
			<button type="button" class="btn-icon variant-filled"><a href="https://chat.whatsapp.com/GVfvRuq9AIpJema4dMgPCT"><img src="https://img.icons8.com/ios/50/000000/whatsapp.png" alt="whatsapp" /></a></button>
		</div> -->
	{/if}
	
</div>
</body>
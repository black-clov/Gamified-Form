<script>
    import { onMount } from 'svelte';
    import axios from 'axios';

    let drawSwitch = false;
    let buttonSwitch = false;
    let winnerPromise;

    let theme="wintry";

    function setTheme(t) {
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

    const filiereArray= ["","Master IT","Master IDMS","Génie IAGI","Génie MI","","Génie MSEI","Génie Industriel","Cycle préparatoire","Master BD","Génie EM"];
    let randomStudent;
    let finalWinner;
    let studentList = [];

    async function getCandidates() {
        const response = await axios.get('http://localhost:8000/list');
        studentList = response.data;
        console.log(studentList);
    }

    async function randomizer() {
        buttonSwitch = true;
        for (let i=0; i<10/*studentList.length*/; i++) {
            randomStudent = studentList[Math.floor(Math.random() * studentList.length)];
            setTheme(randomStudent.team);
            await new Promise(r => setTimeout(r, 200));
        }
        finalWinner = randomStudent;
        drawSwitch = true;
    }

    onMount(async () => {
        await getCandidates();
    });
</script>

<style>
    .topContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        height: 100vh;
        width: 100vw;
    }
    .topContainer h1 {
		font-size: 2rem;
		text-align: center;
		line-height: normal;
	}
    .topContainer .formlogo {
        width: 7rem;
        height: auto;
    }

    .winnerCard {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        z-index: 2;
    }
    .winnerCard h1 {
        font-size: 2rem;
        margin-bottom: 0.5rem;
        text-align: center;
        line-height: normal;
    }
    .confittyAnimation{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    .winnerName {
        font-size: 5rem;
        text-align: center;
        line-height: normal;
    }
</style>

<body data-theme={theme}>
    <div class="topContainer">
        <img src="logo.png" class="formlogo" alt="logo" />
        <h1 class="h1">Winner Draw</h1>
        {#if drawSwitch}
            <div class="winnerCard card card-hover">
                <h2>the winner from the ramdom draw is:</h2>
                <h1 class="winnerName">
                    {finalWinner.fullName}
                </h1>
                <h3 class="h3">
                    {filiereArray[finalWinner.filiere]}
                </h3>
            </div>
            <div class="confittyAnimation"></div>   
        {:else}
            {#if buttonSwitch}
                <h3>{randomStudent.fullName}</h3>
                <h2>{filiereArray[randomStudent.filiere]}</h2>
            {:else}
                <button class="btn variant-filled-primary w-32" on:click={randomizer}>Draw</button>
            {/if}
        {/if}
    </div>
</body>
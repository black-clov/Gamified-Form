<script>
    import { onMount } from 'svelte';
    import axios from 'axios';
    import confetti from 'canvas-confetti';

    let drawSwitch = false;
    let buttonSwitch = false;
    let winnerPromise;

    let theme="sahara";

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
        const randomAudio = new Audio("randomSound.wav");
        randomAudio.loop = true;
        randomAudio.play();
        for (let i=0; i<studentList.length; i++) {
            randomStudent = studentList[Math.floor(Math.random() * studentList.length)];
            setTheme(randomStudent.team);
            await new Promise(r => setTimeout(r, 200));
        }randomAudio.pause();
        const winnerAudio = new Audio("winningSound.wav");
        winnerAudio.play();
        finalWinner = randomStudent;
        drawSwitch = true;
        await new Promise(r => setTimeout(r, 300));
        const cheerAudio = new Audio("cheer.mp3");
        cheerAudio.play();
        
        confetti({
            particleCount: 500,
            spread: 360,
            ticks: 10000,
            gravity: 0.0,
            origin: { y: 0.6 },
            zIndex: 1,
            
        });
        const confittiShape = confetti.shapeFromText({text:"🤖",scalar:3});
        confetti({
            particleCount: 50,
            spread: 120,
            angle:0,
            shapes: [confittiShape],
            origin: { y: 0.6 },
            scalar: 3,
            zIndex: 3,
            flat: true
        });
        confetti({
            particleCount: 50,
            spread: 120,
            angle:180,
            shapes: [confittiShape],
            origin: { y: 0.6 },
            scalar: 3,
            zIndex: 3,
            flat: true
        });

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
                <h2>the winner from the random draw is:</h2>
                <h1 class="winnerName">
                    {finalWinner.fullName}
                </h1>
                <h3 class="h3">
                    {filiereArray[finalWinner.filiere]}
                </h3>
            </div>
        {:else}
            {#if buttonSwitch}
                <h3 class="h3">{randomStudent.fullName}</h3>
                <h4 class="h4">{filiereArray[randomStudent.filiere]}</h4>
            {:else}
                <button class="btn variant-filled-primary w-32" on:click={randomizer}>Draw</button>
            {/if}
        {/if}
    </div>
</body>
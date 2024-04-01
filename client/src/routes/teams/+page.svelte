<script>
    import { onMount } from 'svelte';
    import axios from 'axios';


    let buttomSwitch = false;

    let firstTeam = "Water";
    let SecondTeam = "Fire";

    const colorMap = new Map()
    colorMap.set('Earth', '#ECAA36');
    colorMap.set('Fire', '#D4163C');
    colorMap.set('Water', '#3B82F6');
    colorMap.set('Air', '#DEF8F9');
    
    let studentList = [];

    let player1team1;
    let player2team1;
    let player1team2;
    let player2team2;

    async function choosePlayers() {
        const firstTeamMembers = studentList.filter(student => student.team === firstTeam);
        const secondTeamMembers = studentList.filter(student => student.team === SecondTeam);
        console.log(firstTeamMembers);
        const min = Math.min(firstTeamMembers.length, secondTeamMembers.length);
        
        const randomAudio = new Audio("randomSound.wav");
        randomAudio.loop = true;
        randomAudio.play();

        for (let i = 0; i < min; i++) {
            player1team1 = firstTeamMembers[i].fullName
            player2team1 = firstTeamMembers[firstTeamMembers.length-1-i].fullName
            player1team2 = secondTeamMembers[i].fullName
            player2team2 = secondTeamMembers[secondTeamMembers.length-1-i].fullName
            await new Promise(r => setTimeout(r, 200));
        }
        randomAudio.pause();
        const winnerAudio = new Audio("winningSound.wav");
        winnerAudio.play();

       

        const randomIndex = Math.floor(Math.random() * min);
        player1team1 = firstTeamMembers[randomIndex].fullName;
        player1team2 = secondTeamMembers[randomIndex].fullName;
        firstTeamMembers.splice(randomIndex, 1);
        secondTeamMembers.splice(randomIndex, 1);


        const randomIndex2 = Math.floor(Math.random() * min);
        player2team1 = firstTeamMembers[randomIndex2].fullName;
        player2team2 = secondTeamMembers[randomIndex2].fullName;
        console.log(firstTeamMembers);
    }

    onMount(async () => {
        const response = await axios.get('https://api.itech-club.com/list');
        studentList = response.data;
    });
</script>

<style>
    .container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
    }
    .all {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        height: 100vh;
    }
    .firstTeam {
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        flex: 45%;
        align-items: center;
        width: 100%;
        height: 100vh;
        gap: 3rem;
    }
    .secondTeam {
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        align-items: center;
        flex: 45%;
        width: 100%;
        height: 100vh;
        gap: 3rem;
    }
</style>
<div class="all">
    <div class="firstTeam" style="background-color: {colorMap.get(firstTeam)};">
        <div class="container">
            <h1 class="h1">{player1team1?player1team1:"Guessing"}</h1>
        </div>
        <div class="container">
            <h1 class="h1">{player2team1?player2team1:"Guessing"}</h1>
        </div>
    </div>
    <button class="btn variant-filled" on:click={choosePlayers}>Choose Players</button>
    <div class="secondTeam" style="background-color: {colorMap.get(SecondTeam)};">
        <div class="container">
            <h1 class="h1">{player1team2?player1team2:"Guessing"}</h1>
        </div>
        <div class="container">
            <h1 class="h1">{player2team2?player2team2:"Guessing"}</h1>
        </div>
    </div>
</div>
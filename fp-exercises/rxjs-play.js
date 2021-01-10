/* @flow */
/* global require: true */

import * as Rx from 'rxjs';

const jsButton: any = document.querySelector('#jsButton')
const rxjsButton: any = document.querySelector('#rxjsButton')
const startGame: any = document.querySelector('#startGame')
const resetGame: any = document.querySelector('#resetGame')
const resultDiv: any = document.querySelector('.button-click')
const timeElem = document.querySelector('#time')
const scorerElem = document.querySelector('#scorer')
const team1Elem = document.querySelector('#team1')
const team2Elem = document.querySelector('#team2')
const team1Input = document.querySelector('[name="team1Name"]')
const team2Input = document.querySelector('[name="team2Name"]')

jsButton.addEventListener('click', e => { 
  resultDiv.innerHTML = "You clicked JS button" 
})

Rx.fromEvent(rxjsButton, 'click')
  .subscribe(e => {
    resultDiv.innerHTML = "You clicked RxJs button" 
  })

// Live score section

interface Team {
  teamNum: number,
  teamName: string,
  scorer: string,
  score: number
}
  // _NOTE_
  // Finish reset functionality and playback functionality
  // We need to first keep track of time left in a quarter (12 mins.) Yes some of this is borrowed code.
  const team1: Team = {
    teamNum: 1,
    teamName: "team1",
    score: 0
  } 
  const team2: Team = {
    teamNum: 2,
    teamName: "team2",
    score: 0
  } 
  const playerList1: Array<string> = ['Jim Brown', 'Bill Lancer', 'Kevin Basely', 'Shawn Dwight', 'Mike Piere']
  const playerList2: Array<string> = ['Remelo Smith', 'Quantavious Jackson', 'Blake Booker', 'Devin Walker', 'Mike Monroe']

  const twelveMins = 720000

  let scoreRecord: Array<Team> = []

function stopInterval(intervalId: number, clearTime: number): void {
  setTimeout(() => {
    clearInterval(intervalId)
  }, clearTime);
}

function startTimer(duration: number): void {
  let timer = duration, minutes, seconds;
  const timerId = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timeElem.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }

  }, 1000);

  updateScore()
// Clear interval after 12 minutes
  stopInterval(timerId, twelveMins);
}

function updateScore(): void {
  // Mock an update every 5 seconds
  const timerId = setInterval(() => {
    // Generate an increase in score by 2 or 3 for either team 1 or team 2 name the player that scored.
    const randomTeam = Math.floor(Math.random() * 2) + 1
    const randomIndex = Math.floor(Math.random() * 4) + 0 
    const score = Math.floor(Math.random() * 3) + 1
  
    switch (randomTeam) {
      case 1:
        team1.scorer = `${playerList1[randomIndex]} ${score}pts`
        team1.score = score + team1.score

        scoreRecord.push({ ...team1 })
        break;
      case 2:
        team2.scorer = `${playerList2[randomIndex]} ${score}pts`
        team2.score = score + team2.score
        scoreRecord.push({ ...team2 })
      default:
        break;
    }

    // insert score update to elements
 //   debugger
    team1Elem.innerHTML = `${team1.score}`
    team2Elem.innerHTML = `${team2.score}`
    scorerElem.innerHTML = `${scoreRecord.pop().scorer}`
  }, 5000);

  // Clear interval after 12 minutes
  stopInterval(timerId, twelveMins);
}

team2Input.addEventListener('change', (e) => {
  team2.teamName = e.target.value
})

team1Input.addEventListener('change', (e) => {
  team1.teamName = e.target.value
})

startGame.addEventListener('click', () => {
  startTimer(60 * 12);
})

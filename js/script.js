$(document).ready(function () {
  $('#political-form').submit(function (event) {
    event.preventDefault();
    let govtSize = $('select#govt-size').val();
    let govtService = $('select#govt-service').val();
    let view = $('select#view').val();
    let expert = $('select#expert').val();
    let trade = $('select#trade').val();
    let race = $('select#race').val();
    let religion = $('select#religion').val();
    let profit = $('select#profit').val();

    let politicalBelief;
    if (govtSize === 'smaller' && expert === 'better' && trade === 'lost' && race === 'little' && religion === 'support' && profit === 'reasonable') {
      politicalBelief = 'Conservative';
    } else if (govtSize === 'bigger' && govtService === 'modestly' && view === 'open' && expert === 'neutral' && race === 'alot') {
      politicalBelief = 'Moderate';
    } else if (govtSize === 'bigger' && govtService === 'greatly' && view === 'tooOpen' && expert === 'worse' && trade === 'gain' && race === 'nothing' && religion === 'seperate' && profit === 'unreasonable') {
      politicalBelief = 'Liberal';
    }

    if (politicalBelief === 'Conservative') {
      window.location.href = 'conservative.html';
    } else if (politicalBelief === 'Moderate') {
      window.location.href = 'moderate.html';
    } else if (politicalBelief === 'Liberal') {
      window.location.href = 'liberal.html';
    } else {
      window.location.href = 'moderate.html';
    }
  });
});
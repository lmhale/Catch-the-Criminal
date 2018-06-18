$(document).ready(() => {
  const Landing = $('<div/>');
  Landing.attr('id', 'container');
  Landing.appendTo('body');
  const H1 = $('<h1/>');
  H1.appendTo('#container');
  H1.text('Catch the Criminal');

  $('.rules').appendTo('#container');

  const gamePage = $('<div/>');
  gamePage.attr('id', 'board');
  gamePage.appendTo('body');

  // detective image
  const detective = $('<img/>');
  detective.appendTo('#container');
  detective.attr('src', 'images/detective.jpg');
  detective.attr('class', 'detective');

  // map
  const map = $('<img/>');
  map.attr('src', 'images/map.gif');
  map.attr('class', 'map');
  map.appendTo('#board');


  const formDiv = $('<div/>').attr('id', 'form');
  $(formDiv).appendTo('#container');
  $('#myForm').appendTo(formDiv);


  $('#myForm').submit((e) => {
    $('#moneyBox').appendTo('#board');
    $('#moneyBox').show();

    $('#container').hide();
    $('#board').show();

    e.preventDefault();
  });

  let winOrLose;
  let message;
  let user;

  $('#messageBox').appendTo('#board');

  $('#myForm').submit((e) => {
    $('#messageBox').show();
    user = $('#input_name').val();
    message = `<span class="span">Welcome detective ${user}! </span> <br/> <p>The international jewel thief was spotted most recently in the open-air markets of Tehran. Catch a flight to Tehran to see if you can discover any leads about the thief's whereabouts. We're counting on you detective! </p> `;

    $(message).appendTo('#messageBox');

    $('#contBtn').show();
    // click continue button
    $('#contBtn').click(() => {
      $('#messageBox').hide();
      $('#Iran').show();
    });


    e.preventDefault();
  });


  const contBtn = $('#contBtn');
  const reset = $('.reset');

  $('.reset').click(() => {
    location.reload();
  });

  $('#Iran').click((e) => {
    $('#Iran').hide();
    $('#messageBox').show();
    message = 'Looks like you just missed the thief! Read the testimony from the local witness to decide your next move.<br/><br/> Witness: "I saw him wandering around the market checking out other peoples wares. I overheard him talking about Bennelong Point and how opera goers tend to have expensive jewlery."';
    $('#messageBox').html(message);
    // Iran continue button
    $('#messageBox').append(contBtn);
    e.preventDefault();
    $('#contBtn').click(() => {
      $('#messageBox').hide();
      $('#Australia').show();
      $('#Brazil').show();
      $('#Russia').show();
    });
    // Australia click event
    $('#Australia').click(() => {
      $('#messageBox').show();
      message = 'Looks like another narrow escape. Several people saw the thief at the Sydney Opera House just 2 hours prior. <br/><br/> Witness:"We were chatting about the sites in Australia and I remember him saying that he is trying to savor the fresh air and uncensored internet before his next trip."';
      $('#messageBox').html(message);
      $('#messageBox').append(contBtn);
      $('#Brazil').hide();
      $('#Russia').hide();
      // continue button from australia
      $('#contBtn').click(() => {
        $('#messageBox').hide();
        $('#Australia').hide();
        $('#unitedStates').show();
        $('#Brazil').show();
        $('#China').show();

        // Brazil click event (after AUS continue button)
        $('#Brazil').click(() => {
          $('#messageBox').show();
          $('#Brazil').hide();
          message = 'Oh no! one has seen the jewel thief here! That plane ride cost you some time and money';
          $('#messageBox').html(message);
          $('#messageBox').append(contBtn);
          // continue button for Brazil
          $('#contBtn').click(() => {
            $('#messageBox').hide();
          });
          e.preventDefault();
        });
        // U.S. click event (inside Aus continue button click event)
        $('#unitedStates').click(() => {
          $('#messageBox').show();
          $('#unitedStates').hide();
          message = 'Oh no! one has seen the jewel thief here! That plane ride cost you some time and money';
          $('#messageBox').html(message);
          $('#messageBox').append(contBtn);
          // continue button for u.s.
          $('#contBtn').click(() => {
            $('#messageBox').hide();
          });
          e.preventDefault();
        });
        // China click event (inside AUS continue button click event)
        $('#China').click(() => {
          $('#China').hide();
          $('#Brazil').hide();
          $('#unitedStates').hide();

          $('#messageBox').show();
          message = 'Someone in the forbidden city has a lead on our crook! <br/><br/> Witness: "All I know is that he seemed really hungry. He said he was craving a Croque-monsieur"';
          $('#messageBox').html(message);
          $('#messageBox').append(contBtn);
          // continue button for China
          $('#contBtn').click(() => {
            $('#messageBox').hide();
            $('#France').show();
            $('#India').show();
            $('#Mexico').show();


            // Mexico triggered by china continue button
            $('#Mexico').click(() => {
              $('#messageBox').show();

              message = 'oh know no one has seen the thief here!!! That plane ride cost you some time and money.';
              $('#messageBox').html(message);
              $('#messageBox').append(contBtn);
              // continue button for Mexico
              $('#contBtn').click(() => {
                $('#messageBox').hide();
                $('#Mexico').hide();
              });
              e.preventDefault();
            });

            // France (triggered by China continue button)
            $('#France').click(() => {
              $('#messageBox').show();

              message = 'You\'re getting close detective, the thief was spotted eating at a streetside cafe in Paris. Maybe the transcript from the waitress can give you a clue about where he is headed next. <br/><br/> Waitress: " I asked him if he enjoyed his food and he replied, \'I ate so much that I need redemption from christ!\'" ';
              $('#messageBox').html(message);
              $('#messageBox').append(contBtn);
              $('#France').hide();
              $('#Mexico').hide();
              $('#India').hide();
              // continue button for France
              $('#contBtn').click(() => {
                $('#messageBox').hide();

                $('#Brazil').show();
                $('#unitedStates').show();
                $('#Russia').show();

                $('#Brazil').click(() => {
                  $('#messageBox').show();
                  $('#unitedStates').hide();
                  $('#Brazil').hide();
                  message = "You are right on the thiefs heels! A tourist saw him just an hour prior, looking up at the giant statue of Christ the Redeemer.<br/><br/> Tourist: 'I asked him if he had seen anything more impressive in his life,' to which he replied: 'the Palace of Versailles, which is currently under construction. Peter the Great makes a pretty good substitute though.' ";
                  $('#messageBox').html(message);
                  $('#messageBox').append(contBtn);
                  // continue button for Brazil
                  $('#contBtn').click(() => {
                    $('#messageBox').hide();
                    $('#India').show();
                    $('#Mexico').show();
                    $('#Russia').show();

                    // Russia (final criminal destination)
                    $('#Russia').click(() => {
                      $('#board').hide();
                      winOrLose = 'You Caught the Criminal!';
                      $('#gameOver').show();
                      gameOver.html(winOrLose);
                      $('#gameOver').append(reset);

                      e.preventDefault();
                    });


                    // mexico (triggered by brazil continue button)
                    $('#Mexico').click(() => {
                      $('#messageBox').show();

                      message = 'oh know no one has seen the thief here!!! That plane ride cost you some time and money.';
                      $('#messageBox').html(message);
                      $('#messageBox').append(contBtn);
                      // continue button for Mexico
                      $('#contBtn').click(() => {
                        $('#messageBox').hide();
                        $('#Mexico').hide();
                      });
                      e.preventDefault();
                    });
                  });
                  e.preventDefault();
                });


                // U.S. triggered by France continue button
                $('#unitedStates').click(() => {
                  $('#messageBox').show();

                  message = 'oh know no one has seen the thief here!!! That plane ride cost you some time and money.';
                  $('#messageBox').html(message);
                  $('#messageBox').append(contBtn);
                  // continue button for unites states
                  $('#contBtn').click(() => {
                    $('#messageBox').hide();
                    $('#unitedStates').hide();
                  });
                  e.preventDefault();
                });
              });
            });


            // India (triggered by china continue button)
            $('#India').click(() => {
              $('#messageBox').show();

              message = 'oh know no one has seen the thief here!!! That plane ride cost you some time and money.';
              $('#messageBox').html(message);
              $('#messageBox').append(contBtn);
              // continue button for India
              $('#contBtn').click(() => {
                $('#messageBox').hide();
                $('#India').hide();
              });
              e.preventDefault();
            });
          });
          e.preventDefault();
        });
      });

      e.preventDefault();
    });

    // /// Brazil (from Iran click event)
    $('#Brazil').click(() => {
      $('#messageBox').show();
      $('#Brazil').hide();
      message = 'oh know no one has seen the thief here! That plane ride cost you some time and money.';
      $('#messageBox').html(message);
      $('#messageBox').append(contBtn);
      // continue button for Brazil
      $('#contBtn').click(() => {
        $('#messageBox').hide();
      });
      e.preventDefault();
    });

    // // Russia

    $('#Russia').click(() => {
      $('#messageBox').show();
      $('#Russia').hide();
      message = 'oh know no one has seen the thief here! That plane ride cost you some time and money.';
      $('#messageBox').html(message);
      $('#messageBox').append(contBtn);
      // continue button for Russia
      $('#contBtn').click(() => {
        $('#messageBox').hide();
      });

      e.preventDefault();
    });
  });


  const Iran = $('#Iran').appendTo('#board');
  const Australia = $('#Australia').appendTo('#board');
  const France = $('#France').appendTo('#board');
  const Russia = $('#Russia').appendTo('#board');
  const Brazil = $('#Brazil').appendTo('#board');
  const India = $('#India').appendTo('#board');
  const Mexico = $('#Mexico').appendTo('#board');
  const China = $('#China').appendTo('#board');
  const unitedStates = $('#unitedStates').appendTo('#board');


  let gameOver = $('<div/>');
  gameOver.attr('id', 'gameOver');
  gameOver.appendTo('body');


  let count = 8000;
  $('#moneyBox').html(`$${count}`);
  $('.tooltip').click(() => {
    winOrLose = 'Game Over';
    $('#moneyBox').html(`$${count -= 1000}`);
    if (count < 1000) {
      $('#board').hide();
      $('#gameOver').show();
      gameOver.html(winOrLose);
      $('#gameOver').append(reset);
    }
  });
});

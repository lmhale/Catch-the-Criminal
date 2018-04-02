$(document).ready(function(){

let Landing = $('<div/>');
Landing.attr('id','container');
Landing.appendTo('body')
let H1 = $('<h1/>');
H1.appendTo('#container');
H1.text("Catch the Criminal");

$(".rules").appendTo('#container');

let gamePage = $('<div/>');
gamePage.attr('id','board');
gamePage.appendTo('body');

//detective image
let detective =$('<img/>');
detective.appendTo('#container')
detective.attr('src','images/detective.jpg');
detective.attr('class','detective')

//map 
let map = $('<img/>')
map.attr('src','images/map.gif');
map.attr('class','map');
map.appendTo('#board');




        

let formDiv = $('<div/>').attr('id','form');
$(formDiv).appendTo('#container');
$('#myForm').appendTo(formDiv);


    $("#myForm").submit(function(e) {
        
        $('#moneyBox').appendTo('#board');
        $('#moneyBox').show();
      
        $("#container").hide();
        $("#board").show();
       
        e.preventDefault();
       
    });
    let winOrLose;
    var message;
    var user;
    
    $('#messageBox').appendTo('#board');

    $("#myForm").submit(function(e) {
       $('#messageBox').show();
        user = $('#input_name').val(); 
        message = `<span class="span">Welcome detective ${user}! </span> <br/> <p>The international jewel thief was spotted most recently in the open-air markets of Tehran. Catch a flight to Tehran to see if you can discover any leads about the thief's whereabouts. We're counting on you detective! </p> `; 
       
        $(message).appendTo('#messageBox');

       $("#contBtn").show();
       // click continue button
       $("#contBtn").click(function(){

          
                
        $("#messageBox").hide();
       $('#Iran').show();
    });
      

        e.preventDefault();

});




 


let contBtn = $("#contBtn");
let reset = $(".reset");

$('.reset').click(function() {
    location.reload();
});


$("#Iran").click((e) => {
    $("#Iran").hide();
    $("#messageBox").show();
    message='Looks like you just missed the thief! Read the testimony from the local witness to decide your next move.<br/><br/> Witness: "I saw him wandering around the market checking out other peoples wares. I overheard him talking about Bennelong Point and how opera goers tend to have expensive jewlery."';
    $('#messageBox').html(message);
    // Iran continue button
    $("#messageBox").append(contBtn);
    e.preventDefault();
    $("#contBtn").click(function(){
        $("#messageBox").hide();
        $("#Australia").show();
        $("#Brazil").show();
        $("#Russia").show();
    });
    // Australia click event 
 $("#Australia").click(function(){
    $("#messageBox").show(); 
    message='Looks like another narrow escape. Several people saw the thief at the Sydney Opera House just 2 hours prior. <br/><br/> Witness:"We were chatting about the sites in Australia and I remember him saying that he is trying to savor the fresh air and uncensored internet before his next trip."';
    $('#messageBox').html(message);
    $("#messageBox").append(contBtn);
    $("#Brazil").hide();
    $("#Russia").hide();
        //continue button from australia
    $("#contBtn").click(function(){
    $("#messageBox").hide();
    $('#Australia').hide();
    $('#unitedStates').show();
    $('#Brazil').show();
    $('#China').show();

    // Brazil click event (after AUS continue button)
    $("#Brazil").click(function(){
    $("#messageBox").show(); 
    $("#Brazil").hide();
    message="Oh no! one has seen the jewel thief here! That plane ride cost you some time and money";
    $('#messageBox').html(message);
    $("#messageBox").append(contBtn);
     //continue button for Brazil
    $("#contBtn").click(function(){
    $("#messageBox").hide();
                  
    });
     e.preventDefault();
     });
    // U.S. click event (inside Aus continue button click event)
    $("#unitedStates").click(function(){
    $("#messageBox").show(); 
     $("#unitedStates").hide();
     message="Oh no! one has seen the jewel thief here! That plane ride cost you some time and money";
     $('#messageBox').html(message);
     $("#messageBox").append(contBtn);
     //continue button for u.s.
     $("#contBtn").click(function(){
     $("#messageBox").hide();
                  
     });
     e.preventDefault();
            });
            // China click event (inside AUS continue button click event)
     $("#China").click(function(){
     $("#China").hide();
     $("#Brazil").hide();
     $("#unitedStates").hide();

      $("#messageBox").show(); 
      message='Someone in the forbidden city has a lead on our crook! <br/><br/> Witness: "All I know is that he seemed really hungry. He said he was craving a Croque-monsieur"';
      $('#messageBox').html(message);
                $("#messageBox").append(contBtn);
                 //continue button for China
                 $("#contBtn").click(function(){
                    $("#messageBox").hide();
                    $("#France").show();
                    $("#India").show();
                    $("#Mexico").show();

                    // Mexico triggered by china continue button
                    $("#Mexico").click(function(){
                        $("#messageBox").show(); 
                              
                           message="oh know no one has seen the thief here!!! That plane ride cost you some time and money.";
                           $('#messageBox').html(message);
                           $("#messageBox").append(contBtn);
                           //continue button for Mexico
                           $("#contBtn").click(function(){
                           $("#messageBox").hide();
                                  $("#Mexico").hide();
                                
                              });
                              e.preventDefault();
                          });

                  // France (triggered by China continue button)
                  $("#France").click(function(){
                    $("#messageBox").show(); 
                    
                    message=`You're getting close detective, the thief was spotted eating at a streetside cafe in Paris. Maybe the transcript from the waitress can give you a clue about where he is headed next. <br/><br/> Waitress: " I asked him if he enjoyed his food and he replied, 'I ate so much that I need redemption from christ!'" `;
                    $('#messageBox').html(message);
                    $("#messageBox").append(contBtn);
                    $("#France").hide();
                    $("#Mexico").hide();
                    $("#India").hide();
                     //continue button for France
                     $("#contBtn").click(function(){
                        $("#messageBox").hide();
                         
                        $("#Brazil").show();
                        $("#unitedStates").show();
                        $("#Russia").show();
                    
                    //
                    $("#Brazil").click(function(){
                        $("#messageBox").show(); 
                        $("#unitedStates").hide();
                        $("#Brazil").hide();
                        message="You are right on the thiefs heels! A tourist saw him just an hour prior, looking up at the giant statue of Christ the Redeemer.<br/><br/> Tourist: 'I asked him if he had seen anything more impressive in his life,' to which he replied: 'the Palace of Versailles, which is currently under construction. Peter the Great makes a pretty good substitute though.' ";
                        $('#messageBox').html(message);
                        $("#messageBox").append(contBtn);
                         //continue button for Brazil
                         $("#contBtn").click(function(){
                            $("#messageBox").hide();
                            $("#India").show();
                            $("#Mexico").show();
                            $("#Russia").show();
                           

                    // Russia (final criminal destination)
                    
                    $("#Russia").click(function(){
                     
                       $("#board").hide();
                       winOrLose = "You Caught the Criminal!"
                       $("#gameOver").show();
                       gameOver.html(winOrLose);
                       $("#gameOver").append(reset);

                          
                             
                              e.preventDefault();
                          });
                          
                       // mexico (triggered by brazil continue button)
                        $("#Mexico").click(function(){
                          $("#messageBox").show(); 
                                
                             message="oh know no one has seen the thief here!!! That plane ride cost you some time and money.";
                             $('#messageBox').html(message);
                             $("#messageBox").append(contBtn);
                             //continue button for Mexico
                             $("#contBtn").click(function(){
                             $("#messageBox").hide();
                                    $("#Mexico").hide();
                                  
                                });
                                e.preventDefault();
                            });
            



                          
                        });
                        e.preventDefault();
                    });
    




                    //U.S. triggered by France continue button
                    $("#unitedStates").click(function(){
                        $("#messageBox").show(); 
                        
                        message="oh know no one has seen the thief here!!! That plane ride cost you some time and money.";
                        $('#messageBox').html(message);
                        $("#messageBox").append(contBtn);
                         //continue button for unites states
                         $("#contBtn").click(function(){
                            $("#messageBox").hide();
                            $("#unitedStates").hide();
                          
                        });
                        e.preventDefault();
                    });
    
    
                    

                      
                    });
                });


                  

                  // India (triggered by china continue button)
                  $("#India").click(function(){
                    $("#messageBox").show(); 
                    
                    message="oh know no one has seen the thief here!!! That plane ride cost you some time and money.";
                    $('#messageBox').html(message);
                    $("#messageBox").append(contBtn);
                     //continue button for India
                     $("#contBtn").click(function(){
                        $("#messageBox").hide();
                        $("#India").hide();
                      
                    });
                    e.preventDefault();
                });


                });
                e.preventDefault();
            });
          
        });
        
        e.preventDefault();
    });
////////// Brazil (from Iran click event)
$("#Brazil").click(function(){
    $("#messageBox").show(); 
    $("#Brazil").hide();
    message="oh know no one has seen the thief here! That plane ride cost you some time and money.";
    $('#messageBox').html(message);
    $("#messageBox").append(contBtn);
     //continue button for Brazil
     $("#contBtn").click(function(){
        $("#messageBox").hide();
      
    });
    e.preventDefault();
});

//// Russia

$("#Russia").click(function(){
    $("#messageBox").show(); 
    $("#Russia").hide();
    message="oh know no one has seen the thief here! That plane ride cost you some time and money.";
    $('#messageBox').html(message);
    $("#messageBox").append(contBtn);
    //continue button for Russia
    $("#contBtn").click(function(){
        $("#messageBox").hide();
      
    });
    
    e.preventDefault();
});
    
    
    
   
});


 
 
 
 



let Iran = $('#Iran').appendTo('#board');
let Australia = $('#Australia').appendTo('#board');
let France = $('#France').appendTo('#board');
let Russia = $('#Russia').appendTo('#board');
let Brazil = $('#Brazil').appendTo('#board');
let India = $('#India').appendTo('#board');
let Mexico = $('#Mexico').appendTo('#board');
let China = $('#China').appendTo('#board');
let unitedStates = $('#unitedStates').appendTo('#board');




let gameOver = $('<div/>')
gameOver.attr('id','gameOver');
gameOver.appendTo('body');






var count = 8000;
$('#moneyBox').html("$"+ count);
$('.tooltip').click(function () {
winOrLose = "Game Over"
    $('#moneyBox').html("$" + (count-=1000));
    if (count < 1000){
     $("#board").hide();
     $("#gameOver").show();
     gameOver.html(winOrLose);
     $("#gameOver").append(reset);
     
}
}); 




});
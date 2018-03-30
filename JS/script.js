$(document).ready(function(){

    let Landing = $('<div/>');

Landing.attr('id','container');
Landing.appendTo('body')
let H1 = $('<h1/>');
H1.appendTo('#container');
H1.text("Catch the Criminal");



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
        
      
      
        $("#container").hide();
        $("#board").show();
       
        e.preventDefault();
       
    });

    var message;
    var user;
    
    $('#messageBox').appendTo('#board');

    $("#myForm").submit(function(e) {
       $('#messageBox').show();
        user = $('#input_name').val(); 
        message = `<span class="span">Welcome detective ${user}! </span> <br/> <p>The international jewel thief was spotted most recently in the open-air markets of Tehran. You better get to work!</p> `; 
       
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


$("#Iran").click((e) => {
    $("#Iran").hide();
    $("#messageBox").show();
    message="Go to Australia";
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
    $("#Australia").click(function(){
        $("#messageBox").show(); 
        message="hiiiiiiii";
        $('#messageBox').html(message);
        $("#messageBox").append(contBtn);
        $("#Brazil").hide();
            $("#Russia").hide();
        //continue button form australia
        $("#contBtn").click(function(){
            $("#messageBox").hide();
            $('#Australia').hide();
            $('#unitedStates').show();
            $('#Brazil').show();
            $("#Brazil").click(function(){
                $("#messageBox").show(); 
                message="this is a different message";
                $('#messageBox').html(message);
                $("#messageBox").append(contBtn);
                 //continue button form australia
                 $("#contBtn").click(function(){
                    $("#messageBox").hide();
                  
                });
                e.preventDefault();
            });
          
        });
        
        e.preventDefault();
    });
////////// Brazil
$("#Brazil").click(function(){
    $("#messageBox").show(); 
    message="oh know none of the witnesses have seen the thief! The plane ride cost you some time";
    $('#messageBox').html(message);
    $("#messageBox").append(contBtn);
     //continue button form australia
     $("#contBtn").click(function(){
        $("#messageBox").hide();
      
    });
    e.preventDefault();
});

//// Russia

$("#Russia").click(function(){
    $("#messageBox").show(); 
    message="not in Russia";
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
let countries = [Iran,Australia,France,Russia,Brazil,India,Mexico,China,unitedStates];







});
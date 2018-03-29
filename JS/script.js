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
        e.preventDefault();

});



$("#contBtn").click(function(){
    $("#messageBox").hide();
   
});

 


let contBtn = $("#contBtn");


$("#Iran").click((e) => {
    $("#messageBox").show();
    //$("#contBtn").show(); 
    message="hello there";
    $('#messageBox').html(message);
    //console.log('#contBtn');
    $("#messageBox").append(contBtn);
    e.preventDefault();
    $("#contBtn").click(function(){
        $("#messageBox").hide();
       
    });

   
});

$("#test2").click(function(){
    $("#messageBox").show(); 
    message="hiiiiiiii";
    $('#messageBox').html(message);
    $("#contBtn").show();
    
    e.preventDefault();
});

let Iran = $('#Iran').appendTo('#board');

let countries = [Iran];



});
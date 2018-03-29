$(document).ready(function(){

    let Landing = $('<div/>');
    //Landing.className = 'container';

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

let map = $('<img/>')
map.attr('src','images/map.gif');
map.attr('class','map');
map.appendTo('#board');

let textBox = $('<div/>').attr('class','textBox');
textBox.appendTo('#board')

let formDiv = $('<div/>').attr('id','form');
$(formDiv).appendTo('#container');

$('#myForm').appendTo(formDiv);


    $("#myForm").submit(function(e) {
        $("#container").hide();
        $("#board").show();
        
        e.preventDefault();
       
    });

    $("#myForm").submit(function(e) {
        e.preventDefault();
        var user = $('#input_name').val();
        $('.textBox').text("hello " + user);
        
    });






});
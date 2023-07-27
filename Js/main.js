
var quotes_array=[
function (){
    document.getElementById("qu").innerHTML=`“ Don’t walk in front of me… I may not follow
    Don’t walk behind me… I may not lead
    Walk beside me… just be my friend” `;

    document.getElementById("qu-au").innerHTML="--Albert Camus";
},
function (){
    document.getElementById("qu").innerHTML=" “It's not what happens to you, but how you react to it that matters.“ ";

    document.getElementById("qu-au").innerHTML="--Epictetus";
},
function (){
    document.getElementById("qu").innerHTML=`“I am so clever that sometimes I don't understand a single word of what I am saying.”`;
    document.getElementById("qu-au").innerHTML="-- Oscar Wilde, The Happy Prince and Other Stories";
},
function (){
    document.getElementById("qu").innerHTML=`“It is better to be hated for what you are than to be loved for what you are not.”`;

    document.getElementById("qu-au").innerHTML="-- Andre Gide, Autumn Leaves";
},
function (){
    document.getElementById("qu").innerHTML="“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.”";

    document.getElementById("qu-au").innerHTML="--Jane Austen, Northanger Abbey";
},
function (){
    document.getElementById("qu").innerHTML="“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”";
    document.getElementById("qu-au").innerHTML="--Albert Einsteins";
},
function (){
    document.getElementById("qu").innerHTML="Good friends, good books, and a sleepy conscience: this is the ideal life.”";
    document.getElementById("qu-au").innerHTML="-- Mark Twain";
},
function (){
    document.getElementById("qu").innerHTML="”As he read, I fell in love the way you fall asleep: slowly, and then all at once.”";
    document.getElementById("qu-au").innerHTML="-- John Green, The Fault in Our Stars";
},
];

function generate_quote(){
   var number=Math.floor(Math.random() * quotes_array.length);
    quotes_array[number]();
   
}
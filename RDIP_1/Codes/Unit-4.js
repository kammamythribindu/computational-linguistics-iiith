var corpus1=['A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole.Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough.When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in."'];
var corpus2=['A wolf carried off a lamb. The lamb said, " I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.'];
var corpus3=['A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair.'];
var stemsArr = [];
function myClear(){              //used to clear some elements everytime we perform an action
       document.getElementById("para3").innerHTML="";
       document.getElementById("continue").innerHTML="";
       document.getElementById("val1").value="";  
       document.getElementById("val2").value="";  
       document.getElementById("val1").style.backgroundColor="";
       document.getElementById("val2").style.backgroundColor="";
       document.getElementById("para4").innerHTML="";
       document.getElementById("para5").innerHTML="";
       document.getElementById("final").innerHTML="";
       document.getElementById("sub2").innerHTML="";
       document.getElementById("para6").innerHTML="";
       stemsArr=[];
}

function dropfunc()   //executes after drop down selection
{
       var x = document.getElementById("CorpusSelect").value; 
       myClear();  
       if(x=="corpus1"||x=="corpus2"|| x=="corpus3")                           
       {
       document.getElementById("para2").innerHTML = "Enter the number of tokens and types for the above corpus:";
       document.getElementById("myDIV").style.visibility="visible";
       document.getElementById("sub").innerHTML= "<input type='submit' onclick='myFunction()' value='Submit' />"
       if(x=="corpus1")
       {
        myClear();       
        document.getElementById("para1").innerHTML = corpus1; 
        myTokens(corpus1);
        uniqueTypeCount(corpus1);
       }
       else if(x=="corpus2")
       {
        myClear(); 
        document.getElementById("para1").innerHTML = corpus2;  
        myTokens(corpus2);
        uniqueTypeCount(corpus2);
       }
       else if(x=="corpus3")
       {
        myClear();      
        document.getElementById("para1").innerHTML = corpus3; 
        myTokens(corpus3);
        uniqueTypeCount(corpus3);
       }
        return true;
       }
       else
       {
        alert("Select a corpus");
        return false;
       }
     
}
function myTokens(str)          //used to calculate number of tokens in a selected corpus
{ 
      var tokens=str[0].replace(/(^\s*)|(\s*$)/gi,"");
      tokens= tokens.replace(/\n /,"\n");
      tokens=tokens.toLowerCase().split(/\W+/);
      console.log(tokens);
      var tokLen=(tokens.length)-1;
      global1=tokLen;
      console.log(tokLen);
      var binLang="English";
      for(var z=0;z<tokens.length;z++)
      {
         if(tokens[z]!='mouse'&&tokens[z]!='very'&&tokens[z]!='done'&&tokens[z]!='hungry'&&tokens[z]!='before'&&tokens[z]!='tried'&&tokens[z]!='""'&&tokens[z]!='carried'&&tokens[z]!='anyone'&&tokens[z]!='else'&&tokens[z]!='pleased'&&tokens[z]!='once'&&tokens[z]!='able'&&tokens[z]!='little'&&tokens[z]!='why'&&tokens[z]!='does'&&tokens[z]!='only'&&tokens[z]!='table'&&tokens[z]!='house')
         {
                mythri(binLang,tokens[z]);
         }
      }
      console.log(stemsArr);
      console.log(stemsArr.length);
      var set1=new Set(stemsArr);
      console.log(set1);
      console.log(set1.size-1); //as the new types array contains space included,we reduce the size by 1 count 
      // return tokLen;
      global3=(set1.size)-1;
     

}

function uniqueTypeCount(str) {      //used to calculate unique types in a selected corpus
       str[0].replace(/(^\s*)|(\s*$)/gi,"");
       str[0].replace(/\n /,"\n");
       var set = new Set(str[0].toLowerCase().split(/\W+/));
       console.log(set);
       var typLen=(set.size)-1;
       global2=typLen;
       console.log(typLen);
       //return typLen;
}

function myFunction(){        //checks whether the input is correct or wrong for types and tokens
var input1=document.getElementById("val1").value;
var input2=document.getElementById("val2").value;
if((input1==global1)&&(input2==global2))
{
       document.getElementById("val1").style.backgroundColor = "green";
       document.getElementById("val2").style.backgroundColor = "green";
       document.getElementById("para3").innerHTML="Right Answer";
       document.getElementById("para3").style.color="green";
       document.getElementById("continue").innerHTML="<input type='submit' value='Continue' onclick='binFunc()'/>";
}
else if((input1==global1)&&(input2!=global2)){
       document.getElementById("val1").style.backgroundColor = "green";
       document.getElementById("val2").style.backgroundColor = "red";
       document.getElementById("para3").innerHTML="Wrong Answer";
       document.getElementById("para3").style.color="red";
       document.getElementById("continue").innerHTML="";
}
else if((input1!=global1)&&(input2==global2)){
       document.getElementById("val1").style.backgroundColor = "red";
       document.getElementById("val2").style.backgroundColor = "green";
       document.getElementById("para3").innerHTML="Wrong Answer";
       document.getElementById("para3").style.color="red";
       document.getElementById("continue").innerHTML="";
}
else
{
       document.getElementById("val1").style.backgroundColor = "red";
       document.getElementById("val2").style.backgroundColor = "red";
       document.getElementById("para3").innerHTML="Wrong Answer";
       document.getElementById("para3").style.color="red";
       document.getElementById("continue").innerHTML="";
}
}

function binFunc()  //this function triggers whenever the types and tokens entered are correct
{
       document.getElementById("para3").innerHTML="";
       document.getElementById("continue").innerHTML="";
       document.getElementById("sub").innerHTML="";
       document.getElementById("para4").innerHTML="Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types.";
       document.getElementById("para5").innerHTML="#new types:";
       document.getElementById("final").innerHTML="<input id='finaltext' type='text'/>";
       document.getElementById("sub2").innerHTML="<input type='submit' value='Submit' onclick='finalTypes()'/>";
}

define(function (require) {    //loads require.js and incorporates snowball package
       var Snowball = require ('snowball');
   });

var Stem = function(binLang) {
       var Stemmer = new Snowball(binLang);
       return function(word) {
       Stemmer.setCurrent(word);
       Stemmer.stem();
       return Stemmer.getCurrent();
       }
     };
     function mythri(binLang, word){
     console.log(new Stem(binLang)(word));
     stemsArr.push(new Stem(binLang)(word));
       
}

function finalTypes()   //checks whether the new types entered are correct or wrong
{
       var finalInput=document.getElementById("finaltext").value;
       if(finalInput==global3)
       {
              document.getElementById("finaltext").style.backgroundColor = "green"; 
              document.getElementById("para6").innerHTML="Right Answer";
              document.getElementById("para6").style.color="green";   
       }
       else{
              document.getElementById("finaltext").style.backgroundColor = "red";
              document.getElementById("para6").innerHTML="Wrong Answer";
              document.getElementById("para6").style.color="red";
       }

}

     
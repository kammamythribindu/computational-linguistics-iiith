//declaring and initializing the corpus of sentences both english and hindi
var english=[["John ate an apple before afternoon",	"before afternoon John ate an apple", "John before afternoon ate an apple"],
            ["some students like to study In the night","at night some students like to study"],
            ["John and Mary went to church","Mary and John went to church"],
            ["John went to church after eating"	,"after eating John went to church","John after eating went to church"],
            ["did he go to market",	"he did go to market"],
            ["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
            ["John goes to the library and studies","John studies and goes to the library"],
            ["John ate an apple so did she","she ate an apple so did John"],
            ["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book",
            "after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book",
            "she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book",
            "after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
            ["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her	","yesterday I bought a book that I told her"]];
            
var hindi=[["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
           ["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
           ["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है",
            "मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम",
            "बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],
            ["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
            ["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया",	"बिल्लियों को मारकर सो गया कुत्ता",	"मारकर बिल्लियों को सो गया कुत्ता",	
            "कुत्ता सो गया बिल्लियों को मारकर",	"कुत्ता सो गया मारकर बिल्लियों को",	"सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
            ["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
            ["एक बड़ी सी किताब वहाँ है",	"एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब",
            "वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]];

 function dropfunc()   //executes after drop down selection
 {
        var x = document.getElementById("selectbox").value;    //retrives the selected value
        if(x=="English"||x=="Hindi")                           //checks the retrieved value
        {
        document.getElementById("para1").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
        document.getElementById("para2").innerHTML = "(select the buttons in proper order)";

        rand(x); 
        
        return true;
        }
        else
        {
         alert("Select Language");
         return false;
        }
      
}
var original=0; //acts as global variable
function myClear(){ //helps to clear all the data by equating the elements data dynamically to ""
  document.getElementById("more").innerHTML="";
  document.getElementById("myDIV").innerHTML="";
  document.getElementById("reform").innerHTML="";
  document.getElementById("para3").innerHTML ="";
  document.getElementById("para4").innerHTML ="";
  document.getElementById("correct").innerHTML ="";
  document.getElementById("result").innerHTML="";
  document.getElementById("finalbutton").innerHTML="";
  
  
  str1=[];
  count=0;
}
function rand(x){  //executes if selected option is either english or hindi
  var randomSentence;
  if(x=="English")
  {
     randomSentence = english[Math.floor(Math.random() * english.length)];  //random sentence is selected
     document.getElementById("corpus").innerHTML="";
     document.getElementById("corpus").style.display="none";
    // original.length=0;
     myClear();
    
  }
  else if(x=="Hindi")
  {
     randomSentence = hindi[Math.floor(Math.random() * hindi.length)];   //random sentence selected
     document.getElementById("corpus").innerHTML="";
     document.getElementById("corpus").style.display="none";
    // original.length=0;
     myClear();
  }
    console.log(randomSentence);            //prints output in console
    original=randomSentence;
    console.log(original);
    for(var w=0;w<original.length;w++)
    {
      document.getElementById("corpus").innerHTML+="<p>" + original[w]  + "</p>";
    }
    var random2 = randomSentence[0];
    console.log(random2);
    var last=random2.trim().split(" ");     //splitting the sentence and converting to array
    console.log(last);
    randWord(last);
    //console.log(last);
}

function randWord(last)                      //splitted array is passed 
{


      var ctr = last.length, temp, index;
    
      while (ctr > 0) {                      //the array is jumbled
          index = Math.floor(Math.random() * ctr);
    
          ctr--;
          temp = last[ctr];
          last[ctr] = last[index];
          last[index] = temp;
      }
      sru=last;
      for (var i = 0; i < last.length; i++)
      {                                       //printing all the jumbled words as buttons
        document.getElementById("more").innerHTML += "<button type='button' value='"+last[i]+"' id='"+i+"' >" + last[i]  + "</button>" + "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp";
      }     
}
var str1=[];
window.onload = myMain;

function myMain()
{
  document.getElementById("more").onclick = buton;

}

function buton(e)
{                                             //helps to know which button is clicked and makes it disappear
  if (e.target.tagName == 'BUTTON')
  {
    document.getElementById(e.target.id).style.display="none";
    var num=document.getElementById(e.target.id).value;
    var str=num;
    str1.push(str);
    console.log(str1);
  // console.log(num);
 // console.log(typeof(num));
    check(num);
  }
}
var count=0;  
 
function check(num)   
{
  
  var elements = document.getElementsByTagName("button");
  console.log(elements.length);
  var len=elements.length;
  document.getElementById("para3").innerHTML ="Formed Sentence"+"&nbsp;";
  document.getElementById("para4").innerHTML ="(after selecting words):";
  document.getElementById("reform").innerHTML="<input type='reset' value='Re-form the sentence' onclick='rearrange(sru)'>"; //reform button triggers here
  if(len!==0)                                 //all the words are printed as sentence by appending dynamically
  {
        var arr = document.createElement("P");
        var t = document.createTextNode(num);
        //var att = document.createAttribute("id");
        //att.value = "P"+m;
        //arr.setAttributeNode(att);
        arr.appendChild(t);
        document.getElementById("myDIV").appendChild(arr);
        var span = document.createElement("span");
        span.innerHTML = "&nbsp;"; 
        document.getElementById("myDIV").appendChild(span);
      
        count++;
        
  }
  console.log(sru.length);
  console.log(count);
  if(sru.length==count)
  {                                               //check correctness button triggers here
      document.getElementById("correct").innerHTML="<input type='submit' value='Check the correctness of this sentence' onclick='myFunction(original)'>";  
  }
}
function rearrange(sru)                            //executes when reform button clicked 
{
  myClear();
  document.getElementById("corpus").style.display="none";
  for (var i = 0; i < sru.length; i++)
  {
    document.getElementById("more").innerHTML += "<button type='button' value='"+sru[i]+"' id='"+i+"' >" + sru[i]  + "</button>" + "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp";
  }
 
}
function myFunction(original)
{                                      //used completely for checking the correctness of sentence 
  var userString = str1.join(" ");
  console.log(userString);
  var flag=0;
  for(var k=0;k<original.length;k++)
  {
    if(original[k]==userString)
    {
      flag=1;
      break;
    }
  }
  if(flag==1)
  {
    document.getElementById("result").innerHTML="Right answer!!!";
    document.getElementById("result").style.color="green";
  }
  else
  {
    document.getElementById("result").innerHTML="Wrong answer!!!";
    document.getElementById("result").style.color="red";
    document.getElementById("corpus").style.display="none";
    document.getElementById("finalbutton").innerHTML="<input type='submit' id='res' value='Get Correct Sentence'  onclick='hideShow()'>";
  }
}
function hideShow()
{                                                     //hide button appears and corpus of sentences appear
  document.getElementById("finalbutton").innerHTML="";
  document.getElementById("corpus").style.display="block";
  document.getElementById("finalbutton").innerHTML="<input type='submit'  value='Hide the correct Sentence'  onclick='mythri()'>";
 
}
function mythri()
{                                                      //get answers button appears and corpus becomes hidden
  document.getElementById("finalbutton").innerHTML="";
  document.getElementById("corpus").style.display="none";
  document.getElementById("finalbutton").innerHTML="<input type='submit'  value='Get Answers'  onclick='hideShow()'>";
}
  
  



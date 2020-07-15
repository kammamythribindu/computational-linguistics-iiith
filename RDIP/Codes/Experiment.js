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

 function dropfunc()
 {
        var x = document.getElementById("selectbox").value;
        if(x=="English"||x=="Hindi")
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
function rand(x){
  var randomSentence;
  if(x=="English"){
     randomSentence = english[Math.floor(Math.random() * english.length)];
     document.getElementById("more").innerHTML="";
     document.getElementById("myDIV").innerHTML="";
     document.getElementById("reform").innerHTML="";
     document.getElementById("para3").innerHTML ="";
     document.getElementById("para4").innerHTML ="";
     document.getElementById("correct").innerHTML ="";
    
  }
  else if(x=="Hindi"){
     randomSentence = hindi[Math.floor(Math.random() * hindi.length)];
     document.getElementById("more").innerHTML="";
     document.getElementById("myDIV").innerHTML="";
     document.getElementById("reform").innerHTML="";
     document.getElementById("para3").innerHTML ="";
     document.getElementById("para4").innerHTML ="";
     document.getElementById("correct").innerHTML ="";
  }


    console.log(randomSentence);
    var random2 = randomSentence[0];
    console.log(random2);
    
    var last=random2.trim().split(" ");
    
    console.log(last);
    randWord(last);
    //console.log(last);
}

function randWord(last)
{


      var ctr = last.length, temp, index;
    
      while (ctr > 0) {
          index = Math.floor(Math.random() * ctr);
    
          ctr--;
          temp = last[ctr];
          last[ctr] = last[index];
          last[index] = temp;
      }
        sru=last;
        for (var i = 0; i < last.length; i++) {
        document.getElementById("more").innerHTML += "<button type='button' value='"+last[i]+"' id='"+i+"' >" + last[i]  + "</button>" + "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp";
      }
    
     
     
     
}
var str1=[];
window.onload = myMain;

function myMain() {
  document.getElementById("more").onclick = buton;

}

function buton(e) {
  if (e.target.tagName == 'BUTTON') {
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
 // m=1; 
function check(num)
{
  //var str=num;
  var elements = document.getElementsByTagName("button");
 console.log(elements.length);
 var len=elements.length;
  document.getElementById("para3").innerHTML ="Formed Sentence";
  document.getElementById("para4").innerHTML ="(after selecting words)";
  document.getElementById("reform").innerHTML="<input type='reset' value='Re-form the sentence' onclick='rearrange(sru)'>";
   if(len!==0)
   {
        var arr = document.createElement("P");
        var t = document.createTextNode(num);
        //var att = document.createAttribute("id");
        //att.value = "P"+m;
        //arr.setAttributeNode(att);
        arr.appendChild(t);
        document.getElementById("myDIV").appendChild(arr);
        var span = document.createElement("span");
        span.innerHTML = "&nbsp;&nbsp;"; 
        document.getElementById("myDIV").appendChild(span);
       // len--;
        count++;
        //m++;
    }
    
      
     


   // console.log(len);
    //console.log(count);
    if(sru.length==count){
      document.getElementById("correct").innerHTML="<input type='submit' value='Check the correctness of this sentence' onclick='myFunction()'>";
      
      
    }
  

       

       
      
}
function rearrange(sru)
{
  document.getElementById("myDIV").innerHTML="";
  document.getElementById("para3").innerHTML ="";
  document.getElementById("para4").innerHTML ="";
  document.getElementById("reform").innerHTML ="";
  document.getElementById("more").innerHTML ="";
  document.getElementById("correct").innerHTML ="";
  str1=[];
  count=0;
  
  for (var i = 0; i < sru.length; i++) {
    document.getElementById("more").innerHTML += "<button type='button' value='"+sru[i]+"' id='"+i+"' >" + sru[i]  + "</button>" + "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp";
  }
 
}
function myFunction(){
  var userString = str1.join(" ");
  console.log(userString);
  }




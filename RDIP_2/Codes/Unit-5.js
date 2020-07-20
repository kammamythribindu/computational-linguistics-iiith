var english=[['The child liked the chocolate.'],['She was stopped by the bravest knight.'],['Mary baked a cake for his birthday'],['She decorated the cake carefully'],['Mary wore a dress with polka dots.']];
var hindi=[['राम ने सीता के लिए फल तोड़ा।'],['छोटे बच्चे पाठशाला जल्दी आयेंगे।'],['मेहनत का फल मीठा होता है।'],['वाह! वह खूबसूरत है।'],['पेड़ से पत्ते गिर गए।']];

function dropfuncLang()   //executes after drop down selection
{
       var x = document.getElementById("LangSelect").value;    //retrives the selected value
       if(x=="English")                           //checks the retrieved value
       {
           document.getElementById("para1").innerHTML ="";
           document.getElementById("myTab").innerHTML="";
           document.getElementById("SentSelect").value="---Select a sentence---";
            document.getElementById("dropdownSent").style.visibility="visible";
            document.getElementById("SentSelect").style.width="300px";
             document.getElementById("S1").innerHTML=english[0];
             document.getElementById("S2").innerHTML=english[1];
             document.getElementById("S3").innerHTML=english[2];
             document.getElementById("S4").innerHTML=english[3];
             document.getElementById("S5").innerHTML=english[4];
             return true;
        }
       else if(x=="Hindi")
        {
            document.getElementById("para1").innerHTML ="";
            document.getElementById("myTab").innerHTML="";
           document.getElementById("SentSelect").value="---Select a sentence---";
            document.getElementById("dropdownSent").style.visibility="visible";
            document.getElementById("SentSelect").style.width="230px";
            document.getElementById("S1").innerHTML=hindi[0];
            document.getElementById("S2").innerHTML=hindi[1];
            document.getElementById("S3").innerHTML=hindi[2];
            document.getElementById("S4").innerHTML=hindi[3];
            document.getElementById("S5").innerHTML=hindi[4];
            return true;

         }
       else
       {
        alert("Select Language");
        return false;
       }
     
}
function dropfuncSent()
{
    var y=document.getElementById("SentSelect").value;
    console.log(y);
    if(y=='---Select a sentence---')
    {
        alert("Select a sentence");
        return false;
    }
    else
    {      
           if(y==english[0]||y==english[1]||y==english[2]||y==english[3]||y==english[4]){
           document.getElementById("para1").innerHTML = "Select the POS tag for corresponding words";
           y=y.trim().split(' ');
           console.log(y);
           document.getElementById("myTab").innerHTML = "<th>LEXICON</th><th>POS</th><th></th><th></th>";
           for(var i=0;i<y.length;i++){
           document.getElementById("myTab").innerHTML += "<tr id='"+i+"' ><td style='width:70px;'>"+y[i]+"</td><td class='col-md-4' style='width:100px;'><div class='dropdown'><select class='dropdown-menu' style='width:100px;'><option>Noun</option><option>Pronoun</option><option>Verb</option><option>Adjective</option><option>Adverb</option><option>Determiner</option><option>Preposition</option><option>Conjunction</option><option>Interjection</option></select></div></td><td></td><td></td></tr>";
          
            }
        }
        else if(y==hindi[0]||y==hindi[1]||y==hindi[2]||y==hindi[3]||y==hindi[4])
        {
            document.getElementById("para1").innerHTML = "Select the POS tag for corresponding words";
            y=y.trim().split(' ');
           console.log(y);
           document.getElementById("myTab").innerHTML = "<th>LEXICON</th><th>POS</th><th></th><th></th>";
           for(var i=0;i<y.length;i++){
           document.getElementById("myTab").innerHTML += "<tr id='"+i+"' ><td style='width:70px;'>"+y[i]+"</td><td class='col-md-4' style='width:100px;'><div class='dropdown'><select class='dropdown-menu' style='width:100px;'><option>Noun</option><option>Pronoun</option><option>Verb</option><option>Adjective</option><option>Adverb</option><option>Postposition</option><option>Conjunction</option><option>Interjection</option></select></div></td><td></td><td></td></tr>";
          
            }
        }
    }
}     

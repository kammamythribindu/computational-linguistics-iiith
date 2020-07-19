var english=[['The child liked the chocolate.'],['She was stopped by the bravest knight.'],['Mary baked a cake for his birthday'],['She decorated the cake carefully'],['Mary wore a dress with polka dots.']];
var hindi=[['राम ने सीता के लिए फल तोड़ा।'],['छोटे बच्चे पाठशाला जल्दी आयेंगे।'],['मेहनत का फल मीठा होता है।'],['वाह! वह खूबसूरत है।'],['पेड़ से पत्ते गिर गए।']];

function dropfuncLang()   //executes after drop down selection
{
       var x = document.getElementById("LangSelect").value;    //retrives the selected value
       if(x=="English")                           //checks the retrieved value
       {
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
    y=document.getElementById("SentSelect").value;
    if(y=='---Select a sentence---')
    {
        alert("Select a sentence");
        return false;
    }
}
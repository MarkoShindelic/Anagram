

function anagramChecker(){
    
    let str1 = document.getElementById("text-one").value;
    let str2 = document.getElementById("text-two").value;
    let result1 = str1.toLowerCase(str1).split("").sort().toString().replace(/[^a-z0-9šđčćžа-я]/g, "");
    let result2 = str2.toLowerCase(str2).split("").sort().toString().replace(/[^a-z0-9šđčćžа-я]/g, "");
  
    
    if(str1 === ""){

        document.getElementById("output").innerText = "Please enter the first value.";
        
    }
    else if (str2 === ""){
        document.getElementById("output").innerText = "Please enter the second value.";
    }
    else if(result1 === result2){
        document.getElementById("output").innerText = "They are anagrams!";
    }
    else {
        document.getElementById("output").innerText = "They are not anagrams.";
    }
  }

function clear(){
    document.getElementById("text-one").value = "";
    document.getElementById("text-two").value = "";
    document.getElementById("output").innerText = "Your result will be shown here.";
}

  document.getElementById("check-btn").addEventListener("click", function(){anagramChecker()});

  document.getElementById("clear-btn").addEventListener("click", function(){clear()})



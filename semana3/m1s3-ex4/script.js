
// function showHide(id){
//   if(document.getElementById(id).style.display == 'block'){
//     document.getElementById(id).style.display = 'none';
//   }else{
//     document.getElementById(id).style.display = 'block';
//   }
  
  
// }

function showHide(id){
  if(document.getElementById){
    var divId = document.getElementById(id);
    var hiddenDiv = document.getElementsByClassName("hidden");
    
    for(var i=0;i< hiddenDiv.length; i++){
      hiddenDiv[i].style.display = "none";
    }
    divId.style.display = "block";
  }
  return false;
}

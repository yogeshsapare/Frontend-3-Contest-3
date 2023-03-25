let btn=document.querySelector('.click');
let map=document.getElementById('map');
let removebtn=document.querySelector('.removebtn');
let pos=false;
function getLocation() {
    if (navigator.geolocation) {
        if(localStorage.getItem('lat')||localStorage.getItem('long')){
            pos=false;
            showPosition(pos);
        }
        else{
            pos=true;
             navigator.geolocation.getCurrentPosition(showPosition);

        }
           
    } else {
      map.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
   if(!pos){
   map.innerHTML="<iframe src='https://maps.google.com/maps?q="+localStorage.getItem('lat')+","+ localStorage.getItem('long')+"&z=15&output=embed' width='80%' height='600' frameborder='0' style='border:0'></iframe>";
   }
   else{
    localStorage.setItem('lat',position.coords.latitude);
    localStorage.setItem('long',position.coords.longitude);
    map.innerHTML = "<iframe src='https://maps.google.com/maps?q="+position.coords.latitude+","+ position.coords.longitude+"&z=15&output=embed' width='80%' height='500' frameborder='0' style='border:0'></iframe>";
  }
  }
btn.addEventListener('click',getLocation);

function removelocation(){
    if(localStorage.getItem('lat')||localStorage.getItem('long')){
        localStorage.clear();
    }else{
        alert('No location in Local Storage');
    }
}
removebtn.addEventListener('click',removelocation);
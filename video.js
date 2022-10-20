import navbar from "/component.js";
document.getElementById("navbar").innerHTML = navbar();

const showVideo = () => {
  let data = JSON.parse(localStorage.getItem("clicked"));
  
  let {videoId}=data;

  let iframe=document.createElement('iframe');
  iframe.src=`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`
  iframe.width='100%';
  iframe.height='90%';
  iframe.setAttribute('allowfullscreen',true)

  document.getElementById('video_details').append(iframe)
};

const redirect = () =>{
  window.location.href='index.html'
}

window.onload = () => {
  document.getElementById('home').onclick=redirect;
  showVideo();
};

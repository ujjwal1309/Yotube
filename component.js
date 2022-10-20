function navbar() {
  return `<div>
    <i class="fa-solid fa-bars"></i>
    <img id="home" src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
        alt="">
</div>
<div>
    <div class="srch">
        <input type="text" placeholder=" Search " id="search">
        <i id="search_movies" class="fa-solid fa-magnifying-glass"></i>
    </div>
    <i class="fa-solid fa-microphone"></i>
</div>
<div>
    <button><i class="fa-solid fa-circle-user"></i><span>SIGN IN</span></button>
</div>
`
}

export default navbar;

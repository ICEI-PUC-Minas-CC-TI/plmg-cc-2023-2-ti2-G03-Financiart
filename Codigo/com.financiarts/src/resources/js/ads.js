window.addEventListener("DOMContentLoaded", () => {
	if(getLogin() && !getLogin().isPremium) AddAds();
});


function AddAds(){
	const ads = `<div style="top: 69px;left: 0;position: fixed; width: calc((100vw - 1000px) / 2); text-align: center;">
		<div style="padding: 10px; margin: 30px; height: calc(100vh - 150px);border: 1px solid black;">
			RANDOM ADS
		</div>
	</div>
	<div style="top: 69px;right: 0;position: fixed; width: calc((100vw - 1000px) / 2); text-align: center;">
		<div style="padding: 10px; margin: 30px; height: calc(100vh - 150px);border: 1px solid black;">
			RANDOM ADS
		</div>
	</div>
	`
	document.getElementById("ads").innerHTML = ads;
}
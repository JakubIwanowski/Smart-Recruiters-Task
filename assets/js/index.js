document.addEventListener("DOMContentLoaded", () => {
	const dialog = document.querySelector(".modal");
	const showButton = document.querySelector(".gallery__btn");
	const closeButton = document.querySelector(".modal__cls");

	let player;

	window.onYouTubeIframeAPIReady = function () {
		player = new window.YT.Player("myplayer", {
			playerVars: {
				playsinline: 1,
			},
			videoId: "dQw4w9WgXcQ",
		});
	};
	showButton.addEventListener("click", () => {
		player.playVideo();
		dialog.showModal();
	});

	closeButton.addEventListener("click", () => {
		player.pauseVideo();
		dialog.close();
	});
});

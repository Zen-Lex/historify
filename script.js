//***************************************************************************************************/
//* Display the 50 last songs listened by a Spotify'user											*/
//* Each song can be play again, add to the queue or to the liked titles playlist					*/
//* The album's cover, name and the artist's name are liked to the corresponding Spotify's page		*/
//+ NOTE: The historic is not dynamic and must be refresh to see new songs appears					*/
//+ NOTE: To be added to the historic, a song must be listening at least 30 secondes				*/
//***************************************************************************************************/                                               
let token = "";
let authorize_url =
	"https://accounts.spotify.com/authorize?client_id=545cac6976dc48ce9471fd8db5aa73c2&response_type=token&redirect_uri=https://zen-lex.github.io/historify&scope=user-read-recently-played%20user-modify-playback-state%20user-library-read%20user-library-modify%20streaming";

window.addEventListener("load", function() {
	if (window.location.hash.length > 0) {
		document.cookie = `access_token=${window.location.hash.split('&')[0].slice(14)}; max-age=3600;`;
		window.location.href = window.location.origin + window.location.pathname;
	}

	RecentPlayed();
});

/*
 * Function: CheckCookie: Parse the cookie of the document and check for the access_token cookie
 *	para: none
 *	return: none
 */
function CheckCookie() {
	let cookies = new Map();

	document.cookie.split("; ").forEach((element) => {
		cookies.set(element.split("=")[0], element.split("=")[1]);
	});

	if (cookies.has("access_token")) {
		token = cookies.get("access_token");
	}
	else {
		this.window.location.href = authorize_url;
	}
}

/* 
 * Function: RecentPlayed: Get the 50 most recently played tracks
 *	para:	none
 *	return:	none
 */
function RecentPlayed() {
	CheckCookie();

	fetch(`https://api.spotify.com/v1/me/player/recently-played?limit=50&access_token=${token}`)
		.then(function (response) {
			if (response.ok) {
				return response.json();
			}
			throw new Error("An Error as occure"); 
		})
		.then(function (data) {
			//Array to store the track's ids
			let ids = [];

			//Parse the data to retrieve all ids
			for (let i = 0; i < data.items.length; i++) {
				ids.push(data.items[i].track.id);
			}

			fetch(`https://api.spotify.com/v1/me/tracks/contains?ids=${ids.join(",")}&access_token=${token}`)
				.then(function (response) {
					if (response.ok) {
						return response.json();
					}
					throw new Error("An Error as occure");
				})
				.then(function (likedArray) {
					//Get the HTLM Page's section and empty it
					let section = document.getElementsByTagName("section")[0];
					section.innerHTML = "";

					//Add an article for each track and display it's info
					for (let i = 0; i < data.items.length; i++) {
						AddTrack(section, data.items[i].track, i, likedArray[i]);
					}

					//Add Events on each article's button
					AddListener(data);

					//Display the native page button
					document.querySelectorAll(".pageBtn").forEach(function (button) {
						button.style.visibility = "visible";
					});
				})
				.catch(function (error) {
					console.log(error.message);
				});
		})
		.catch(function(error) {
            console.log(error.message);
        });
}

/* 
 * Function: AddToQueue: Add a track to the queue
 *	para:	uri: the spotify's uri of the track
 *	return:	none
 */
function AddToQueue(uri) {
	fetch(`https://api.spotify.com/v1/me/player/queue?uri=${uri}&access_token=${token}`, { "method": "POST" })
		.then(function (response) {
			if (response.ok) {
				return response.json();
			}
			throw new Error("An Error as occure"); 
		})
		.then (function () {
			
		})
		.catch(function (error) {
            console.log(error.message);
	    });
}

/* 
 * Function: Play: Play a track on the current device 
 *	para:	uri: the spotify's uri of the track
 *	return:	none
 +	Note: A Spotify player must be open already
 */
function Play(uri) {
	let init = {
		"method": "PUT",
		"body": JSON.stringify({"uris":[`${uri}`]})
	}

	fetch(`https://api.spotify.com/v1/me/player/play?access_token=${token}`, init)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error("An Error as occure");
        })
        .catch(function (error) {
            console.log(error.message);
        });
}

/* 
 * Function: Like: Like a track and add it the liked titles playlist
 *	para:	id: the track's id
 *	return:	none
 */
function Like(id, method) {
	fetch(`https://api.spotify.com/v1/me/tracks?ids=${id}&access_token=${token}`, {method: method})
		.then(function (response) {
			if (response.ok) {
				return response.json();
			}

			throw new Error("An Error as occure");
		})
		.catch(function (error) {
			console.log(error.message);
		});
}

/* 
 * Function: ClickMessage: Display a quick message whenever a track's button is clicked 
 *	para:	msg: the text message to display
 *			noTrack: the number of the track where to display the message (in order of the most recent to the oldest listening) 
 *	return:	none
 +	Note: The message is display even if the request failed
 */
function ClickMessage(msg, noTrack) {
	let p = document.getElementsByClassName("clickMsg")[noTrack];
  	p.innerText = msg;
	p.style.display = "block";
	setTimeout(function () {
    	p.style.display = "none";
  	}, 3000);
}

/* 
 * Function: AddTrack: Add a new article with a new track and its information
 *	para:	section: the section where the article will be added 
 *	return:	none
 +	Note: the article is added at the end of the section
 */
function AddTrack(section, track, noTrack, isLiked) {
	section.innerHTML += `<article>
	<div class="divMsg">
		<p class="clickMsg">Lorem Ipsum</p>
	</div>
	<div class="trackInfo">
		<p>
			<span class="title"><a href="${track.external_urls.spotify}">${track.name}</a></span><br>
			<a href="${track.artists[0].external_urls.spotify}">${track.artists[0].name}</a> - <span class="album">${track.album.name}</span>
		</p>
		<figure><a href="${track.external_urls.spotify}"><img src="${track.album.images[1].url}" alt="Cover of the album"></a></figure>
		<div class="button">
			<input type="image" alt="Play" class="play" src="img/play.svg">
			<input type="image" alt="Like" class="like" src=${isLiked ? "img/liked.svg" : "img/likeable.svg"}>
			<input type="image" alt="Add to queue" class="queue" src="img/plus.svg">			
		</div>
	</div>
	</article>`;
}

/* 
 * Function: AddListener: Add an EventListener on all track's button formerly created    
 *	para:	id: the track's id
 *	return:	none
 +	Note: The buttons are displayed when all EventListener are added
 */
function AddListener(data) {
	let likeSrc = "img/likeable.svg";
	let playBtn = document.getElementsByClassName("play");
	let likeBtn = document.getElementsByClassName("like");
	let queueBtn = document.getElementsByClassName("queue");

	for (let i = 0; i < playBtn.length; i++) {
		let uri = data.items[i].track.uri;
		let id = data.items[i].track.id;
		
		let img = document.getElementsByClassName("like")[i];

		playBtn[i].addEventListener("click", function () {
			console.log("Playing: ", uri);
			ClickMessage("Now Playing", i);
			Play(uri);
		});

		likeBtn[i].addEventListener("click", function () {
			if (img.getAttribute("src") === "img/likeable.svg") {
				console.log("Added to Liked Songs: ", id);
				ClickMessage("Added to Liked Songs", i);
				Like(id, "PUT");

				likeSrc = "img/likeable.svg";
			} else {
				console.log("Remove from Liked Songs: ", id);
				ClickMessage("Remove from Liked Songs", i);
				Like(id, "DELETE");

				likeSrc = "img/liked.svg";
			}

			//Udpate the like button src
			for (let j = 0; j < data.items.length; j++) {
				if (data.items[j].track.id === id) {
					document.getElementsByClassName("like")[j].setAttribute("src", likeSrc);
				}
			}
		});

		queueBtn[i].addEventListener("click", function () {
      		console.log("Add to queue: ", uri);
      		ClickMessage("Added to queue", i);
      		AddToQueue(uri);
		});
		document.querySelectorAll("div.button")[i].style.visibility = "visible";
	}
}

/* 
 * Function: Like: Get information about the current's user listening
 *	para:	none
 *	return:	none
 */
function CurrentPlay() {
	fetch(`https://api.spotify.com/v1/me/player?market=FR&access_token=${token}`)
		.then(function (response) {
			if (response.ok) {
				return response.json();
			}
			throw new Error("An Error as occure");
		})
		.then(function (data) {
			let track = data.item;
			let timer = data.item.duration_ms - data.progress_ms;
			console.log(timer);
			setTimeout(function () {
				console.log("Time Out");
			}, timer);
		});
}

/* 
 * Function: ScrollToTop: Scroll to the top of the page
 *	para:	none
 *	return:	none
 */
function ScrollToTop() {
	window.scroll({
		top: document.body.scrollTop,
		left: 0,
		behavior: "smooth"
	})
}

/* 
 * Function: Like: Start or toggle listening on a precise device
 *	para:	none
 *	return:	none
 */
function TogglePlay(deviceId) {
	let init = {
        "method": "PUT",
		"body": JSON.stringify({"device_ids":[`${deviceId}`]})
	}

	fetch(`https://api.spotify.com/v1/me/player?access_token=${token}`, init)
		.then(function(response) {
			if (response.ok) {
				return response.json();
			}
			throw new Error("An Error as occure");
		})
		.catch(function (error) {
			console.log(error.message);
		});
}

/* 
 * Function: GetDeviceId: Get the id of one or multiple devices
 *	para:	none
 *	return:	none
 */
function GetDeviceId() {
	fetch(`https://api.spotify.com/v1/me/player/devices?access_token=${token}`)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error("An Error as occure");
        })
        .then(function (data) {
			console.log(data.devices[0].id)
            //TogglePlay(data.devices[0].id);
        })
        .catch(function (error) {
            console.log(error.message);
        });
}

//* Author: JABK /// Creation: 05.01.2021 /// Last Update: 14.03.2022 /// Version: 1.2

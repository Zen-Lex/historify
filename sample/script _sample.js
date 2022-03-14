//***************************************************************************************************/
//* Display the 50 last songs listened by a Spotify'user											*/
//* Each song can be play again, add to the queue or to the liked titles playlist					*/
//* The album's cover, name and the artist's name are liked to the corresponding Spotify's page		*/
//+ NOTE: The historic is not dynamic and must be refresh to see new songs appears					*/
//+ NOTE: To be added to the historic, a song must be listening at least 30 secondes				*/
//***************************************************************************************************/ 
let data = {
	items: [
		{
			track: {
				album: {
					album_type: "single",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/2T5UkQVK6SUKoBvDJ0LMN9",
							},
							href: "https://api.spotify.com/v1/artists/2T5UkQVK6SUKoBvDJ0LMN9",
							id: "2T5UkQVK6SUKoBvDJ0LMN9",
							name: "Le Villejuif Underground",
							type: "artist",
							uri: "spotify:artist:2T5UkQVK6SUKoBvDJ0LMN9",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/1YIf7RLH7z9bxk70XxtqA2",
					},
					href: "https://api.spotify.com/v1/albums/1YIf7RLH7z9bxk70XxtqA2",
					id: "1YIf7RLH7z9bxk70XxtqA2",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2731992d17efbcabe877016226b",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e021992d17efbcabe877016226b",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048511992d17efbcabe877016226b",
							width: 64,
						},
					],
					name: "Heavy Black Matter",
					release_date: "2016-12-09",
					release_date_precision: "day",
					total_tracks: 4,
					type: "album",
					uri: "spotify:album:1YIf7RLH7z9bxk70XxtqA2",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/2T5UkQVK6SUKoBvDJ0LMN9",
						},
						href: "https://api.spotify.com/v1/artists/2T5UkQVK6SUKoBvDJ0LMN9",
						id: "2T5UkQVK6SUKoBvDJ0LMN9",
						name: "Le Villejuif Underground",
						type: "artist",
						uri: "spotify:artist:2T5UkQVK6SUKoBvDJ0LMN9",
					},
				],
				disc_number: 1,
				duration_ms: 216322,
				explicit: false,
				external_ids: {
					isrc: "FR0Q11700612",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/3jRKaFjP7QuH9v2GhX3xfT",
				},
				href: "https://api.spotify.com/v1/tracks/3jRKaFjP7QuH9v2GhX3xfT",
				id: "3jRKaFjP7QuH9v2GhX3xfT",
				is_local: false,
				is_playable: true,
				name: "Le Villejuif Underground",
				popularity: 29,
				preview_url: "https://p.scdn.co/mp3-preview/2129bdc3b62bbe0cbac0bbab51ccda98f787f84e?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 1,
				type: "track",
				uri: "spotify:track:3jRKaFjP7QuH9v2GhX3xfT",
			},
			played_at: "2022-03-14T14:14:10.183Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZEVXcF4fZc8ox9PV",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZEVXcF4fZc8ox9PV",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZEVXcF4fZc8ox9PV",
			},
		},
		{
			track: {
				album: {
					album_type: "single",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/21mKp7DqtSNHhCAU2ugvUw",
							},
							href: "https://api.spotify.com/v1/artists/21mKp7DqtSNHhCAU2ugvUw",
							id: "21mKp7DqtSNHhCAU2ugvUw",
							name: "ODESZA",
							type: "artist",
							uri: "spotify:artist:21mKp7DqtSNHhCAU2ugvUw",
						},
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/3NP4jJcW3R6qO6rbtnH0wn",
							},
							href: "https://api.spotify.com/v1/artists/3NP4jJcW3R6qO6rbtnH0wn",
							id: "3NP4jJcW3R6qO6rbtnH0wn",
							name: "MARO",
							type: "artist",
							uri: "spotify:artist:3NP4jJcW3R6qO6rbtnH0wn",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/2Yf834YZ8vDNN7mcjJ0FEo",
					},
					href: "https://api.spotify.com/v1/albums/2Yf834YZ8vDNN7mcjJ0FEo",
					id: "2Yf834YZ8vDNN7mcjJ0FEo",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2736686d3aa49bfc9a87faf6b6a",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e026686d3aa49bfc9a87faf6b6a",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048516686d3aa49bfc9a87faf6b6a",
							width: 64,
						},
					],
					name: "Better Now (feat. MARO)",
					release_date: "2022-03-02",
					release_date_precision: "day",
					total_tracks: 2,
					type: "album",
					uri: "spotify:album:2Yf834YZ8vDNN7mcjJ0FEo",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/21mKp7DqtSNHhCAU2ugvUw",
						},
						href: "https://api.spotify.com/v1/artists/21mKp7DqtSNHhCAU2ugvUw",
						id: "21mKp7DqtSNHhCAU2ugvUw",
						name: "ODESZA",
						type: "artist",
						uri: "spotify:artist:21mKp7DqtSNHhCAU2ugvUw",
					},
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/3NP4jJcW3R6qO6rbtnH0wn",
						},
						href: "https://api.spotify.com/v1/artists/3NP4jJcW3R6qO6rbtnH0wn",
						id: "3NP4jJcW3R6qO6rbtnH0wn",
						name: "MARO",
						type: "artist",
						uri: "spotify:artist:3NP4jJcW3R6qO6rbtnH0wn",
					},
				],
				disc_number: 1,
				duration_ms: 196196,
				explicit: false,
				external_ids: {
					isrc: "GBCFB2200045",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/1iSuktdIdWrdfq0slQ4auO",
				},
				href: "https://api.spotify.com/v1/tracks/1iSuktdIdWrdfq0slQ4auO",
				id: "1iSuktdIdWrdfq0slQ4auO",
				is_local: false,
				is_playable: true,
				name: "Better Now (feat. MARO)",
				popularity: 69,
				preview_url: "https://p.scdn.co/mp3-preview/dc54be02693a95f4580854d2ac8814c5a599909e?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 1,
				type: "track",
				uri: "spotify:track:1iSuktdIdWrdfq0slQ4auO",
			},
			played_at: "2022-03-14T14:10:04.272Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZEVXbbZxUfCiSyIr",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZEVXbbZxUfCiSyIr",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZEVXbbZxUfCiSyIr",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/54QMjE4toDfiCryzYWCpXX",
							},
							href: "https://api.spotify.com/v1/artists/54QMjE4toDfiCryzYWCpXX",
							id: "54QMjE4toDfiCryzYWCpXX",
							name: "Metronomy",
							type: "artist",
							uri: "spotify:artist:54QMjE4toDfiCryzYWCpXX",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/5CHaXCMeag2aPjo72Ib8Xj",
					},
					href: "https://api.spotify.com/v1/albums/5CHaXCMeag2aPjo72Ib8Xj",
					id: "5CHaXCMeag2aPjo72Ib8Xj",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27321de308b12c39e7e426c41cc",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0221de308b12c39e7e426c41cc",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485121de308b12c39e7e426c41cc",
							width: 64,
						},
					],
					name: "Small World",
					release_date: "2022-02-18",
					release_date_precision: "day",
					total_tracks: 9,
					type: "album",
					uri: "spotify:album:5CHaXCMeag2aPjo72Ib8Xj",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/54QMjE4toDfiCryzYWCpXX",
						},
						href: "https://api.spotify.com/v1/artists/54QMjE4toDfiCryzYWCpXX",
						id: "54QMjE4toDfiCryzYWCpXX",
						name: "Metronomy",
						type: "artist",
						uri: "spotify:artist:54QMjE4toDfiCryzYWCpXX",
					},
				],
				disc_number: 1,
				duration_ms: 224133,
				explicit: false,
				external_ids: {
					isrc: "GBMVH2100660",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/6JJ3UK1YfxO26iEiMWUHHj",
				},
				href: "https://api.spotify.com/v1/tracks/6JJ3UK1YfxO26iEiMWUHHj",
				id: "6JJ3UK1YfxO26iEiMWUHHj",
				is_local: false,
				is_playable: true,
				name: "Right on time",
				popularity: 65,
				preview_url: "https://p.scdn.co/mp3-preview/27b62015884bc0a3ea6bee7745d65f7837ae57dd?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 7,
				type: "track",
				uri: "spotify:track:6JJ3UK1YfxO26iEiMWUHHj",
			},
			played_at: "2022-03-14T14:06:47.936Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZEVXbbZxUfCiSyIr",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZEVXbbZxUfCiSyIr",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZEVXbbZxUfCiSyIr",
			},
		},
		{
			track: {
				album: {
					album_type: "single",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/45yEuthJ9yq1rNXAOpBnqM",
							},
							href: "https://api.spotify.com/v1/artists/45yEuthJ9yq1rNXAOpBnqM",
							id: "45yEuthJ9yq1rNXAOpBnqM",
							name: "Polo & Pan",
							type: "artist",
							uri: "spotify:artist:45yEuthJ9yq1rNXAOpBnqM",
						},
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/2V5xArcB3BGAHmwsK46tyU",
							},
							href: "https://api.spotify.com/v1/artists/2V5xArcB3BGAHmwsK46tyU",
							id: "2V5xArcB3BGAHmwsK46tyU",
							name: "Vladimir Cauchemar",
							type: "artist",
							uri: "spotify:artist:2V5xArcB3BGAHmwsK46tyU",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/7bXfmmRYdXaeIzaPgXKJBr",
					},
					href: "https://api.spotify.com/v1/albums/7bXfmmRYdXaeIzaPgXKJBr",
					id: "7bXfmmRYdXaeIzaPgXKJBr",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2730e3bf350ed51a86f9ce5750b",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e020e3bf350ed51a86f9ce5750b",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048510e3bf350ed51a86f9ce5750b",
							width: 64,
						},
					],
					name: "Magic (Vladimir Cauchemar Remix)",
					release_date: "2022-02-17",
					release_date_precision: "day",
					total_tracks: 1,
					type: "album",
					uri: "spotify:album:7bXfmmRYdXaeIzaPgXKJBr",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/45yEuthJ9yq1rNXAOpBnqM",
						},
						href: "https://api.spotify.com/v1/artists/45yEuthJ9yq1rNXAOpBnqM",
						id: "45yEuthJ9yq1rNXAOpBnqM",
						name: "Polo & Pan",
						type: "artist",
						uri: "spotify:artist:45yEuthJ9yq1rNXAOpBnqM",
					},
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/2V5xArcB3BGAHmwsK46tyU",
						},
						href: "https://api.spotify.com/v1/artists/2V5xArcB3BGAHmwsK46tyU",
						id: "2V5xArcB3BGAHmwsK46tyU",
						name: "Vladimir Cauchemar",
						type: "artist",
						uri: "spotify:artist:2V5xArcB3BGAHmwsK46tyU",
					},
				],
				disc_number: 1,
				duration_ms: 188177,
				explicit: false,
				external_ids: {
					isrc: "FRPDG2100370",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/3Kf1HkFsY25JveYio5h80s",
				},
				href: "https://api.spotify.com/v1/tracks/3Kf1HkFsY25JveYio5h80s",
				id: "3Kf1HkFsY25JveYio5h80s",
				is_local: false,
				is_playable: true,
				name: "Magic - Vladimir Cauchemar remix",
				popularity: 55,
				preview_url: "https://p.scdn.co/mp3-preview/6f866bc8e54d9980e7ef7fc11685b993ab85f660?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 1,
				type: "track",
				uri: "spotify:track:3Kf1HkFsY25JveYio5h80s",
			},
			played_at: "2022-03-14T14:02:35.426Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZEVXbbZxUfCiSyIr",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZEVXbbZxUfCiSyIr",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZEVXbbZxUfCiSyIr",
			},
		},
		{
			track: {
				album: {
					album_type: "single",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/1hzfo8twXdOegF3xireCYs",
							},
							href: "https://api.spotify.com/v1/artists/1hzfo8twXdOegF3xireCYs",
							id: "1hzfo8twXdOegF3xireCYs",
							name: "Milky Chance",
							type: "artist",
							uri: "spotify:artist:1hzfo8twXdOegF3xireCYs",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/4wW0gNfB05ae2hUqr22XWL",
					},
					href: "https://api.spotify.com/v1/albums/4wW0gNfB05ae2hUqr22XWL",
					id: "4wW0gNfB05ae2hUqr22XWL",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273e7b4edb81735e39370600c50",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02e7b4edb81735e39370600c50",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851e7b4edb81735e39370600c50",
							width: 64,
						},
					],
					name: "Synchronize",
					release_date: "2022-03-09",
					release_date_precision: "day",
					total_tracks: 1,
					type: "album",
					uri: "spotify:album:4wW0gNfB05ae2hUqr22XWL",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/1hzfo8twXdOegF3xireCYs",
						},
						href: "https://api.spotify.com/v1/artists/1hzfo8twXdOegF3xireCYs",
						id: "1hzfo8twXdOegF3xireCYs",
						name: "Milky Chance",
						type: "artist",
						uri: "spotify:artist:1hzfo8twXdOegF3xireCYs",
					},
				],
				disc_number: 1,
				duration_ms: 164576,
				explicit: false,
				external_ids: {
					isrc: "DEVP22200014",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/6Ql7rNuoP90aIdgwQkPYBP",
				},
				href: "https://api.spotify.com/v1/tracks/6Ql7rNuoP90aIdgwQkPYBP",
				id: "6Ql7rNuoP90aIdgwQkPYBP",
				is_local: false,
				is_playable: true,
				name: "Synchronize",
				popularity: 65,
				preview_url: "https://p.scdn.co/mp3-preview/a78fca976c1b047052b65ae9037def8a1cdf2ee8?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 1,
				type: "track",
				uri: "spotify:track:6Ql7rNuoP90aIdgwQkPYBP",
			},
			played_at: "2022-03-14T13:59:26.235Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZEVXbbZxUfCiSyIr",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZEVXbbZxUfCiSyIr",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZEVXbbZxUfCiSyIr",
			},
		},
		{
			track: {
				album: {
					album_type: "single",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/6QzMY3tnu0m56eKUnr4uCF",
							},
							href: "https://api.spotify.com/v1/artists/6QzMY3tnu0m56eKUnr4uCF",
							id: "6QzMY3tnu0m56eKUnr4uCF",
							name: "Alfie Templeman",
							type: "artist",
							uri: "spotify:artist:6QzMY3tnu0m56eKUnr4uCF",
						},
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/3SjCoFoeT6143oeR3GUWCZ",
							},
							href: "https://api.spotify.com/v1/artists/3SjCoFoeT6143oeR3GUWCZ",
							id: "3SjCoFoeT6143oeR3GUWCZ",
							name: "Residential",
							type: "artist",
							uri: "spotify:artist:3SjCoFoeT6143oeR3GUWCZ",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/2dUyjZ9JkVCmoYxxmowXes",
					},
					href: "https://api.spotify.com/v1/albums/2dUyjZ9JkVCmoYxxmowXes",
					id: "2dUyjZ9JkVCmoYxxmowXes",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2731aa77e0851d8bccb05dacb8f",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e021aa77e0851d8bccb05dacb8f",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048511aa77e0851d8bccb05dacb8f",
							width: 64,
						},
					],
					name: "Broken (Residential Remix)",
					release_date: "2022-03-11",
					release_date_precision: "day",
					total_tracks: 2,
					type: "album",
					uri: "spotify:album:2dUyjZ9JkVCmoYxxmowXes",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/6QzMY3tnu0m56eKUnr4uCF",
						},
						href: "https://api.spotify.com/v1/artists/6QzMY3tnu0m56eKUnr4uCF",
						id: "6QzMY3tnu0m56eKUnr4uCF",
						name: "Alfie Templeman",
						type: "artist",
						uri: "spotify:artist:6QzMY3tnu0m56eKUnr4uCF",
					},
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/3SjCoFoeT6143oeR3GUWCZ",
						},
						href: "https://api.spotify.com/v1/artists/3SjCoFoeT6143oeR3GUWCZ",
						id: "3SjCoFoeT6143oeR3GUWCZ",
						name: "Residential",
						type: "artist",
						uri: "spotify:artist:3SjCoFoeT6143oeR3GUWCZ",
					},
				],
				disc_number: 1,
				duration_ms: 151443,
				explicit: false,
				external_ids: {
					isrc: "GBKPL2287990",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/14ILTFjv3lng7oU1VMpbf4",
				},
				href: "https://api.spotify.com/v1/tracks/14ILTFjv3lng7oU1VMpbf4",
				id: "14ILTFjv3lng7oU1VMpbf4",
				is_local: false,
				is_playable: true,
				name: "Broken - Residential Remix",
				popularity: 44,
				preview_url: "https://p.scdn.co/mp3-preview/6d87a099f3a2a3edb7e9aca7c5d853cb8a319847?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 1,
				type: "track",
				uri: "spotify:track:14ILTFjv3lng7oU1VMpbf4",
			},
			played_at: "2022-03-14T13:56:08.495Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZEVXbbZxUfCiSyIr",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZEVXbbZxUfCiSyIr",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZEVXbbZxUfCiSyIr",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/5zhn89Em2jWUUWdpcLO3YL",
							},
							href: "https://api.spotify.com/v1/artists/5zhn89Em2jWUUWdpcLO3YL",
							id: "5zhn89Em2jWUUWdpcLO3YL",
							name: "Sea Power",
							type: "artist",
							uri: "spotify:artist:5zhn89Em2jWUUWdpcLO3YL",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/2MrqGKcS9kWgY7UTbv13TK",
					},
					href: "https://api.spotify.com/v1/albums/2MrqGKcS9kWgY7UTbv13TK",
					id: "2MrqGKcS9kWgY7UTbv13TK",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2735756154e1fe9788e404a7e47",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e025756154e1fe9788e404a7e47",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048515756154e1fe9788e404a7e47",
							width: 64,
						},
					],
					name: "From the Sea to the Land Beyond",
					release_date: "2013-12-02",
					release_date_precision: "day",
					total_tracks: 18,
					type: "album",
					uri: "spotify:album:2MrqGKcS9kWgY7UTbv13TK",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/5zhn89Em2jWUUWdpcLO3YL",
						},
						href: "https://api.spotify.com/v1/artists/5zhn89Em2jWUUWdpcLO3YL",
						id: "5zhn89Em2jWUUWdpcLO3YL",
						name: "Sea Power",
						type: "artist",
						uri: "spotify:artist:5zhn89Em2jWUUWdpcLO3YL",
					},
				],
				disc_number: 1,
				duration_ms: 413476,
				explicit: false,
				external_ids: {
					isrc: "GBCVZ1303450",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/3nVr75rx4FFrXGkuwU5CCg",
				},
				href: "https://api.spotify.com/v1/tracks/3nVr75rx4FFrXGkuwU5CCg",
				id: "3nVr75rx4FFrXGkuwU5CCg",
				is_local: false,
				is_playable: true,
				name: "Red Rock Riviera",
				popularity: 49,
				preview_url: "https://p.scdn.co/mp3-preview/0efaa19869934f21849c9b27105ac187549f5f26?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 11,
				type: "track",
				uri: "spotify:track:3nVr75rx4FFrXGkuwU5CCg",
			},
			played_at: "2022-03-14T13:51:15.073Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZEVXcF4fZc8ox9PV",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZEVXcF4fZc8ox9PV",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZEVXcF4fZc8ox9PV",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb",
							},
							href: "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb",
							id: "4Z8W4fKeB5YxbusRsdQVPb",
							name: "Radiohead",
							type: "artist",
							uri: "spotify:artist:4Z8W4fKeB5YxbusRsdQVPb",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/5vkqYmiPBYLaalcmjujWxK",
					},
					href: "https://api.spotify.com/v1/albums/5vkqYmiPBYLaalcmjujWxK",
					id: "5vkqYmiPBYLaalcmjujWxK",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273de3c04b5fc750b68899b20a9",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02de3c04b5fc750b68899b20a9",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851de3c04b5fc750b68899b20a9",
							width: 64,
						},
					],
					name: "In Rainbows",
					release_date: "2007-12-28",
					release_date_precision: "day",
					total_tracks: 10,
					type: "album",
					uri: "spotify:album:5vkqYmiPBYLaalcmjujWxK",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb",
						},
						href: "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb",
						id: "4Z8W4fKeB5YxbusRsdQVPb",
						name: "Radiohead",
						type: "artist",
						uri: "spotify:artist:4Z8W4fKeB5YxbusRsdQVPb",
					},
				],
				disc_number: 1,
				duration_ms: 290213,
				explicit: false,
				external_ids: {
					isrc: "GBSTK0700007",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/02ppMPbg1OtEdHgoPqoqju",
				},
				href: "https://api.spotify.com/v1/tracks/02ppMPbg1OtEdHgoPqoqju",
				id: "02ppMPbg1OtEdHgoPqoqju",
				is_local: false,
				is_playable: true,
				name: "Reckoner",
				popularity: 65,
				preview_url: "https://p.scdn.co/mp3-preview/da910851687cbf62644f93dfa97f183fc957c013?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 7,
				type: "track",
				uri: "spotify:track:02ppMPbg1OtEdHgoPqoqju",
			},
			played_at: "2022-03-14T13:44:31.488Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZEVXcF4fZc8ox9PV",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZEVXcF4fZc8ox9PV",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZEVXcF4fZc8ox9PV",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/7mdh9mziYyoyx5akHNGFte",
							},
							href: "https://api.spotify.com/v1/artists/7mdh9mziYyoyx5akHNGFte",
							id: "7mdh9mziYyoyx5akHNGFte",
							name: "Autumn",
							type: "artist",
							uri: "spotify:artist:7mdh9mziYyoyx5akHNGFte",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/71la4b5wxQnCc59LSyYOJ8",
					},
					href: "https://api.spotify.com/v1/albums/71la4b5wxQnCc59LSyYOJ8",
					id: "71la4b5wxQnCc59LSyYOJ8",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273916eed1168e5fba3cbe26ee9",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02916eed1168e5fba3cbe26ee9",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851916eed1168e5fba3cbe26ee9",
							width: 64,
						},
					],
					name: "Not Afraid to Die",
					release_date: "1982-04-20",
					release_date_precision: "day",
					total_tracks: 13,
					type: "album",
					uri: "spotify:album:71la4b5wxQnCc59LSyYOJ8",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/7mdh9mziYyoyx5akHNGFte",
						},
						href: "https://api.spotify.com/v1/artists/7mdh9mziYyoyx5akHNGFte",
						id: "7mdh9mziYyoyx5akHNGFte",
						name: "Autumn",
						type: "artist",
						uri: "spotify:artist:7mdh9mziYyoyx5akHNGFte",
					},
				],
				disc_number: 1,
				duration_ms: 277525,
				explicit: false,
				external_ids: {
					isrc: "BED338200053",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/5s7lnchcPIv5CVnzueSQND",
				},
				href: "https://api.spotify.com/v1/tracks/5s7lnchcPIv5CVnzueSQND",
				id: "5s7lnchcPIv5CVnzueSQND",
				is_local: false,
				is_playable: true,
				name: "Night In June",
				popularity: 38,
				preview_url: "https://p.scdn.co/mp3-preview/d5f4f9ea32fda8adbfc33041f03555e03f0bfd7e?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 4,
				type: "track",
				uri: "spotify:track:5s7lnchcPIv5CVnzueSQND",
			},
			played_at: "2022-03-14T13:39:41.267Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZEVXcF4fZc8ox9PV",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZEVXcF4fZc8ox9PV",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZEVXcF4fZc8ox9PV",
			},
		},
		{
			track: {
				album: {
					album_type: "single",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/2T5UkQVK6SUKoBvDJ0LMN9",
							},
							href: "https://api.spotify.com/v1/artists/2T5UkQVK6SUKoBvDJ0LMN9",
							id: "2T5UkQVK6SUKoBvDJ0LMN9",
							name: "Le Villejuif Underground",
							type: "artist",
							uri: "spotify:artist:2T5UkQVK6SUKoBvDJ0LMN9",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/1YIf7RLH7z9bxk70XxtqA2",
					},
					href: "https://api.spotify.com/v1/albums/1YIf7RLH7z9bxk70XxtqA2",
					id: "1YIf7RLH7z9bxk70XxtqA2",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2731992d17efbcabe877016226b",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e021992d17efbcabe877016226b",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048511992d17efbcabe877016226b",
							width: 64,
						},
					],
					name: "Heavy Black Matter",
					release_date: "2016-12-09",
					release_date_precision: "day",
					total_tracks: 4,
					type: "album",
					uri: "spotify:album:1YIf7RLH7z9bxk70XxtqA2",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/2T5UkQVK6SUKoBvDJ0LMN9",
						},
						href: "https://api.spotify.com/v1/artists/2T5UkQVK6SUKoBvDJ0LMN9",
						id: "2T5UkQVK6SUKoBvDJ0LMN9",
						name: "Le Villejuif Underground",
						type: "artist",
						uri: "spotify:artist:2T5UkQVK6SUKoBvDJ0LMN9",
					},
				],
				disc_number: 1,
				duration_ms: 216322,
				explicit: false,
				external_ids: {
					isrc: "FR0Q11700612",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/3jRKaFjP7QuH9v2GhX3xfT",
				},
				href: "https://api.spotify.com/v1/tracks/3jRKaFjP7QuH9v2GhX3xfT",
				id: "3jRKaFjP7QuH9v2GhX3xfT",
				is_local: false,
				is_playable: true,
				name: "Le Villejuif Underground",
				popularity: 29,
				preview_url: "https://p.scdn.co/mp3-preview/2129bdc3b62bbe0cbac0bbab51ccda98f787f84e?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 1,
				type: "track",
				uri: "spotify:track:3jRKaFjP7QuH9v2GhX3xfT",
			},
			played_at: "2022-03-14T13:33:46.732Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZEVXcF4fZc8ox9PV",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZEVXcF4fZc8ox9PV",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZEVXcF4fZc8ox9PV",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/08E1gIXEm5SDflPh1tGQ2Z",
							},
							href: "https://api.spotify.com/v1/artists/08E1gIXEm5SDflPh1tGQ2Z",
							id: "08E1gIXEm5SDflPh1tGQ2Z",
							name: "Avia",
							type: "artist",
							uri: "spotify:artist:08E1gIXEm5SDflPh1tGQ2Z",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/0oFO0MoXtishcM7VY7JrBt",
					},
					href: "https://api.spotify.com/v1/albums/0oFO0MoXtishcM7VY7JrBt",
					id: "0oFO0MoXtishcM7VY7JrBt",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27365012bca37edec6bd9ec4868",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0265012bca37edec6bd9ec4868",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485165012bca37edec6bd9ec4868",
							width: 64,
						},
					],
					name: "Inside Chanel (Original Motion Picture Soundtrack)",
					release_date: "2017-10-13",
					release_date_precision: "day",
					total_tracks: 16,
					type: "album",
					uri: "spotify:album:0oFO0MoXtishcM7VY7JrBt",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/08E1gIXEm5SDflPh1tGQ2Z",
						},
						href: "https://api.spotify.com/v1/artists/08E1gIXEm5SDflPh1tGQ2Z",
						id: "08E1gIXEm5SDflPh1tGQ2Z",
						name: "Avia",
						type: "artist",
						uri: "spotify:artist:08E1gIXEm5SDflPh1tGQ2Z",
					},
				],
				disc_number: 1,
				duration_ms: 274851,
				explicit: false,
				external_ids: {
					isrc: "FR8E71705600",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/4iETqt32WQpeACfWnqiEYm",
				},
				href: "https://api.spotify.com/v1/tracks/4iETqt32WQpeACfWnqiEYm",
				id: "4iETqt32WQpeACfWnqiEYm",
				is_local: false,
				is_playable: true,
				name: "Chanel and the Diamond",
				popularity: 35,
				preview_url: "https://p.scdn.co/mp3-preview/5d831b7ba984e87deabb164916b61c90b5b85924?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 2,
				type: "track",
				uri: "spotify:track:4iETqt32WQpeACfWnqiEYm",
			},
			played_at: "2022-03-14T13:30:09.911Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZEVXcF4fZc8ox9PV",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZEVXcF4fZc8ox9PV",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZEVXcF4fZc8ox9PV",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/3vqbidFsNlsip3IYGDzQkR",
							},
							href: "https://api.spotify.com/v1/artists/3vqbidFsNlsip3IYGDzQkR",
							id: "3vqbidFsNlsip3IYGDzQkR",
							name: "Kryzys",
							type: "artist",
							uri: "spotify:artist:3vqbidFsNlsip3IYGDzQkR",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/2D6tO279zNg6hOLruc9YQv",
					},
					href: "https://api.spotify.com/v1/albums/2D6tO279zNg6hOLruc9YQv",
					id: "2D6tO279zNg6hOLruc9YQv",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2738d4abd5373d19651e2ecdc2b",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e028d4abd5373d19651e2ecdc2b",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048518d4abd5373d19651e2ecdc2b",
							width: 64,
						},
					],
					name: "78-81",
					release_date: "2014-11-08",
					release_date_precision: "day",
					total_tracks: 25,
					type: "album",
					uri: "spotify:album:2D6tO279zNg6hOLruc9YQv",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/3vqbidFsNlsip3IYGDzQkR",
						},
						href: "https://api.spotify.com/v1/artists/3vqbidFsNlsip3IYGDzQkR",
						id: "3vqbidFsNlsip3IYGDzQkR",
						name: "Kryzys",
						type: "artist",
						uri: "spotify:artist:3vqbidFsNlsip3IYGDzQkR",
					},
				],
				disc_number: 2,
				duration_ms: 192880,
				explicit: false,
				external_ids: {
					isrc: "PLE951400564",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/29MjRtRMILzNLERm09L77m",
				},
				href: "https://api.spotify.com/v1/tracks/29MjRtRMILzNLERm09L77m",
				id: "29MjRtRMILzNLERm09L77m",
				is_local: false,
				is_playable: true,
				name: "Mam Dosc",
				popularity: 44,
				preview_url: "https://p.scdn.co/mp3-preview/8f55176270bfb080128220d9f33f4d3343acbd41?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 4,
				type: "track",
				uri: "spotify:track:29MjRtRMILzNLERm09L77m",
			},
			played_at: "2022-03-14T13:23:31.126Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZEVXcF4fZc8ox9PV",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZEVXcF4fZc8ox9PV",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZEVXcF4fZc8ox9PV",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/2ool5NLv8gVkYz20jGYbZo",
							},
							href: "https://api.spotify.com/v1/artists/2ool5NLv8gVkYz20jGYbZo",
							id: "2ool5NLv8gVkYz20jGYbZo",
							name: "Animali",
							type: "artist",
							uri: "spotify:artist:2ool5NLv8gVkYz20jGYbZo",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/5hoq18Ppj9garVPQFqGW7E",
					},
					href: "https://api.spotify.com/v1/albums/5hoq18Ppj9garVPQFqGW7E",
					id: "5hoq18Ppj9garVPQFqGW7E",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27320932634be7b7e698ac93825",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0220932634be7b7e698ac93825",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485120932634be7b7e698ac93825",
							width: 64,
						},
					],
					name: "Mary D. Kay",
					release_date: "2020-06-12",
					release_date_precision: "day",
					total_tracks: 8,
					type: "album",
					uri: "spotify:album:5hoq18Ppj9garVPQFqGW7E",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/2ool5NLv8gVkYz20jGYbZo",
						},
						href: "https://api.spotify.com/v1/artists/2ool5NLv8gVkYz20jGYbZo",
						id: "2ool5NLv8gVkYz20jGYbZo",
						name: "Animali",
						type: "artist",
						uri: "spotify:artist:2ool5NLv8gVkYz20jGYbZo",
					},
				],
				disc_number: 1,
				duration_ms: 364861,
				explicit: false,
				external_ids: {
					isrc: "FR9W11926356",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/2IQQRB3MSdWM3K8CUBtuCf",
				},
				href: "https://api.spotify.com/v1/tracks/2IQQRB3MSdWM3K8CUBtuCf",
				id: "2IQQRB3MSdWM3K8CUBtuCf",
				is_local: false,
				is_playable: true,
				name: "Genetic Bomb",
				popularity: 38,
				preview_url: "https://p.scdn.co/mp3-preview/bc5045f02054935b98dcebbaa44dd5aa5d9567c7?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 2,
				type: "track",
				uri: "spotify:track:2IQQRB3MSdWM3K8CUBtuCf",
			},
			played_at: "2022-03-14T13:20:17.887Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZEVXcF4fZc8ox9PV",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZEVXcF4fZc8ox9PV",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZEVXcF4fZc8ox9PV",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/3VcO8Z1ws3siQr2XTZBr4e",
							},
							href: "https://api.spotify.com/v1/artists/3VcO8Z1ws3siQr2XTZBr4e",
							id: "3VcO8Z1ws3siQr2XTZBr4e",
							name: "Pep Llopis",
							type: "artist",
							uri: "spotify:artist:3VcO8Z1ws3siQr2XTZBr4e",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/4mZmQu38Uh8I45AvG5qA9a",
					},
					href: "https://api.spotify.com/v1/albums/4mZmQu38Uh8I45AvG5qA9a",
					id: "4mZmQu38Uh8I45AvG5qA9a",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273bd9a7112dcf5d888c7728041",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02bd9a7112dcf5d888c7728041",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851bd9a7112dcf5d888c7728041",
							width: 64,
						},
					],
					name: "Poiemusia La Nau Dels Argonautes",
					release_date: "2017-06-16",
					release_date_precision: "day",
					total_tracks: 5,
					type: "album",
					uri: "spotify:album:4mZmQu38Uh8I45AvG5qA9a",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/3VcO8Z1ws3siQr2XTZBr4e",
						},
						href: "https://api.spotify.com/v1/artists/3VcO8Z1ws3siQr2XTZBr4e",
						id: "3VcO8Z1ws3siQr2XTZBr4e",
						name: "Pep Llopis",
						type: "artist",
						uri: "spotify:artist:3VcO8Z1ws3siQr2XTZBr4e",
					},
				],
				disc_number: 1,
				duration_ms: 358582,
				explicit: false,
				external_ids: {
					isrc: "QZ3GN1700003",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/09b0qw7zbnzZE5W23HQbgJ",
				},
				href: "https://api.spotify.com/v1/tracks/09b0qw7zbnzZE5W23HQbgJ",
				id: "09b0qw7zbnzZE5W23HQbgJ",
				is_local: false,
				is_playable: true,
				name: "Jardins Aquatics",
				popularity: 39,
				preview_url: "https://p.scdn.co/mp3-preview/81568f3f95e0b88c8a115df2717c869d03aff389?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 3,
				type: "track",
				uri: "spotify:track:09b0qw7zbnzZE5W23HQbgJ",
			},
			played_at: "2022-03-14T13:14:13.192Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZEVXcF4fZc8ox9PV",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZEVXcF4fZc8ox9PV",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZEVXcF4fZc8ox9PV",
			},
		},
		{
			track: {
				album: {
					album_type: "single",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/5xXSrTidFvVRJmiam2Zh1o",
							},
							href: "https://api.spotify.com/v1/artists/5xXSrTidFvVRJmiam2Zh1o",
							id: "5xXSrTidFvVRJmiam2Zh1o",
							name: "GENER8ION",
							type: "artist",
							uri: "spotify:artist:5xXSrTidFvVRJmiam2Zh1o",
						},
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/12Zk1DFhCbHY6v3xep2ZjI",
							},
							href: "https://api.spotify.com/v1/artists/12Zk1DFhCbHY6v3xep2ZjI",
							id: "12Zk1DFhCbHY6v3xep2ZjI",
							name: "070 Shake",
							type: "artist",
							uri: "spotify:artist:12Zk1DFhCbHY6v3xep2ZjI",
						},
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/1XqqyIQYMonHgllb1uysL3",
							},
							href: "https://api.spotify.com/v1/artists/1XqqyIQYMonHgllb1uysL3",
							id: "1XqqyIQYMonHgllb1uysL3",
							name: "Surkin",
							type: "artist",
							uri: "spotify:artist:1XqqyIQYMonHgllb1uysL3",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/2g3h5sHGcVvbvsit77Sbbb",
					},
					href: "https://api.spotify.com/v1/albums/2g3h5sHGcVvbvsit77Sbbb",
					id: "2g3h5sHGcVvbvsit77Sbbb",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273f0415627de0c4cce287ce2a5",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02f0415627de0c4cce287ce2a5",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851f0415627de0c4cce287ce2a5",
							width: 64,
						},
					],
					name: "Neo Surf",
					release_date: "2021-10-22",
					release_date_precision: "day",
					total_tracks: 1,
					type: "album",
					uri: "spotify:album:2g3h5sHGcVvbvsit77Sbbb",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/5xXSrTidFvVRJmiam2Zh1o",
						},
						href: "https://api.spotify.com/v1/artists/5xXSrTidFvVRJmiam2Zh1o",
						id: "5xXSrTidFvVRJmiam2Zh1o",
						name: "GENER8ION",
						type: "artist",
						uri: "spotify:artist:5xXSrTidFvVRJmiam2Zh1o",
					},
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/12Zk1DFhCbHY6v3xep2ZjI",
						},
						href: "https://api.spotify.com/v1/artists/12Zk1DFhCbHY6v3xep2ZjI",
						id: "12Zk1DFhCbHY6v3xep2ZjI",
						name: "070 Shake",
						type: "artist",
						uri: "spotify:artist:12Zk1DFhCbHY6v3xep2ZjI",
					},
				],
				disc_number: 1,
				duration_ms: 200133,
				explicit: false,
				external_ids: {
					isrc: "FRDWM2100010",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/6XmT8fIEfcS3ZSVEz00U7m",
				},
				href: "https://api.spotify.com/v1/tracks/6XmT8fIEfcS3ZSVEz00U7m",
				id: "6XmT8fIEfcS3ZSVEz00U7m",
				is_local: false,
				is_playable: true,
				name: "Neo Surf",
				popularity: 61,
				preview_url: "https://p.scdn.co/mp3-preview/a735a2aedd2be366a1d9485996f163aa93572597?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 1,
				type: "track",
				uri: "spotify:track:6XmT8fIEfcS3ZSVEz00U7m",
			},
			played_at: "2022-03-14T11:16:38.831Z",
			context: null,
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/3Dw9w3jnmr58ocgxiwITcq",
							},
							href: "https://api.spotify.com/v1/artists/3Dw9w3jnmr58ocgxiwITcq",
							id: "3Dw9w3jnmr58ocgxiwITcq",
							name: "Rone",
							type: "artist",
							uri: "spotify:artist:3Dw9w3jnmr58ocgxiwITcq",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/7jvfKfpDTc8bioLeCboUcv",
					},
					href: "https://api.spotify.com/v1/albums/7jvfKfpDTc8bioLeCboUcv",
					id: "7jvfKfpDTc8bioLeCboUcv",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273f62cd883ff0fadc715778c74",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02f62cd883ff0fadc715778c74",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851f62cd883ff0fadc715778c74",
							width: 64,
						},
					],
					name: "Rone & Friends",
					release_date: "2021-03-26",
					release_date_precision: "day",
					total_tracks: 12,
					type: "album",
					uri: "spotify:album:7jvfKfpDTc8bioLeCboUcv",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/3Dw9w3jnmr58ocgxiwITcq",
						},
						href: "https://api.spotify.com/v1/artists/3Dw9w3jnmr58ocgxiwITcq",
						id: "3Dw9w3jnmr58ocgxiwITcq",
						name: "Rone",
						type: "artist",
						uri: "spotify:artist:3Dw9w3jnmr58ocgxiwITcq",
					},
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/1FiWBzw15KbR9amOb1Xnxp",
						},
						href: "https://api.spotify.com/v1/artists/1FiWBzw15KbR9amOb1Xnxp",
						id: "1FiWBzw15KbR9amOb1Xnxp",
						name: "Odezenne",
						type: "artist",
						uri: "spotify:artist:1FiWBzw15KbR9amOb1Xnxp",
					},
				],
				disc_number: 1,
				duration_ms: 174410,
				explicit: false,
				external_ids: {
					isrc: "FRT092100016",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/2hmXZfnD3GhB18MdT2aL9x",
				},
				href: "https://api.spotify.com/v1/tracks/2hmXZfnD3GhB18MdT2aL9x",
				id: "2hmXZfnD3GhB18MdT2aL9x",
				is_local: false,
				is_playable: true,
				name: "Sot-l'y-laisse",
				popularity: 42,
				preview_url: "https://p.scdn.co/mp3-preview/e9d76687669d7ef9f386839e8ed4d713fd24c4f3?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 1,
				type: "track",
				uri: "spotify:track:2hmXZfnD3GhB18MdT2aL9x",
			},
			played_at: "2022-03-14T11:14:48.608Z",
			context: null,
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/6FGSUph2Uv0yi2oM1hDV78",
							},
							href: "https://api.spotify.com/v1/artists/6FGSUph2Uv0yi2oM1hDV78",
							id: "6FGSUph2Uv0yi2oM1hDV78",
							name: "I Mean Us",
							type: "artist",
							uri: "spotify:artist:6FGSUph2Uv0yi2oM1hDV78",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/0YCxq2nT2BLL9vSCsQEFNX",
					},
					href: "https://api.spotify.com/v1/albums/0YCxq2nT2BLL9vSCsQEFNX",
					id: "0YCxq2nT2BLL9vSCsQEFNX",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273b29175e038690a25b6e26827",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02b29175e038690a25b6e26827",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851b29175e038690a25b6e26827",
							width: 64,
						},
					],
					name: "Into Innerverse",
					release_date: "2021-10-15",
					release_date_precision: "day",
					total_tracks: 8,
					type: "album",
					uri: "spotify:album:0YCxq2nT2BLL9vSCsQEFNX",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/6FGSUph2Uv0yi2oM1hDV78",
						},
						href: "https://api.spotify.com/v1/artists/6FGSUph2Uv0yi2oM1hDV78",
						id: "6FGSUph2Uv0yi2oM1hDV78",
						name: "I Mean Us",
						type: "artist",
						uri: "spotify:artist:6FGSUph2Uv0yi2oM1hDV78",
					},
				],
				disc_number: 1,
				duration_ms: 272232,
				explicit: false,
				external_ids: {
					isrc: "TWAE32101392",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/5EdGni8Sgu75BdLyv5mSUT",
				},
				href: "https://api.spotify.com/v1/tracks/5EdGni8Sgu75BdLyv5mSUT",
				id: "5EdGni8Sgu75BdLyv5mSUT",
				is_local: false,
				is_playable: true,
				name: "24 Years Old of You",
				popularity: 37,
				preview_url: "https://p.scdn.co/mp3-preview/26fe4acda9d0362ed022d3d943c0e6d84e51711d?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 7,
				type: "track",
				uri: "spotify:track:5EdGni8Sgu75BdLyv5mSUT",
			},
			played_at: "2022-03-14T11:11:53.657Z",
			context: null,
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/4cyoA6TEaCkcI6ue37dJpw",
							},
							href: "https://api.spotify.com/v1/artists/4cyoA6TEaCkcI6ue37dJpw",
							id: "4cyoA6TEaCkcI6ue37dJpw",
							name: "Petit Prince",
							type: "artist",
							uri: "spotify:artist:4cyoA6TEaCkcI6ue37dJpw",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/4TX8RYAwdxVjhLJEDTM5FM",
					},
					href: "https://api.spotify.com/v1/albums/4TX8RYAwdxVjhLJEDTM5FM",
					id: "4TX8RYAwdxVjhLJEDTM5FM",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27327cb6a2b6f507c74f8755a25",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0227cb6a2b6f507c74f8755a25",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485127cb6a2b6f507c74f8755a25",
							width: 64,
						},
					],
					name: "Les plus beaux matins",
					release_date: "2020-09-04",
					release_date_precision: "day",
					total_tracks: 11,
					type: "album",
					uri: "spotify:album:4TX8RYAwdxVjhLJEDTM5FM",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/4cyoA6TEaCkcI6ue37dJpw",
						},
						href: "https://api.spotify.com/v1/artists/4cyoA6TEaCkcI6ue37dJpw",
						id: "4cyoA6TEaCkcI6ue37dJpw",
						name: "Petit Prince",
						type: "artist",
						uri: "spotify:artist:4cyoA6TEaCkcI6ue37dJpw",
					},
				],
				disc_number: 1,
				duration_ms: 210000,
				explicit: false,
				external_ids: {
					isrc: "FRIDO1912152",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/0RzGP7qF9VWPfr37mDuGLN",
				},
				href: "https://api.spotify.com/v1/tracks/0RzGP7qF9VWPfr37mDuGLN",
				id: "0RzGP7qF9VWPfr37mDuGLN",
				is_local: false,
				is_playable: true,
				name: "Chien chinois",
				popularity: 34,
				preview_url: "https://p.scdn.co/mp3-preview/8927eba984ca63c15d2b7d84f73f439ddd7c340b?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 3,
				type: "track",
				uri: "spotify:track:0RzGP7qF9VWPfr37mDuGLN",
			},
			played_at: "2022-03-14T11:07:20.732Z",
			context: null,
		},
		{
			track: {
				album: {
					album_type: "single",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/5ja442qT5eTfK2AtBCVmE7",
							},
							href: "https://api.spotify.com/v1/artists/5ja442qT5eTfK2AtBCVmE7",
							id: "5ja442qT5eTfK2AtBCVmE7",
							name: "B77",
							type: "artist",
							uri: "spotify:artist:5ja442qT5eTfK2AtBCVmE7",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/7CE23o1oXiIJWoyHOGSGoP",
					},
					href: "https://api.spotify.com/v1/albums/7CE23o1oXiIJWoyHOGSGoP",
					id: "7CE23o1oXiIJWoyHOGSGoP",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273ed4d5b3266c59753cc0c5d1f",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02ed4d5b3266c59753cc0c5d1f",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851ed4d5b3266c59753cc0c5d1f",
							width: 64,
						},
					],
					name: "Fleur",
					release_date: "2019-06-14",
					release_date_precision: "day",
					total_tracks: 4,
					type: "album",
					uri: "spotify:album:7CE23o1oXiIJWoyHOGSGoP",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/5ja442qT5eTfK2AtBCVmE7",
						},
						href: "https://api.spotify.com/v1/artists/5ja442qT5eTfK2AtBCVmE7",
						id: "5ja442qT5eTfK2AtBCVmE7",
						name: "B77",
						type: "artist",
						uri: "spotify:artist:5ja442qT5eTfK2AtBCVmE7",
					},
				],
				disc_number: 1,
				duration_ms: 207426,
				explicit: false,
				external_ids: {
					isrc: "TCADW1850044",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/1DU8iSOSruHQIIXAX20kft",
				},
				href: "https://api.spotify.com/v1/tracks/1DU8iSOSruHQIIXAX20kft",
				id: "1DU8iSOSruHQIIXAX20kft",
				is_local: false,
				is_playable: true,
				name: "Child",
				popularity: 45,
				preview_url: "https://p.scdn.co/mp3-preview/951bfe7964e854596e9231cfb670d353b8c34a84?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 1,
				type: "track",
				uri: "spotify:track:1DU8iSOSruHQIIXAX20kft",
			},
			played_at: "2022-03-14T11:03:21.843Z",
			context: null,
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/2vJObElaIZWYDLpiXiJMo9",
							},
							href: "https://api.spotify.com/v1/artists/2vJObElaIZWYDLpiXiJMo9",
							id: "2vJObElaIZWYDLpiXiJMo9",
							name: "Cornelius",
							type: "artist",
							uri: "spotify:artist:2vJObElaIZWYDLpiXiJMo9",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/4vjBmHL0f9a3H8Ul1JXDyy",
					},
					href: "https://api.spotify.com/v1/albums/4vjBmHL0f9a3H8Ul1JXDyy",
					id: "4vjBmHL0f9a3H8Ul1JXDyy",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273b50ec32ce60b97de89292d09",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02b50ec32ce60b97de89292d09",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851b50ec32ce60b97de89292d09",
							width: 64,
						},
					],
					name: "「攻殻機動隊ARISE」O.S.T.",
					release_date: "2013-11-27",
					release_date_precision: "day",
					total_tracks: 19,
					type: "album",
					uri: "spotify:album:4vjBmHL0f9a3H8Ul1JXDyy",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/2vJObElaIZWYDLpiXiJMo9",
						},
						href: "https://api.spotify.com/v1/artists/2vJObElaIZWYDLpiXiJMo9",
						id: "2vJObElaIZWYDLpiXiJMo9",
						name: "Cornelius",
						type: "artist",
						uri: "spotify:artist:2vJObElaIZWYDLpiXiJMo9",
					},
				],
				disc_number: 1,
				duration_ms: 268321,
				explicit: false,
				external_ids: {
					isrc: "JPG751300264",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/1TXrT9o6pg0Ha4JnNv0H3S",
				},
				href: "https://api.spotify.com/v1/tracks/1TXrT9o6pg0Ha4JnNv0H3S",
				id: "1TXrT9o6pg0Ha4JnNv0H3S",
				is_local: false,
				is_playable: true,
				name: "GHOST IN THE SHELL ARISE",
				popularity: 37,
				preview_url: "https://p.scdn.co/mp3-preview/f9ab8cb57757a304ced0e0c5f862d2c96e54aa47?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 2,
				type: "track",
				uri: "spotify:track:1TXrT9o6pg0Ha4JnNv0H3S",
			},
			played_at: "2022-03-14T10:59:54.482Z",
			context: null,
		},
		{
			track: {
				album: {
					album_type: "single",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/4cyoA6TEaCkcI6ue37dJpw",
							},
							href: "https://api.spotify.com/v1/artists/4cyoA6TEaCkcI6ue37dJpw",
							id: "4cyoA6TEaCkcI6ue37dJpw",
							name: "Petit Prince",
							type: "artist",
							uri: "spotify:artist:4cyoA6TEaCkcI6ue37dJpw",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/7nLHUchr5B7F6d5hdliIPu",
					},
					href: "https://api.spotify.com/v1/albums/7nLHUchr5B7F6d5hdliIPu",
					id: "7nLHUchr5B7F6d5hdliIPu",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273b9675347faaf7e64fd83e266",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02b9675347faaf7e64fd83e266",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851b9675347faaf7e64fd83e266",
							width: 64,
						},
					],
					name: "Le jour du départ",
					release_date: "2018-10-17",
					release_date_precision: "day",
					total_tracks: 1,
					type: "album",
					uri: "spotify:album:7nLHUchr5B7F6d5hdliIPu",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/4cyoA6TEaCkcI6ue37dJpw",
						},
						href: "https://api.spotify.com/v1/artists/4cyoA6TEaCkcI6ue37dJpw",
						id: "4cyoA6TEaCkcI6ue37dJpw",
						name: "Petit Prince",
						type: "artist",
						uri: "spotify:artist:4cyoA6TEaCkcI6ue37dJpw",
					},
				],
				disc_number: 1,
				duration_ms: 122147,
				explicit: false,
				external_ids: {
					isrc: "FRIDO1811444",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/0psqIgKXEEuFQZJN6fzrhg",
				},
				href: "https://api.spotify.com/v1/tracks/0psqIgKXEEuFQZJN6fzrhg",
				id: "0psqIgKXEEuFQZJN6fzrhg",
				is_local: false,
				is_playable: true,
				name: "Le jour du départ",
				popularity: 31,
				preview_url: "https://p.scdn.co/mp3-preview/d960dc5e692a01a7e6112861f2ec387e8b75d21f?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 1,
				type: "track",
				uri: "spotify:track:0psqIgKXEEuFQZJN6fzrhg",
			},
			played_at: "2022-03-14T10:55:25.555Z",
			context: null,
		},
		{
			track: {
				album: {
					album_type: "single",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/44TGR1CzjKBxSHsSEy7bi9",
							},
							href: "https://api.spotify.com/v1/artists/44TGR1CzjKBxSHsSEy7bi9",
							id: "44TGR1CzjKBxSHsSEy7bi9",
							name: "Woodkid",
							type: "artist",
							uri: "spotify:artist:44TGR1CzjKBxSHsSEy7bi9",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/4FAzMltVVxciAjP2qGCjMM",
					},
					href: "https://api.spotify.com/v1/albums/4FAzMltVVxciAjP2qGCjMM",
					id: "4FAzMltVVxciAjP2qGCjMM",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273ed02a85108c34d48fc32efe2",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02ed02a85108c34d48fc32efe2",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851ed02a85108c34d48fc32efe2",
							width: 64,
						},
					],
					name: "Prologue",
					release_date: "2021-08-06",
					release_date_precision: "day",
					total_tracks: 1,
					type: "album",
					uri: "spotify:album:4FAzMltVVxciAjP2qGCjMM",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/44TGR1CzjKBxSHsSEy7bi9",
						},
						href: "https://api.spotify.com/v1/artists/44TGR1CzjKBxSHsSEy7bi9",
						id: "44TGR1CzjKBxSHsSEy7bi9",
						name: "Woodkid",
						type: "artist",
						uri: "spotify:artist:44TGR1CzjKBxSHsSEy7bi9",
					},
				],
				disc_number: 1,
				duration_ms: 393120,
				explicit: false,
				external_ids: {
					isrc: "FRUM72101232",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/2QfJz1EO3gDiBakebRtpnv",
				},
				href: "https://api.spotify.com/v1/tracks/2QfJz1EO3gDiBakebRtpnv",
				id: "2QfJz1EO3gDiBakebRtpnv",
				is_local: false,
				is_playable: true,
				name: "Prologue",
				popularity: 33,
				preview_url: "https://p.scdn.co/mp3-preview/893610223b718fd6ff3e16f079267c0b944c5525?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 1,
				type: "track",
				uri: "spotify:track:2QfJz1EO3gDiBakebRtpnv",
			},
			played_at: "2022-03-14T10:53:14.459Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZF1Epu1JGzhK6VOQ",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZF1Epu1JGzhK6VOQ",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZF1Epu1JGzhK6VOQ",
			},
		},
		{
			track: {
				album: {
					album_type: "single",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/1XEVu7gdRFfzEFqsPrancH",
							},
							href: "https://api.spotify.com/v1/artists/1XEVu7gdRFfzEFqsPrancH",
							id: "1XEVu7gdRFfzEFqsPrancH",
							name: "rusowsky",
							type: "artist",
							uri: "spotify:artist:1XEVu7gdRFfzEFqsPrancH",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/6jpd8mseja2OVaHniWe0Oa",
					},
					href: "https://api.spotify.com/v1/albums/6jpd8mseja2OVaHniWe0Oa",
					id: "6jpd8mseja2OVaHniWe0Oa",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273a9870df8eecb7f1ee66171a5",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02a9870df8eecb7f1ee66171a5",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851a9870df8eecb7f1ee66171a5",
							width: 64,
						},
					],
					name: "So So",
					release_date: "2019-09-19",
					release_date_precision: "day",
					total_tracks: 1,
					type: "album",
					uri: "spotify:album:6jpd8mseja2OVaHniWe0Oa",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/1XEVu7gdRFfzEFqsPrancH",
						},
						href: "https://api.spotify.com/v1/artists/1XEVu7gdRFfzEFqsPrancH",
						id: "1XEVu7gdRFfzEFqsPrancH",
						name: "rusowsky",
						type: "artist",
						uri: "spotify:artist:1XEVu7gdRFfzEFqsPrancH",
					},
				],
				disc_number: 1,
				duration_ms: 125557,
				explicit: false,
				external_ids: {
					isrc: "AEA0Q1971039",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/7s9xtALBX5o96TjRB7R078",
				},
				href: "https://api.spotify.com/v1/tracks/7s9xtALBX5o96TjRB7R078",
				id: "7s9xtALBX5o96TjRB7R078",
				is_local: false,
				is_playable: true,
				name: "So So",
				popularity: 64,
				preview_url: "https://p.scdn.co/mp3-preview/f0f617d1e87575f7f40b99dd91afbcad51eef0ac?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 1,
				type: "track",
				uri: "spotify:track:7s9xtALBX5o96TjRB7R078",
			},
			played_at: "2022-03-14T10:46:40.894Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZF1Epu1JGzhK6VOQ",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZF1Epu1JGzhK6VOQ",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZF1Epu1JGzhK6VOQ",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/18oYqNtcLUHrqO7LfX7qni",
							},
							href: "https://api.spotify.com/v1/artists/18oYqNtcLUHrqO7LfX7qni",
							id: "18oYqNtcLUHrqO7LfX7qni",
							name: "Nicholas Britell",
							type: "artist",
							uri: "spotify:artist:18oYqNtcLUHrqO7LfX7qni",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/0xHoyiE1DIr0NocqPVo8By",
					},
					href: "https://api.spotify.com/v1/albums/0xHoyiE1DIr0NocqPVo8By",
					id: "0xHoyiE1DIr0NocqPVo8By",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273facce6360b1a0eaffd95a5cc",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02facce6360b1a0eaffd95a5cc",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851facce6360b1a0eaffd95a5cc",
							width: 64,
						},
					],
					name: "Don't Look Up (Soundtrack from the Netflix Film)",
					release_date: "2021-12-10",
					release_date_precision: "day",
					total_tracks: 31,
					type: "album",
					uri: "spotify:album:0xHoyiE1DIr0NocqPVo8By",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/18oYqNtcLUHrqO7LfX7qni",
						},
						href: "https://api.spotify.com/v1/artists/18oYqNtcLUHrqO7LfX7qni",
						id: "18oYqNtcLUHrqO7LfX7qni",
						name: "Nicholas Britell",
						type: "artist",
						uri: "spotify:artist:18oYqNtcLUHrqO7LfX7qni",
					},
				],
				disc_number: 1,
				duration_ms: 86815,
				explicit: false,
				external_ids: {
					isrc: "QZ8BZ2100996",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/4pstZ5sZi5YEhpKTZ1dAzF",
				},
				href: "https://api.spotify.com/v1/tracks/4pstZ5sZi5YEhpKTZ1dAzF",
				id: "4pstZ5sZi5YEhpKTZ1dAzF",
				is_local: false,
				is_playable: true,
				name: "Memento Mori",
				popularity: 24,
				preview_url: "https://p.scdn.co/mp3-preview/8bd3e74710f3190513a7b2315fe428c5534e9dc5?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 26,
				type: "track",
				uri: "spotify:track:4pstZ5sZi5YEhpKTZ1dAzF",
			},
			played_at: "2022-03-14T10:44:35.763Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZF1Epu1JGzhK6VOQ",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZF1Epu1JGzhK6VOQ",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZF1Epu1JGzhK6VOQ",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/5DjLsaAyJZ1jFz1azbJ0ha",
							},
							href: "https://api.spotify.com/v1/artists/5DjLsaAyJZ1jFz1azbJ0ha",
							id: "5DjLsaAyJZ1jFz1azbJ0ha",
							name: "Kazam",
							type: "artist",
							uri: "spotify:artist:5DjLsaAyJZ1jFz1azbJ0ha",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/2z0vdFJmcZkss6ESgvI7Uy",
					},
					href: "https://api.spotify.com/v1/albums/2z0vdFJmcZkss6ESgvI7Uy",
					id: "2z0vdFJmcZkss6ESgvI7Uy",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2731ee6b0bb7d233c7c52460372",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e021ee6b0bb7d233c7c52460372",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048511ee6b0bb7d233c7c52460372",
							width: 64,
						},
					],
					name: "Balagan Beats 02 (by Kazam)",
					release_date: "2021-07-23",
					release_date_precision: "day",
					total_tracks: 23,
					type: "album",
					uri: "spotify:album:2z0vdFJmcZkss6ESgvI7Uy",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/4PE4i9qqfT0fpCm76kcuuB",
						},
						href: "https://api.spotify.com/v1/artists/4PE4i9qqfT0fpCm76kcuuB",
						id: "4PE4i9qqfT0fpCm76kcuuB",
						name: "PAVANE",
						type: "artist",
						uri: "spotify:artist:4PE4i9qqfT0fpCm76kcuuB",
					},
				],
				disc_number: 1,
				duration_ms: 293715,
				explicit: false,
				external_ids: {
					isrc: "FR9W11411829",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/25q2mYBAmCqaxmIC1tJn5a",
				},
				href: "https://api.spotify.com/v1/tracks/25q2mYBAmCqaxmIC1tJn5a",
				id: "25q2mYBAmCqaxmIC1tJn5a",
				is_local: false,
				is_playable: true,
				name: "La danse de daphnis",
				popularity: 16,
				preview_url: "https://p.scdn.co/mp3-preview/23467e5a7713a6171107cce31a853ccd7dc3692a?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 15,
				type: "track",
				uri: "spotify:track:25q2mYBAmCqaxmIC1tJn5a",
			},
			played_at: "2022-03-14T10:43:08.075Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZF1Epu1JGzhK6VOQ",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZF1Epu1JGzhK6VOQ",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZF1Epu1JGzhK6VOQ",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/6FGSUph2Uv0yi2oM1hDV78",
							},
							href: "https://api.spotify.com/v1/artists/6FGSUph2Uv0yi2oM1hDV78",
							id: "6FGSUph2Uv0yi2oM1hDV78",
							name: "I Mean Us",
							type: "artist",
							uri: "spotify:artist:6FGSUph2Uv0yi2oM1hDV78",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/0YCxq2nT2BLL9vSCsQEFNX",
					},
					href: "https://api.spotify.com/v1/albums/0YCxq2nT2BLL9vSCsQEFNX",
					id: "0YCxq2nT2BLL9vSCsQEFNX",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273b29175e038690a25b6e26827",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02b29175e038690a25b6e26827",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851b29175e038690a25b6e26827",
							width: 64,
						},
					],
					name: "Into Innerverse",
					release_date: "2021-10-15",
					release_date_precision: "day",
					total_tracks: 8,
					type: "album",
					uri: "spotify:album:0YCxq2nT2BLL9vSCsQEFNX",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/6FGSUph2Uv0yi2oM1hDV78",
						},
						href: "https://api.spotify.com/v1/artists/6FGSUph2Uv0yi2oM1hDV78",
						id: "6FGSUph2Uv0yi2oM1hDV78",
						name: "I Mean Us",
						type: "artist",
						uri: "spotify:artist:6FGSUph2Uv0yi2oM1hDV78",
					},
				],
				disc_number: 1,
				duration_ms: 272232,
				explicit: false,
				external_ids: {
					isrc: "TWAE32101392",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/5EdGni8Sgu75BdLyv5mSUT",
				},
				href: "https://api.spotify.com/v1/tracks/5EdGni8Sgu75BdLyv5mSUT",
				id: "5EdGni8Sgu75BdLyv5mSUT",
				is_local: false,
				is_playable: true,
				name: "24 Years Old of You",
				popularity: 37,
				preview_url: "https://p.scdn.co/mp3-preview/26fe4acda9d0362ed022d3d943c0e6d84e51711d?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 7,
				type: "track",
				uri: "spotify:track:5EdGni8Sgu75BdLyv5mSUT",
			},
			played_at: "2022-03-14T10:38:13.500Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZF1Epu1JGzhK6VOQ",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZF1Epu1JGzhK6VOQ",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZF1Epu1JGzhK6VOQ",
			},
		},
		{
			track: {
				album: {
					album_type: "single",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/5xXSrTidFvVRJmiam2Zh1o",
							},
							href: "https://api.spotify.com/v1/artists/5xXSrTidFvVRJmiam2Zh1o",
							id: "5xXSrTidFvVRJmiam2Zh1o",
							name: "GENER8ION",
							type: "artist",
							uri: "spotify:artist:5xXSrTidFvVRJmiam2Zh1o",
						},
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/12Zk1DFhCbHY6v3xep2ZjI",
							},
							href: "https://api.spotify.com/v1/artists/12Zk1DFhCbHY6v3xep2ZjI",
							id: "12Zk1DFhCbHY6v3xep2ZjI",
							name: "070 Shake",
							type: "artist",
							uri: "spotify:artist:12Zk1DFhCbHY6v3xep2ZjI",
						},
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/1XqqyIQYMonHgllb1uysL3",
							},
							href: "https://api.spotify.com/v1/artists/1XqqyIQYMonHgllb1uysL3",
							id: "1XqqyIQYMonHgllb1uysL3",
							name: "Surkin",
							type: "artist",
							uri: "spotify:artist:1XqqyIQYMonHgllb1uysL3",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/2g3h5sHGcVvbvsit77Sbbb",
					},
					href: "https://api.spotify.com/v1/albums/2g3h5sHGcVvbvsit77Sbbb",
					id: "2g3h5sHGcVvbvsit77Sbbb",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273f0415627de0c4cce287ce2a5",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02f0415627de0c4cce287ce2a5",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851f0415627de0c4cce287ce2a5",
							width: 64,
						},
					],
					name: "Neo Surf",
					release_date: "2021-10-22",
					release_date_precision: "day",
					total_tracks: 1,
					type: "album",
					uri: "spotify:album:2g3h5sHGcVvbvsit77Sbbb",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/5xXSrTidFvVRJmiam2Zh1o",
						},
						href: "https://api.spotify.com/v1/artists/5xXSrTidFvVRJmiam2Zh1o",
						id: "5xXSrTidFvVRJmiam2Zh1o",
						name: "GENER8ION",
						type: "artist",
						uri: "spotify:artist:5xXSrTidFvVRJmiam2Zh1o",
					},
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/12Zk1DFhCbHY6v3xep2ZjI",
						},
						href: "https://api.spotify.com/v1/artists/12Zk1DFhCbHY6v3xep2ZjI",
						id: "12Zk1DFhCbHY6v3xep2ZjI",
						name: "070 Shake",
						type: "artist",
						uri: "spotify:artist:12Zk1DFhCbHY6v3xep2ZjI",
					},
				],
				disc_number: 1,
				duration_ms: 200133,
				explicit: false,
				external_ids: {
					isrc: "FRDWM2100010",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/6XmT8fIEfcS3ZSVEz00U7m",
				},
				href: "https://api.spotify.com/v1/tracks/6XmT8fIEfcS3ZSVEz00U7m",
				id: "6XmT8fIEfcS3ZSVEz00U7m",
				is_local: false,
				is_playable: true,
				name: "Neo Surf",
				popularity: 61,
				preview_url: "https://p.scdn.co/mp3-preview/a735a2aedd2be366a1d9485996f163aa93572597?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 1,
				type: "track",
				uri: "spotify:track:6XmT8fIEfcS3ZSVEz00U7m",
			},
			played_at: "2022-03-14T10:33:41.063Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZF1Epu1JGzhK6VOQ",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZF1Epu1JGzhK6VOQ",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZF1Epu1JGzhK6VOQ",
			},
		},
		{
			track: {
				album: {
					album_type: "single",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/1FiWBzw15KbR9amOb1Xnxp",
							},
							href: "https://api.spotify.com/v1/artists/1FiWBzw15KbR9amOb1Xnxp",
							id: "1FiWBzw15KbR9amOb1Xnxp",
							name: "Odezenne",
							type: "artist",
							uri: "spotify:artist:1FiWBzw15KbR9amOb1Xnxp",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/3X3CVT39Ussi642EiwujeJ",
					},
					href: "https://api.spotify.com/v1/albums/3X3CVT39Ussi642EiwujeJ",
					id: "3X3CVT39Ussi642EiwujeJ",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2730765ec061a0f4cfb20613d0a",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e020765ec061a0f4cfb20613d0a",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048510765ec061a0f4cfb20613d0a",
							width: 64,
						},
					],
					name: "Rien",
					release_date: "2014",
					release_date_precision: "year",
					total_tracks: 5,
					type: "album",
					uri: "spotify:album:3X3CVT39Ussi642EiwujeJ",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/1FiWBzw15KbR9amOb1Xnxp",
						},
						href: "https://api.spotify.com/v1/artists/1FiWBzw15KbR9amOb1Xnxp",
						id: "1FiWBzw15KbR9amOb1Xnxp",
						name: "Odezenne",
						type: "artist",
						uri: "spotify:artist:1FiWBzw15KbR9amOb1Xnxp",
					},
				],
				disc_number: 1,
				duration_ms: 351586,
				explicit: true,
				external_ids: {
					isrc: "FR9W11405082",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/5Wzv5tMuFigka3chBwnvWa",
				},
				href: "https://api.spotify.com/v1/tracks/5Wzv5tMuFigka3chBwnvWa",
				id: "5Wzv5tMuFigka3chBwnvWa",
				is_local: false,
				is_playable: true,
				name: "Dieu était grand",
				popularity: 36,
				preview_url: "https://p.scdn.co/mp3-preview/c29a0c4ddcbf4bfcdb07f5a59466adbeb0c71990?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 5,
				type: "track",
				uri: "spotify:track:5Wzv5tMuFigka3chBwnvWa",
			},
			played_at: "2022-03-14T10:30:00.446Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZF1Epu1JGzhK6VOQ",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZF1Epu1JGzhK6VOQ",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZF1Epu1JGzhK6VOQ",
			},
		},
		{
			track: {
				album: {
					album_type: "single",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/4MXUO7sVCaFgFjoTI5ox5c",
							},
							href: "https://api.spotify.com/v1/artists/4MXUO7sVCaFgFjoTI5ox5c",
							id: "4MXUO7sVCaFgFjoTI5ox5c",
							name: "Sufjan Stevens",
							type: "artist",
							uri: "spotify:artist:4MXUO7sVCaFgFjoTI5ox5c",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/4wB3cRpb4YfnNyJORQe3Om",
					},
					href: "https://api.spotify.com/v1/albums/4wB3cRpb4YfnNyJORQe3Om",
					id: "4wB3cRpb4YfnNyJORQe3Om",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2733fc1588803d1887f11d660cc",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e023fc1588803d1887f11d660cc",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048513fc1588803d1887f11d660cc",
							width: 64,
						},
					],
					name: "Mystery of Love",
					release_date: "2017-12-01",
					release_date_precision: "day",
					total_tracks: 1,
					type: "album",
					uri: "spotify:album:4wB3cRpb4YfnNyJORQe3Om",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/4MXUO7sVCaFgFjoTI5ox5c",
						},
						href: "https://api.spotify.com/v1/artists/4MXUO7sVCaFgFjoTI5ox5c",
						id: "4MXUO7sVCaFgFjoTI5ox5c",
						name: "Sufjan Stevens",
						type: "artist",
						uri: "spotify:artist:4MXUO7sVCaFgFjoTI5ox5c",
					},
				],
				disc_number: 1,
				duration_ms: 248960,
				explicit: false,
				external_ids: {
					isrc: "US64G1737302",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/5GbVzc6Ex5LYlLJqzRQhuy",
				},
				href: "https://api.spotify.com/v1/tracks/5GbVzc6Ex5LYlLJqzRQhuy",
				id: "5GbVzc6Ex5LYlLJqzRQhuy",
				is_local: false,
				is_playable: true,
				name: "Mystery of Love",
				popularity: 75,
				preview_url: "https://p.scdn.co/mp3-preview/577c6a7a87f75bc9ec7422b0522fe1f2594b1450?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 1,
				type: "track",
				uri: "spotify:track:5GbVzc6Ex5LYlLJqzRQhuy",
			},
			played_at: "2022-03-14T10:23:53.186Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZF1Epu1JGzhK6VOQ",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZF1Epu1JGzhK6VOQ",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZF1Epu1JGzhK6VOQ",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ",
							},
							href: "https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ",
							id: "0YC192cP3KPCRWx8zr8MfZ",
							name: "Hans Zimmer",
							type: "artist",
							uri: "spotify:artist:0YC192cP3KPCRWx8zr8MfZ",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/3B61kSKTxlY36cYgzvf3cP",
					},
					href: "https://api.spotify.com/v1/albums/3B61kSKTxlY36cYgzvf3cP",
					id: "3B61kSKTxlY36cYgzvf3cP",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273ac29a65e7ffcfa6f9cb0d342",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02ac29a65e7ffcfa6f9cb0d342",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851ac29a65e7ffcfa6f9cb0d342",
							width: 64,
						},
					],
					name: "Interstellar (Original Motion Picture Soundtrack) [Expanded Edition]",
					release_date: "2014-11-18",
					release_date_precision: "day",
					total_tracks: 30,
					type: "album",
					uri: "spotify:album:3B61kSKTxlY36cYgzvf3cP",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ",
						},
						href: "https://api.spotify.com/v1/artists/0YC192cP3KPCRWx8zr8MfZ",
						id: "0YC192cP3KPCRWx8zr8MfZ",
						name: "Hans Zimmer",
						type: "artist",
						uri: "spotify:artist:0YC192cP3KPCRWx8zr8MfZ",
					},
				],
				disc_number: 1,
				duration_ms: 219092,
				explicit: false,
				external_ids: {
					isrc: "USNLR1400780",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/0Sg3UL7f40ulmTh0Xwr6qY",
				},
				href: "https://api.spotify.com/v1/tracks/0Sg3UL7f40ulmTh0Xwr6qY",
				id: "0Sg3UL7f40ulmTh0Xwr6qY",
				is_local: false,
				is_playable: true,
				name: "Mountains",
				popularity: 66,
				preview_url: "https://p.scdn.co/mp3-preview/f0fadc3c0bdd5c982b3298a9d52fc854cb60d3f4?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 8,
				type: "track",
				uri: "spotify:track:0Sg3UL7f40ulmTh0Xwr6qY",
			},
			played_at: "2022-03-14T10:19:43.136Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZF1Epu1JGzhK6VOQ",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZF1Epu1JGzhK6VOQ",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZF1Epu1JGzhK6VOQ",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/313G7P4CxkVyQGNFfxNOpC",
							},
							href: "https://api.spotify.com/v1/artists/313G7P4CxkVyQGNFfxNOpC",
							id: "313G7P4CxkVyQGNFfxNOpC",
							name: "Nicolas Godin",
							type: "artist",
							uri: "spotify:artist:313G7P4CxkVyQGNFfxNOpC",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/5YzTAHQK9iYORWevQrS3q5",
					},
					href: "https://api.spotify.com/v1/albums/5YzTAHQK9iYORWevQrS3q5",
					id: "5YzTAHQK9iYORWevQrS3q5",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273796e4e8e2f8065f52b6c1658",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02796e4e8e2f8065f52b6c1658",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851796e4e8e2f8065f52b6c1658",
							width: 64,
						},
					],
					name: "Au service de la France",
					release_date: "2018-06-22",
					release_date_precision: "day",
					total_tracks: 16,
					type: "album",
					uri: "spotify:album:5YzTAHQK9iYORWevQrS3q5",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/313G7P4CxkVyQGNFfxNOpC",
						},
						href: "https://api.spotify.com/v1/artists/313G7P4CxkVyQGNFfxNOpC",
						id: "313G7P4CxkVyQGNFfxNOpC",
						name: "Nicolas Godin",
						type: "artist",
						uri: "spotify:artist:313G7P4CxkVyQGNFfxNOpC",
					},
				],
				disc_number: 1,
				duration_ms: 149200,
				explicit: false,
				external_ids: {
					isrc: "FR7LG1800003",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/5Cfz0DCrcFpISyvDHBWy9f",
				},
				href: "https://api.spotify.com/v1/tracks/5Cfz0DCrcFpISyvDHBWy9f",
				id: "5Cfz0DCrcFpISyvDHBWy9f",
				is_local: false,
				is_playable: true,
				name: "Les rues de Paris",
				popularity: 50,
				preview_url: "https://p.scdn.co/mp3-preview/b46a9abf17a9ccae4b6cfd6d84ac1d53963605ef?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 3,
				type: "track",
				uri: "spotify:track:5Cfz0DCrcFpISyvDHBWy9f",
			},
			played_at: "2022-03-14T10:16:03.832Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZF1Epu1JGzhK6VOQ",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZF1Epu1JGzhK6VOQ",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZF1Epu1JGzhK6VOQ",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/2vJObElaIZWYDLpiXiJMo9",
							},
							href: "https://api.spotify.com/v1/artists/2vJObElaIZWYDLpiXiJMo9",
							id: "2vJObElaIZWYDLpiXiJMo9",
							name: "Cornelius",
							type: "artist",
							uri: "spotify:artist:2vJObElaIZWYDLpiXiJMo9",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/4vjBmHL0f9a3H8Ul1JXDyy",
					},
					href: "https://api.spotify.com/v1/albums/4vjBmHL0f9a3H8Ul1JXDyy",
					id: "4vjBmHL0f9a3H8Ul1JXDyy",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273b50ec32ce60b97de89292d09",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02b50ec32ce60b97de89292d09",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851b50ec32ce60b97de89292d09",
							width: 64,
						},
					],
					name: "「攻殻機動隊ARISE」O.S.T.",
					release_date: "2013-11-27",
					release_date_precision: "day",
					total_tracks: 19,
					type: "album",
					uri: "spotify:album:4vjBmHL0f9a3H8Ul1JXDyy",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/2vJObElaIZWYDLpiXiJMo9",
						},
						href: "https://api.spotify.com/v1/artists/2vJObElaIZWYDLpiXiJMo9",
						id: "2vJObElaIZWYDLpiXiJMo9",
						name: "Cornelius",
						type: "artist",
						uri: "spotify:artist:2vJObElaIZWYDLpiXiJMo9",
					},
				],
				disc_number: 1,
				duration_ms: 268321,
				explicit: false,
				external_ids: {
					isrc: "JPG751300264",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/1TXrT9o6pg0Ha4JnNv0H3S",
				},
				href: "https://api.spotify.com/v1/tracks/1TXrT9o6pg0Ha4JnNv0H3S",
				id: "1TXrT9o6pg0Ha4JnNv0H3S",
				is_local: false,
				is_playable: true,
				name: "GHOST IN THE SHELL ARISE",
				popularity: 37,
				preview_url: "https://p.scdn.co/mp3-preview/f9ab8cb57757a304ced0e0c5f862d2c96e54aa47?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 2,
				type: "track",
				uri: "spotify:track:1TXrT9o6pg0Ha4JnNv0H3S",
			},
			played_at: "2022-03-14T10:13:27.544Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZF1Epu1JGzhK6VOQ",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZF1Epu1JGzhK6VOQ",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZF1Epu1JGzhK6VOQ",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/0NIPkIjTV8mB795yEIiPYL",
							},
							href: "https://api.spotify.com/v1/artists/0NIPkIjTV8mB795yEIiPYL",
							id: "0NIPkIjTV8mB795yEIiPYL",
							name: "Wallows",
							type: "artist",
							uri: "spotify:artist:0NIPkIjTV8mB795yEIiPYL",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/7eed9MBclFPjjjvotfR2e9",
					},
					href: "https://api.spotify.com/v1/albums/7eed9MBclFPjjjvotfR2e9",
					id: "7eed9MBclFPjjjvotfR2e9",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27384feca0133d9a8e6539a8325",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0284feca0133d9a8e6539a8325",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485184feca0133d9a8e6539a8325",
							width: 64,
						},
					],
					name: "Nothing Happens",
					release_date: "2019-03-22",
					release_date_precision: "day",
					total_tracks: 11,
					type: "album",
					uri: "spotify:album:7eed9MBclFPjjjvotfR2e9",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/0NIPkIjTV8mB795yEIiPYL",
						},
						href: "https://api.spotify.com/v1/artists/0NIPkIjTV8mB795yEIiPYL",
						id: "0NIPkIjTV8mB795yEIiPYL",
						name: "Wallows",
						type: "artist",
						uri: "spotify:artist:0NIPkIjTV8mB795yEIiPYL",
					},
				],
				disc_number: 1,
				duration_ms: 390880,
				explicit: false,
				external_ids: {
					isrc: "USAT21812265",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/5y3QjURtPq4V186jTPMA8Y",
				},
				href: "https://api.spotify.com/v1/tracks/5y3QjURtPq4V186jTPMA8Y",
				id: "5y3QjURtPq4V186jTPMA8Y",
				is_local: false,
				is_playable: true,
				name: "Do Not Wait",
				popularity: 58,
				preview_url: "https://p.scdn.co/mp3-preview/2099197dab983e6eecf1e1c07e0df0a1245ff390?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 11,
				type: "track",
				uri: "spotify:track:5y3QjURtPq4V186jTPMA8Y",
			},
			played_at: "2022-03-14T10:08:46.743Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZF1Epu1JGzhK6VOQ",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZF1Epu1JGzhK6VOQ",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZF1Epu1JGzhK6VOQ",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/3Dw9w3jnmr58ocgxiwITcq",
							},
							href: "https://api.spotify.com/v1/artists/3Dw9w3jnmr58ocgxiwITcq",
							id: "3Dw9w3jnmr58ocgxiwITcq",
							name: "Rone",
							type: "artist",
							uri: "spotify:artist:3Dw9w3jnmr58ocgxiwITcq",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/7jvfKfpDTc8bioLeCboUcv",
					},
					href: "https://api.spotify.com/v1/albums/7jvfKfpDTc8bioLeCboUcv",
					id: "7jvfKfpDTc8bioLeCboUcv",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273f62cd883ff0fadc715778c74",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02f62cd883ff0fadc715778c74",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851f62cd883ff0fadc715778c74",
							width: 64,
						},
					],
					name: "Rone & Friends",
					release_date: "2021-03-26",
					release_date_precision: "day",
					total_tracks: 12,
					type: "album",
					uri: "spotify:album:7jvfKfpDTc8bioLeCboUcv",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/3Dw9w3jnmr58ocgxiwITcq",
						},
						href: "https://api.spotify.com/v1/artists/3Dw9w3jnmr58ocgxiwITcq",
						id: "3Dw9w3jnmr58ocgxiwITcq",
						name: "Rone",
						type: "artist",
						uri: "spotify:artist:3Dw9w3jnmr58ocgxiwITcq",
					},
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/1FiWBzw15KbR9amOb1Xnxp",
						},
						href: "https://api.spotify.com/v1/artists/1FiWBzw15KbR9amOb1Xnxp",
						id: "1FiWBzw15KbR9amOb1Xnxp",
						name: "Odezenne",
						type: "artist",
						uri: "spotify:artist:1FiWBzw15KbR9amOb1Xnxp",
					},
				],
				disc_number: 1,
				duration_ms: 174410,
				explicit: false,
				external_ids: {
					isrc: "FRT092100016",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/2hmXZfnD3GhB18MdT2aL9x",
				},
				href: "https://api.spotify.com/v1/tracks/2hmXZfnD3GhB18MdT2aL9x",
				id: "2hmXZfnD3GhB18MdT2aL9x",
				is_local: false,
				is_playable: true,
				name: "Sot-l'y-laisse",
				popularity: 42,
				preview_url: "https://p.scdn.co/mp3-preview/e9d76687669d7ef9f386839e8ed4d713fd24c4f3?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 1,
				type: "track",
				uri: "spotify:track:2hmXZfnD3GhB18MdT2aL9x",
			},
			played_at: "2022-03-14T10:02:04.715Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZF1Epu1JGzhK6VOQ",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZF1Epu1JGzhK6VOQ",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZF1Epu1JGzhK6VOQ",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/6jU2Tt13MmXYk0ZBv1KmfO",
							},
							href: "https://api.spotify.com/v1/artists/6jU2Tt13MmXYk0ZBv1KmfO",
							id: "6jU2Tt13MmXYk0ZBv1KmfO",
							name: "Giorgio Moroder",
							type: "artist",
							uri: "spotify:artist:6jU2Tt13MmXYk0ZBv1KmfO",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/2YxQJ1FzTWBT1nhI3nsbaD",
					},
					href: "https://api.spotify.com/v1/albums/2YxQJ1FzTWBT1nhI3nsbaD",
					id: "2YxQJ1FzTWBT1nhI3nsbaD",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273bd4a14f05a042028529ed84d",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02bd4a14f05a042028529ed84d",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851bd4a14f05a042028529ed84d",
							width: 64,
						},
					],
					name: "Son Of My Father",
					release_date: "1972-01-01",
					release_date_precision: "day",
					total_tracks: 10,
					type: "album",
					uri: "spotify:album:2YxQJ1FzTWBT1nhI3nsbaD",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/6jU2Tt13MmXYk0ZBv1KmfO",
						},
						href: "https://api.spotify.com/v1/artists/6jU2Tt13MmXYk0ZBv1KmfO",
						id: "6jU2Tt13MmXYk0ZBv1KmfO",
						name: "Giorgio Moroder",
						type: "artist",
						uri: "spotify:artist:6jU2Tt13MmXYk0ZBv1KmfO",
					},
				],
				disc_number: 1,
				duration_ms: 143546,
				explicit: false,
				external_ids: {
					isrc: "USUM72119874",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/5NlE41EOsosKhrlwRuzrqz",
				},
				href: "https://api.spotify.com/v1/tracks/5NlE41EOsosKhrlwRuzrqz",
				id: "5NlE41EOsosKhrlwRuzrqz",
				is_local: false,
				is_playable: true,
				name: "Tears",
				popularity: 44,
				preview_url: "https://p.scdn.co/mp3-preview/4093fe548c08e246c99104db9ef60d7d2e2deb05?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 10,
				type: "track",
				uri: "spotify:track:5NlE41EOsosKhrlwRuzrqz",
			},
			played_at: "2022-03-14T09:59:10.598Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZF1Epu1JGzhK6VOQ",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZF1Epu1JGzhK6VOQ",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZF1Epu1JGzhK6VOQ",
			},
		},
		{
			track: {
				album: {
					album_type: "single",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/3jQ8hpdQo3TCEnb5gmOtH5",
							},
							href: "https://api.spotify.com/v1/artists/3jQ8hpdQo3TCEnb5gmOtH5",
							id: "3jQ8hpdQo3TCEnb5gmOtH5",
							name: "Erol Alkan",
							type: "artist",
							uri: "spotify:artist:3jQ8hpdQo3TCEnb5gmOtH5",
						},
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/62k5LKMhymqlDNo2DWOvvv",
							},
							href: "https://api.spotify.com/v1/artists/62k5LKMhymqlDNo2DWOvvv",
							id: "62k5LKMhymqlDNo2DWOvvv",
							name: "Boys Noize",
							type: "artist",
							uri: "spotify:artist:62k5LKMhymqlDNo2DWOvvv",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/7oYrBKB1aRdJ10B2xiqtDS",
					},
					href: "https://api.spotify.com/v1/albums/7oYrBKB1aRdJ10B2xiqtDS",
					id: "7oYrBKB1aRdJ10B2xiqtDS",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2736477639d33c7f21ad518f130",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e026477639d33c7f21ad518f130",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048516477639d33c7f21ad518f130",
							width: 64,
						},
					],
					name: "Waves Rework",
					release_date: "2009-11-22",
					release_date_precision: "day",
					total_tracks: 2,
					type: "album",
					uri: "spotify:album:7oYrBKB1aRdJ10B2xiqtDS",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/3jQ8hpdQo3TCEnb5gmOtH5",
						},
						href: "https://api.spotify.com/v1/artists/3jQ8hpdQo3TCEnb5gmOtH5",
						id: "3jQ8hpdQo3TCEnb5gmOtH5",
						name: "Erol Alkan",
						type: "artist",
						uri: "spotify:artist:3jQ8hpdQo3TCEnb5gmOtH5",
					},
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/62k5LKMhymqlDNo2DWOvvv",
						},
						href: "https://api.spotify.com/v1/artists/62k5LKMhymqlDNo2DWOvvv",
						id: "62k5LKMhymqlDNo2DWOvvv",
						name: "Boys Noize",
						type: "artist",
						uri: "spotify:artist:62k5LKMhymqlDNo2DWOvvv",
					},
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/0qudezVgvl4Chd9BgNFB83",
						},
						href: "https://api.spotify.com/v1/artists/0qudezVgvl4Chd9BgNFB83",
						id: "0qudezVgvl4Chd9BgNFB83",
						name: "Chilly Gonzales",
						type: "artist",
						uri: "spotify:artist:0qudezVgvl4Chd9BgNFB83",
					},
				],
				disc_number: 1,
				duration_ms: 258545,
				explicit: false,
				external_ids: {
					isrc: "DEDU20900040",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/7jN6iYiYycnfVEHJvDBlh5",
				},
				href: "https://api.spotify.com/v1/tracks/7jN6iYiYycnfVEHJvDBlh5",
				id: "7jN6iYiYycnfVEHJvDBlh5",
				is_local: false,
				is_playable: true,
				name: "Waves - Chilly Gonzales Piano Remake",
				popularity: 42,
				preview_url: "https://p.scdn.co/mp3-preview/c0f84d9acc73ae955a9616d179f75fd28d72fec1?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 1,
				type: "track",
				uri: "spotify:track:7jN6iYiYycnfVEHJvDBlh5",
			},
			played_at: "2022-03-14T09:56:25.355Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZF1Epu1JGzhK6VOQ",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZF1Epu1JGzhK6VOQ",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZF1Epu1JGzhK6VOQ",
			},
		},
		{
			track: {
				album: {
					album_type: "single",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/4cyoA6TEaCkcI6ue37dJpw",
							},
							href: "https://api.spotify.com/v1/artists/4cyoA6TEaCkcI6ue37dJpw",
							id: "4cyoA6TEaCkcI6ue37dJpw",
							name: "Petit Prince",
							type: "artist",
							uri: "spotify:artist:4cyoA6TEaCkcI6ue37dJpw",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/7nLHUchr5B7F6d5hdliIPu",
					},
					href: "https://api.spotify.com/v1/albums/7nLHUchr5B7F6d5hdliIPu",
					id: "7nLHUchr5B7F6d5hdliIPu",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273b9675347faaf7e64fd83e266",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02b9675347faaf7e64fd83e266",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851b9675347faaf7e64fd83e266",
							width: 64,
						},
					],
					name: "Le jour du départ",
					release_date: "2018-10-17",
					release_date_precision: "day",
					total_tracks: 1,
					type: "album",
					uri: "spotify:album:7nLHUchr5B7F6d5hdliIPu",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/4cyoA6TEaCkcI6ue37dJpw",
						},
						href: "https://api.spotify.com/v1/artists/4cyoA6TEaCkcI6ue37dJpw",
						id: "4cyoA6TEaCkcI6ue37dJpw",
						name: "Petit Prince",
						type: "artist",
						uri: "spotify:artist:4cyoA6TEaCkcI6ue37dJpw",
					},
				],
				disc_number: 1,
				duration_ms: 122147,
				explicit: false,
				external_ids: {
					isrc: "FRIDO1811444",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/0psqIgKXEEuFQZJN6fzrhg",
				},
				href: "https://api.spotify.com/v1/tracks/0psqIgKXEEuFQZJN6fzrhg",
				id: "0psqIgKXEEuFQZJN6fzrhg",
				is_local: false,
				is_playable: true,
				name: "Le jour du départ",
				popularity: 31,
				preview_url: "https://p.scdn.co/mp3-preview/d960dc5e692a01a7e6112861f2ec387e8b75d21f?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 1,
				type: "track",
				uri: "spotify:track:0psqIgKXEEuFQZJN6fzrhg",
			},
			played_at: "2022-03-14T09:51:57.246Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZF1Epu1JGzhK6VOQ",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZF1Epu1JGzhK6VOQ",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZF1Epu1JGzhK6VOQ",
			},
		},
		{
			track: {
				album: {
					album_type: "single",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/1FiWBzw15KbR9amOb1Xnxp",
							},
							href: "https://api.spotify.com/v1/artists/1FiWBzw15KbR9amOb1Xnxp",
							id: "1FiWBzw15KbR9amOb1Xnxp",
							name: "Odezenne",
							type: "artist",
							uri: "spotify:artist:1FiWBzw15KbR9amOb1Xnxp",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/3X3CVT39Ussi642EiwujeJ",
					},
					href: "https://api.spotify.com/v1/albums/3X3CVT39Ussi642EiwujeJ",
					id: "3X3CVT39Ussi642EiwujeJ",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2730765ec061a0f4cfb20613d0a",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e020765ec061a0f4cfb20613d0a",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048510765ec061a0f4cfb20613d0a",
							width: 64,
						},
					],
					name: "Rien",
					release_date: "2014",
					release_date_precision: "year",
					total_tracks: 5,
					type: "album",
					uri: "spotify:album:3X3CVT39Ussi642EiwujeJ",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/1FiWBzw15KbR9amOb1Xnxp",
						},
						href: "https://api.spotify.com/v1/artists/1FiWBzw15KbR9amOb1Xnxp",
						id: "1FiWBzw15KbR9amOb1Xnxp",
						name: "Odezenne",
						type: "artist",
						uri: "spotify:artist:1FiWBzw15KbR9amOb1Xnxp",
					},
				],
				disc_number: 1,
				duration_ms: 242413,
				explicit: true,
				external_ids: {
					isrc: "FR9W11405080",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/4fCQ9kCbgyhQY5R4s9Tx6l",
				},
				href: "https://api.spotify.com/v1/tracks/4fCQ9kCbgyhQY5R4s9Tx6l",
				id: "4fCQ9kCbgyhQY5R4s9Tx6l",
				is_local: false,
				is_playable: true,
				name: "Je veux te baiser",
				popularity: 48,
				preview_url: "https://p.scdn.co/mp3-preview/9ca0fc8a7a82afa6e786910c05d7bc2190b80817?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 3,
				type: "track",
				uri: "spotify:track:4fCQ9kCbgyhQY5R4s9Tx6l",
			},
			played_at: "2022-03-14T09:49:43.883Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZF1Epu1JGzhK6VOQ",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZF1Epu1JGzhK6VOQ",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZF1Epu1JGzhK6VOQ",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/7uPtq7pWuE0KXVHaT8fPxw",
							},
							href: "https://api.spotify.com/v1/artists/7uPtq7pWuE0KXVHaT8fPxw",
							id: "7uPtq7pWuE0KXVHaT8fPxw",
							name: "Aufgang",
							type: "artist",
							uri: "spotify:artist:7uPtq7pWuE0KXVHaT8fPxw",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/4BKGq4celpHoOLmcJVLFgb",
					},
					href: "https://api.spotify.com/v1/albums/4BKGq4celpHoOLmcJVLFgb",
					id: "4BKGq4celpHoOLmcJVLFgb",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2732a5645444330c500ae602f1b",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e022a5645444330c500ae602f1b",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048512a5645444330c500ae602f1b",
							width: 64,
						},
					],
					name: "Broad Ways",
					release_date: "2021-11-19",
					release_date_precision: "day",
					total_tracks: 11,
					type: "album",
					uri: "spotify:album:4BKGq4celpHoOLmcJVLFgb",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/7uPtq7pWuE0KXVHaT8fPxw",
						},
						href: "https://api.spotify.com/v1/artists/7uPtq7pWuE0KXVHaT8fPxw",
						id: "7uPtq7pWuE0KXVHaT8fPxw",
						name: "Aufgang",
						type: "artist",
						uri: "spotify:artist:7uPtq7pWuE0KXVHaT8fPxw",
					},
				],
				disc_number: 1,
				duration_ms: 260190,
				explicit: false,
				external_ids: {
					isrc: "FR9W11824502",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/5PZQ3HxmKsiDlW1MoDqtwl",
				},
				href: "https://api.spotify.com/v1/tracks/5PZQ3HxmKsiDlW1MoDqtwl",
				id: "5PZQ3HxmKsiDlW1MoDqtwl",
				is_local: false,
				is_playable: true,
				name: "Je vous aime",
				popularity: 39,
				preview_url: "https://p.scdn.co/mp3-preview/f1a6fae7fa3adf7162250e40b7af5768e4b310dc?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 2,
				type: "track",
				uri: "spotify:track:5PZQ3HxmKsiDlW1MoDqtwl",
			},
			played_at: "2022-03-14T09:45:40.876Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZF1Epu1JGzhK6VOQ",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZF1Epu1JGzhK6VOQ",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZF1Epu1JGzhK6VOQ",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/08E1gIXEm5SDflPh1tGQ2Z",
							},
							href: "https://api.spotify.com/v1/artists/08E1gIXEm5SDflPh1tGQ2Z",
							id: "08E1gIXEm5SDflPh1tGQ2Z",
							name: "Avia",
							type: "artist",
							uri: "spotify:artist:08E1gIXEm5SDflPh1tGQ2Z",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/0oFO0MoXtishcM7VY7JrBt",
					},
					href: "https://api.spotify.com/v1/albums/0oFO0MoXtishcM7VY7JrBt",
					id: "0oFO0MoXtishcM7VY7JrBt",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27365012bca37edec6bd9ec4868",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0265012bca37edec6bd9ec4868",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485165012bca37edec6bd9ec4868",
							width: 64,
						},
					],
					name: "Inside Chanel (Original Motion Picture Soundtrack)",
					release_date: "2017-10-13",
					release_date_precision: "day",
					total_tracks: 16,
					type: "album",
					uri: "spotify:album:0oFO0MoXtishcM7VY7JrBt",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/08E1gIXEm5SDflPh1tGQ2Z",
						},
						href: "https://api.spotify.com/v1/artists/08E1gIXEm5SDflPh1tGQ2Z",
						id: "08E1gIXEm5SDflPh1tGQ2Z",
						name: "Avia",
						type: "artist",
						uri: "spotify:artist:08E1gIXEm5SDflPh1tGQ2Z",
					},
				],
				disc_number: 1,
				duration_ms: 274851,
				explicit: false,
				external_ids: {
					isrc: "FR8E71705600",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/4iETqt32WQpeACfWnqiEYm",
				},
				href: "https://api.spotify.com/v1/tracks/4iETqt32WQpeACfWnqiEYm",
				id: "4iETqt32WQpeACfWnqiEYm",
				is_local: false,
				is_playable: true,
				name: "Chanel and the Diamond",
				popularity: 35,
				preview_url: "https://p.scdn.co/mp3-preview/5d831b7ba984e87deabb164916b61c90b5b85924?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 2,
				type: "track",
				uri: "spotify:track:4iETqt32WQpeACfWnqiEYm",
			},
			played_at: "2022-03-14T09:40:58.749Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZEVXcF4fZc8ox9PV",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZEVXcF4fZc8ox9PV",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZEVXcF4fZc8ox9PV",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/7mdh9mziYyoyx5akHNGFte",
							},
							href: "https://api.spotify.com/v1/artists/7mdh9mziYyoyx5akHNGFte",
							id: "7mdh9mziYyoyx5akHNGFte",
							name: "Autumn",
							type: "artist",
							uri: "spotify:artist:7mdh9mziYyoyx5akHNGFte",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/71la4b5wxQnCc59LSyYOJ8",
					},
					href: "https://api.spotify.com/v1/albums/71la4b5wxQnCc59LSyYOJ8",
					id: "71la4b5wxQnCc59LSyYOJ8",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273916eed1168e5fba3cbe26ee9",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02916eed1168e5fba3cbe26ee9",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851916eed1168e5fba3cbe26ee9",
							width: 64,
						},
					],
					name: "Not Afraid to Die",
					release_date: "1982-04-20",
					release_date_precision: "day",
					total_tracks: 13,
					type: "album",
					uri: "spotify:album:71la4b5wxQnCc59LSyYOJ8",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/7mdh9mziYyoyx5akHNGFte",
						},
						href: "https://api.spotify.com/v1/artists/7mdh9mziYyoyx5akHNGFte",
						id: "7mdh9mziYyoyx5akHNGFte",
						name: "Autumn",
						type: "artist",
						uri: "spotify:artist:7mdh9mziYyoyx5akHNGFte",
					},
				],
				disc_number: 1,
				duration_ms: 277525,
				explicit: false,
				external_ids: {
					isrc: "BED338200053",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/5s7lnchcPIv5CVnzueSQND",
				},
				href: "https://api.spotify.com/v1/tracks/5s7lnchcPIv5CVnzueSQND",
				id: "5s7lnchcPIv5CVnzueSQND",
				is_local: false,
				is_playable: true,
				name: "Night In June",
				popularity: 38,
				preview_url: "https://p.scdn.co/mp3-preview/d5f4f9ea32fda8adbfc33041f03555e03f0bfd7e?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 4,
				type: "track",
				uri: "spotify:track:5s7lnchcPIv5CVnzueSQND",
			},
			played_at: "2022-03-14T09:33:52.582Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZEVXcF4fZc8ox9PV",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZEVXcF4fZc8ox9PV",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZEVXcF4fZc8ox9PV",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/08E1gIXEm5SDflPh1tGQ2Z",
							},
							href: "https://api.spotify.com/v1/artists/08E1gIXEm5SDflPh1tGQ2Z",
							id: "08E1gIXEm5SDflPh1tGQ2Z",
							name: "Avia",
							type: "artist",
							uri: "spotify:artist:08E1gIXEm5SDflPh1tGQ2Z",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/0oFO0MoXtishcM7VY7JrBt",
					},
					href: "https://api.spotify.com/v1/albums/0oFO0MoXtishcM7VY7JrBt",
					id: "0oFO0MoXtishcM7VY7JrBt",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27365012bca37edec6bd9ec4868",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0265012bca37edec6bd9ec4868",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485165012bca37edec6bd9ec4868",
							width: 64,
						},
					],
					name: "Inside Chanel (Original Motion Picture Soundtrack)",
					release_date: "2017-10-13",
					release_date_precision: "day",
					total_tracks: 16,
					type: "album",
					uri: "spotify:album:0oFO0MoXtishcM7VY7JrBt",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/08E1gIXEm5SDflPh1tGQ2Z",
						},
						href: "https://api.spotify.com/v1/artists/08E1gIXEm5SDflPh1tGQ2Z",
						id: "08E1gIXEm5SDflPh1tGQ2Z",
						name: "Avia",
						type: "artist",
						uri: "spotify:artist:08E1gIXEm5SDflPh1tGQ2Z",
					},
				],
				disc_number: 1,
				duration_ms: 274851,
				explicit: false,
				external_ids: {
					isrc: "FR8E71705600",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/4iETqt32WQpeACfWnqiEYm",
				},
				href: "https://api.spotify.com/v1/tracks/4iETqt32WQpeACfWnqiEYm",
				id: "4iETqt32WQpeACfWnqiEYm",
				is_local: false,
				is_playable: true,
				name: "Chanel and the Diamond",
				popularity: 35,
				preview_url: "https://p.scdn.co/mp3-preview/5d831b7ba984e87deabb164916b61c90b5b85924?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 2,
				type: "track",
				uri: "spotify:track:4iETqt32WQpeACfWnqiEYm",
			},
			played_at: "2022-03-14T09:28:53.954Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZEVXcF4fZc8ox9PV",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZEVXcF4fZc8ox9PV",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZEVXcF4fZc8ox9PV",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/4nUBBtLtzqZGpdiynTJbYJ",
							},
							href: "https://api.spotify.com/v1/artists/4nUBBtLtzqZGpdiynTJbYJ",
							id: "4nUBBtLtzqZGpdiynTJbYJ",
							name: "The Voidz",
							type: "artist",
							uri: "spotify:artist:4nUBBtLtzqZGpdiynTJbYJ",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/5LlMvH379KZHgRIL5BrTOg",
					},
					href: "https://api.spotify.com/v1/albums/5LlMvH379KZHgRIL5BrTOg",
					id: "5LlMvH379KZHgRIL5BrTOg",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273d8e1c5b2d1cd14c8d0433d47",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02d8e1c5b2d1cd14c8d0433d47",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851d8e1c5b2d1cd14c8d0433d47",
							width: 64,
						},
					],
					name: "Tyranny",
					release_date: "2014-09-23",
					release_date_precision: "day",
					total_tracks: 12,
					type: "album",
					uri: "spotify:album:5LlMvH379KZHgRIL5BrTOg",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/4nUBBtLtzqZGpdiynTJbYJ",
						},
						href: "https://api.spotify.com/v1/artists/4nUBBtLtzqZGpdiynTJbYJ",
						id: "4nUBBtLtzqZGpdiynTJbYJ",
						name: "The Voidz",
						type: "artist",
						uri: "spotify:artist:4nUBBtLtzqZGpdiynTJbYJ",
					},
				],
				disc_number: 1,
				duration_ms: 656901,
				explicit: true,
				external_ids: {
					isrc: "QMKBG1400032",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/3YB9cvd668HXBEq8rbBW8P",
				},
				href: "https://api.spotify.com/v1/tracks/3YB9cvd668HXBEq8rbBW8P",
				id: "3YB9cvd668HXBEq8rbBW8P",
				is_local: false,
				is_playable: true,
				name: "Human Sadness",
				popularity: 57,
				preview_url: "https://p.scdn.co/mp3-preview/996672acb96d3ade4ce1300f74fee2f172ada292?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 4,
				type: "track",
				uri: "spotify:track:3YB9cvd668HXBEq8rbBW8P",
			},
			played_at: "2022-03-14T08:49:32.866Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZEVXcF4fZc8ox9PV",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZEVXcF4fZc8ox9PV",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZEVXcF4fZc8ox9PV",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/5Xp7zNOOxpxlX3qfqFFSk1",
							},
							href: "https://api.spotify.com/v1/artists/5Xp7zNOOxpxlX3qfqFFSk1",
							id: "5Xp7zNOOxpxlX3qfqFFSk1",
							name: "Alex Heflin",
							type: "artist",
							uri: "spotify:artist:5Xp7zNOOxpxlX3qfqFFSk1",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/3YnS3E2crSpmVe7gOqD5kO",
					},
					href: "https://api.spotify.com/v1/albums/3YnS3E2crSpmVe7gOqD5kO",
					id: "3YnS3E2crSpmVe7gOqD5kO",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2739e78eae938c6f9f81299f185",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e029e78eae938c6f9f81299f185",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048519e78eae938c6f9f81299f185",
							width: 64,
						},
					],
					name: "Retro",
					release_date: "2019-09-25",
					release_date_precision: "day",
					total_tracks: 20,
					type: "album",
					uri: "spotify:album:3YnS3E2crSpmVe7gOqD5kO",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/5Xp7zNOOxpxlX3qfqFFSk1",
						},
						href: "https://api.spotify.com/v1/artists/5Xp7zNOOxpxlX3qfqFFSk1",
						id: "5Xp7zNOOxpxlX3qfqFFSk1",
						name: "Alex Heflin",
						type: "artist",
						uri: "spotify:artist:5Xp7zNOOxpxlX3qfqFFSk1",
					},
				],
				disc_number: 1,
				duration_ms: 175210,
				explicit: false,
				external_ids: {
					isrc: "QZGWW1953995",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/0nRwV9JcQcIr6bvrID9C1f",
				},
				href: "https://api.spotify.com/v1/tracks/0nRwV9JcQcIr6bvrID9C1f",
				id: "0nRwV9JcQcIr6bvrID9C1f",
				is_local: false,
				is_playable: true,
				name: 'Back in the 90\'s (From "BoJack Horseman")',
				popularity: 34,
				preview_url: "https://p.scdn.co/mp3-preview/641b8a12fe0753f9378aea176d2f2c2727b20c68?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 4,
				type: "track",
				uri: "spotify:track:0nRwV9JcQcIr6bvrID9C1f",
			},
			played_at: "2022-03-14T08:38:00.048Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZEVXcF4fZc8ox9PV",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZEVXcF4fZc8ox9PV",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZEVXcF4fZc8ox9PV",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/2IlTe9Gm5w5qrt2kKdOvAh",
							},
							href: "https://api.spotify.com/v1/artists/2IlTe9Gm5w5qrt2kKdOvAh",
							id: "2IlTe9Gm5w5qrt2kKdOvAh",
							name: "Jonathan Bree",
							type: "artist",
							uri: "spotify:artist:2IlTe9Gm5w5qrt2kKdOvAh",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/7mxGl0T5uIfyOpK27dF0de",
					},
					href: "https://api.spotify.com/v1/albums/7mxGl0T5uIfyOpK27dF0de",
					id: "7mxGl0T5uIfyOpK27dF0de",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273e92759cc5563c390bdca360b",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02e92759cc5563c390bdca360b",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851e92759cc5563c390bdca360b",
							width: 64,
						},
					],
					name: "After the Curtains Close",
					release_date: "2020-07-17",
					release_date_precision: "day",
					total_tracks: 12,
					type: "album",
					uri: "spotify:album:7mxGl0T5uIfyOpK27dF0de",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/2IlTe9Gm5w5qrt2kKdOvAh",
						},
						href: "https://api.spotify.com/v1/artists/2IlTe9Gm5w5qrt2kKdOvAh",
						id: "2IlTe9Gm5w5qrt2kKdOvAh",
						name: "Jonathan Bree",
						type: "artist",
						uri: "spotify:artist:2IlTe9Gm5w5qrt2kKdOvAh",
					},
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/6SrA4711bML5NvPO13Tr6t",
						},
						href: "https://api.spotify.com/v1/artists/6SrA4711bML5NvPO13Tr6t",
						id: "6SrA4711bML5NvPO13Tr6t",
						name: "Princess Chelsea",
						type: "artist",
						uri: "spotify:artist:6SrA4711bML5NvPO13Tr6t",
					},
				],
				disc_number: 1,
				duration_ms: 199833,
				explicit: false,
				external_ids: {
					isrc: "NZLC02000001",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/1cTsS3ba74ZLvuhLC5ZJAf",
				},
				href: "https://api.spotify.com/v1/tracks/1cTsS3ba74ZLvuhLC5ZJAf",
				id: "1cTsS3ba74ZLvuhLC5ZJAf",
				is_local: false,
				is_playable: true,
				name: "Kiss My Lips",
				popularity: 36,
				preview_url: "https://p.scdn.co/mp3-preview/f1524bc121805902d5739cd3132220404d8ab82d?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 4,
				type: "track",
				uri: "spotify:track:1cTsS3ba74ZLvuhLC5ZJAf",
			},
			played_at: "2022-03-14T08:34:33.239Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZEVXcF4fZc8ox9PV",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZEVXcF4fZc8ox9PV",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZEVXcF4fZc8ox9PV",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/0epOFNiUfyON9EYx7Tpr6V",
							},
							href: "https://api.spotify.com/v1/artists/0epOFNiUfyON9EYx7Tpr6V",
							id: "0epOFNiUfyON9EYx7Tpr6V",
							name: "The Strokes",
							type: "artist",
							uri: "spotify:artist:0epOFNiUfyON9EYx7Tpr6V",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/4WnkQO4xD9ljQooB3VIxCV",
					},
					href: "https://api.spotify.com/v1/albums/4WnkQO4xD9ljQooB3VIxCV",
					id: "4WnkQO4xD9ljQooB3VIxCV",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273f07ef193e0bb6a238ea37f0a",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02f07ef193e0bb6a238ea37f0a",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851f07ef193e0bb6a238ea37f0a",
							width: 64,
						},
					],
					name: "Comedown Machine",
					release_date: "2013-03-25",
					release_date_precision: "day",
					total_tracks: 11,
					type: "album",
					uri: "spotify:album:4WnkQO4xD9ljQooB3VIxCV",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/0epOFNiUfyON9EYx7Tpr6V",
						},
						href: "https://api.spotify.com/v1/artists/0epOFNiUfyON9EYx7Tpr6V",
						id: "0epOFNiUfyON9EYx7Tpr6V",
						name: "The Strokes",
						type: "artist",
						uri: "spotify:artist:0epOFNiUfyON9EYx7Tpr6V",
					},
				],
				disc_number: 1,
				duration_ms: 204773,
				explicit: false,
				external_ids: {
					isrc: "USRC11300085",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/3Y4rUyw7XBCK6hGHCOt6rp",
				},
				href: "https://api.spotify.com/v1/tracks/3Y4rUyw7XBCK6hGHCOt6rp",
				id: "3Y4rUyw7XBCK6hGHCOt6rp",
				is_local: false,
				is_playable: true,
				name: "Call It Fate, Call It Karma",
				popularity: 74,
				preview_url: "https://p.scdn.co/mp3-preview/e0d5681cf0c84e2407dac7837480dfa4ca6a54d1?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 11,
				type: "track",
				uri: "spotify:track:3Y4rUyw7XBCK6hGHCOt6rp",
			},
			played_at: "2022-03-14T08:31:12.781Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZEVXcF4fZc8ox9PV",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZEVXcF4fZc8ox9PV",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZEVXcF4fZc8ox9PV",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/3wFP2UY6scUTvqgucLALQq",
							},
							href: "https://api.spotify.com/v1/artists/3wFP2UY6scUTvqgucLALQq",
							id: "3wFP2UY6scUTvqgucLALQq",
							name: "Black Box Revelation",
							type: "artist",
							uri: "spotify:artist:3wFP2UY6scUTvqgucLALQq",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/2pIbJpXgfMI7QC344TzS3e",
					},
					href: "https://api.spotify.com/v1/albums/2pIbJpXgfMI7QC344TzS3e",
					id: "2pIbJpXgfMI7QC344TzS3e",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273d84e1c75b37dc93929c4fd96",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02d84e1c75b37dc93929c4fd96",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851d84e1c75b37dc93929c4fd96",
							width: 64,
						},
					],
					name: "Tattooed Smiles",
					release_date: "2018-10-26",
					release_date_precision: "day",
					total_tracks: 10,
					type: "album",
					uri: "spotify:album:2pIbJpXgfMI7QC344TzS3e",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/3wFP2UY6scUTvqgucLALQq",
						},
						href: "https://api.spotify.com/v1/artists/3wFP2UY6scUTvqgucLALQq",
						id: "3wFP2UY6scUTvqgucLALQq",
						name: "Black Box Revelation",
						type: "artist",
						uri: "spotify:artist:3wFP2UY6scUTvqgucLALQq",
					},
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/2pHk4wAmL7ofTAuvCIUWtv",
						},
						href: "https://api.spotify.com/v1/artists/2pHk4wAmL7ofTAuvCIUWtv",
						id: "2pHk4wAmL7ofTAuvCIUWtv",
						name: "Roméo Elvis",
						type: "artist",
						uri: "spotify:artist:2pHk4wAmL7ofTAuvCIUWtv",
					},
				],
				disc_number: 1,
				duration_ms: 371520,
				explicit: false,
				external_ids: {
					isrc: "BECS61800010",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/6XPDf43eU8iOKjCBwpQKDk",
				},
				href: "https://api.spotify.com/v1/tracks/6XPDf43eU8iOKjCBwpQKDk",
				id: "6XPDf43eU8iOKjCBwpQKDk",
				is_local: false,
				is_playable: true,
				name: "Laisser partir",
				popularity: 36,
				preview_url: "https://p.scdn.co/mp3-preview/e5303d03e2148c0212c0217772fd4d94b3d05bcb?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 10,
				type: "track",
				uri: "spotify:track:6XPDf43eU8iOKjCBwpQKDk",
			},
			played_at: "2022-03-14T08:26:09.535Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZEVXcF4fZc8ox9PV",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZEVXcF4fZc8ox9PV",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZEVXcF4fZc8ox9PV",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/6UUrUCIZtQeOf8tC0WuzRy",
							},
							href: "https://api.spotify.com/v1/artists/6UUrUCIZtQeOf8tC0WuzRy",
							id: "6UUrUCIZtQeOf8tC0WuzRy",
							name: "Sigur Rós",
							type: "artist",
							uri: "spotify:artist:6UUrUCIZtQeOf8tC0WuzRy",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/1DMMv1Kmoli3Y9fVEZDUVC",
					},
					href: "https://api.spotify.com/v1/albums/1DMMv1Kmoli3Y9fVEZDUVC",
					id: "1DMMv1Kmoli3Y9fVEZDUVC",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b2735155b8344b7747e9708bd16d",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e025155b8344b7747e9708bd16d",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d000048515155b8344b7747e9708bd16d",
							width: 64,
						},
					],
					name: "Ágætis byrjun",
					release_date: "1999-06-12",
					release_date_precision: "day",
					total_tracks: 10,
					type: "album",
					uri: "spotify:album:1DMMv1Kmoli3Y9fVEZDUVC",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/6UUrUCIZtQeOf8tC0WuzRy",
						},
						href: "https://api.spotify.com/v1/artists/6UUrUCIZtQeOf8tC0WuzRy",
						id: "6UUrUCIZtQeOf8tC0WuzRy",
						name: "Sigur Rós",
						type: "artist",
						uri: "spotify:artist:6UUrUCIZtQeOf8tC0WuzRy",
					},
				],
				disc_number: 1,
				duration_ms: 606850,
				explicit: false,
				external_ids: {
					isrc: "GBDCA9900067",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/07eGxuz8bL6QMsRqEe1Adu",
				},
				href: "https://api.spotify.com/v1/tracks/07eGxuz8bL6QMsRqEe1Adu",
				id: "07eGxuz8bL6QMsRqEe1Adu",
				is_local: false,
				is_playable: true,
				name: "Svefn-g-englar",
				popularity: 60,
				preview_url: "https://p.scdn.co/mp3-preview/e2d82aa6aaf1e4cc3588a1d840701832df412d50?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 2,
				type: "track",
				uri: "spotify:track:07eGxuz8bL6QMsRqEe1Adu",
			},
			played_at: "2022-03-14T08:17:59.024Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZEVXcF4fZc8ox9PV",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZEVXcF4fZc8ox9PV",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZEVXcF4fZc8ox9PV",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/3VcO8Z1ws3siQr2XTZBr4e",
							},
							href: "https://api.spotify.com/v1/artists/3VcO8Z1ws3siQr2XTZBr4e",
							id: "3VcO8Z1ws3siQr2XTZBr4e",
							name: "Pep Llopis",
							type: "artist",
							uri: "spotify:artist:3VcO8Z1ws3siQr2XTZBr4e",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/4mZmQu38Uh8I45AvG5qA9a",
					},
					href: "https://api.spotify.com/v1/albums/4mZmQu38Uh8I45AvG5qA9a",
					id: "4mZmQu38Uh8I45AvG5qA9a",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b273bd9a7112dcf5d888c7728041",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e02bd9a7112dcf5d888c7728041",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d00004851bd9a7112dcf5d888c7728041",
							width: 64,
						},
					],
					name: "Poiemusia La Nau Dels Argonautes",
					release_date: "2017-06-16",
					release_date_precision: "day",
					total_tracks: 5,
					type: "album",
					uri: "spotify:album:4mZmQu38Uh8I45AvG5qA9a",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/3VcO8Z1ws3siQr2XTZBr4e",
						},
						href: "https://api.spotify.com/v1/artists/3VcO8Z1ws3siQr2XTZBr4e",
						id: "3VcO8Z1ws3siQr2XTZBr4e",
						name: "Pep Llopis",
						type: "artist",
						uri: "spotify:artist:3VcO8Z1ws3siQr2XTZBr4e",
					},
				],
				disc_number: 1,
				duration_ms: 358582,
				explicit: false,
				external_ids: {
					isrc: "QZ3GN1700003",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/09b0qw7zbnzZE5W23HQbgJ",
				},
				href: "https://api.spotify.com/v1/tracks/09b0qw7zbnzZE5W23HQbgJ",
				id: "09b0qw7zbnzZE5W23HQbgJ",
				is_local: false,
				is_playable: true,
				name: "Jardins Aquatics",
				popularity: 39,
				preview_url: "https://p.scdn.co/mp3-preview/81568f3f95e0b88c8a115df2717c869d03aff389?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 3,
				type: "track",
				uri: "spotify:track:09b0qw7zbnzZE5W23HQbgJ",
			},
			played_at: "2022-03-14T08:07:51.592Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZEVXcF4fZc8ox9PV",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZEVXcF4fZc8ox9PV",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZEVXcF4fZc8ox9PV",
			},
		},
		{
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify: "https://open.spotify.com/artist/2ool5NLv8gVkYz20jGYbZo",
							},
							href: "https://api.spotify.com/v1/artists/2ool5NLv8gVkYz20jGYbZo",
							id: "2ool5NLv8gVkYz20jGYbZo",
							name: "Animali",
							type: "artist",
							uri: "spotify:artist:2ool5NLv8gVkYz20jGYbZo",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/5hoq18Ppj9garVPQFqGW7E",
					},
					href: "https://api.spotify.com/v1/albums/5hoq18Ppj9garVPQFqGW7E",
					id: "5hoq18Ppj9garVPQFqGW7E",
					images: [
						{
							height: 640,
							url: "https://i.scdn.co/image/ab67616d0000b27320932634be7b7e698ac93825",
							width: 640,
						},
						{
							height: 300,
							url: "https://i.scdn.co/image/ab67616d00001e0220932634be7b7e698ac93825",
							width: 300,
						},
						{
							height: 64,
							url: "https://i.scdn.co/image/ab67616d0000485120932634be7b7e698ac93825",
							width: 64,
						},
					],
					name: "Mary D. Kay",
					release_date: "2020-06-12",
					release_date_precision: "day",
					total_tracks: 8,
					type: "album",
					uri: "spotify:album:5hoq18Ppj9garVPQFqGW7E",
				},
				artists: [
					{
						external_urls: {
							spotify: "https://open.spotify.com/artist/2ool5NLv8gVkYz20jGYbZo",
						},
						href: "https://api.spotify.com/v1/artists/2ool5NLv8gVkYz20jGYbZo",
						id: "2ool5NLv8gVkYz20jGYbZo",
						name: "Animali",
						type: "artist",
						uri: "spotify:artist:2ool5NLv8gVkYz20jGYbZo",
					},
				],
				disc_number: 1,
				duration_ms: 364861,
				explicit: false,
				external_ids: {
					isrc: "FR9W11926356",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/2IQQRB3MSdWM3K8CUBtuCf",
				},
				href: "https://api.spotify.com/v1/tracks/2IQQRB3MSdWM3K8CUBtuCf",
				id: "2IQQRB3MSdWM3K8CUBtuCf",
				is_local: false,
				is_playable: true,
				name: "Genetic Bomb",
				popularity: 38,
				preview_url: "https://p.scdn.co/mp3-preview/bc5045f02054935b98dcebbaa44dd5aa5d9567c7?cid=545cac6976dc48ce9471fd8db5aa73c2",
				track_number: 2,
				type: "track",
				uri: "spotify:track:2IQQRB3MSdWM3K8CUBtuCf",
			},
			played_at: "2022-03-14T08:01:52.392Z",
			context: {
				external_urls: {
					spotify: "https://open.spotify.com/playlist/37i9dQZEVXcF4fZc8ox9PV",
				},
				href: "https://api.spotify.com/v1/playlists/37i9dQZEVXcF4fZc8ox9PV",
				type: "playlist",
				uri: "spotify:playlist:37i9dQZEVXcF4fZc8ox9PV",
			},
		},
	],
	next: "https://api.spotify.com/v1/me/player/recently-played?before=1647244912392&limit=50",
	cursors: {
		after: "1647267250183",
		before: "1647244912392",
	},
	limit: 50,
	href: "https://api.spotify.com/v1/me/player/recently-played?limit=50",
};

let likedArray = [
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	false,
	false,
	false,
	false,
	true,
	true,
	true,
	false,
	false,
	true,
	true,
	false,
	true,
	true,
	false,
	true,
	true,
	true,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
];

RecentPlayed();

/* 
 * Function: RecentPlayed: Get the 50 most recently played tracks
 *	para:	none
 *	return:	none
 */
function RecentPlayed() {
	//Get the HTLM Page's section and empty it
	let section = document.getElementsByTagName("section")[0];
	section.innerHTML = `<article>
	<div class="trackInfo">
		<p>
			<span class="title">This is a version with sample data</span><br>
			<a href="/historify">Click here to see a version with live data</a>
		</p>
	</div>
	</article>`;

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
		});

		likeBtn[i].addEventListener("click", function () {
			if (img.getAttribute("src") === "img/likeable.svg") {
				console.log("Added to Liked Songs: ", id);
        		ClickMessage("Added to Liked Songs", i);

				likeSrc = "img/likeable.svg";
			}
			else {
				console.log("Remove from Liked Songs: ", id);
        		ClickMessage("Remove from Liked Songs", i);

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
		});
		document.querySelectorAll("div.button")[i].style.visibility = "visible";
	}
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


//* Author: JABK /// Creation: 05.01.2021 /// Last Update: 14.03.2022 /// Version: 1.2

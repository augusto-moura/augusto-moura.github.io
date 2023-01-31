export const getTraktWatchHistory = () => {
	const watchHistoryUrl = 'https://api.trakt.tv/users/augustomoura/history/';
	return fetch(watchHistoryUrl, {
		headers: new Headers({
			'User-agent': 'Mozilla/4.0 Custom User Agent',
			'Content-type': 'application/json',
			'trakt-api-key': 'de2db81c275bfab4cc9cc24128bf20b7ef631bfc6b90f36d43bd0cc51afb0d10',
			'trakt-api-version': '2',
		})
	})
	.then(response => response.json())
	.then(data => {
		return data;
	});
}
Get user's watch history: https://api.trakt.tv/users/augustomoura/history/ with headers:
> Content-type  
> trakt-api-key  
> trakt-api-version

To get show/movie image, hit the TMDB api: https://api.themoviedb.org/3/tv/92749?api_key=a82d3b29a87fcc9df6febda587b69445&language=pt-BR , then get poster_path.

Example poster URL:  
https://image.tmdb.org/t/p/w200/tkc7AVyUoG9VEeDvukN0TVqa24C.jpg

TMDB Attribution: https://www.themoviedb.org/settings/api/new?type=developer 

If possible, cache API calls, because the results rarely change.

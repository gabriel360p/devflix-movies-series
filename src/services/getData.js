import Api from "./axios";

export const getMovie = async () => {
    try {
        const { data: movieData } = await Api.get('/movie/popular')
        return movieData.results[1];
    } catch (error) {
        console.error('Nao foi possivel carregar o filme.', error);
    }
}

export const getMovies = async () => {
    try {
        const { data: topMovies } = await Api.get('/movie/top_rated')
        return topMovies;
    } catch (error) {
        console.error('Nao foi possivel carregar os filmes.', error);
    }
}

export const getSeries = async () => {
    try {
        const { data: topSeries } = await Api.get('/tv/top_rated')
        return topSeries;

    } catch (error) {
        console.error('Nao foi possivel carregar as series.', error);
    }
}


export const getActors = async () => {
    try {
        const { data: topActors } = await Api.get('/person/popular')
        return topActors;
    } catch (error) {
        console.error('Nao foi possivel carregar os atores.', error);
    }
}



export const getTrailer = async (movieId) => {
    try {
        const { data } = await Api.get(`/movie/${movieId}/videos`)
        const dataTrailer = [data.results, data.results[0].key]
        return dataTrailer;
    } catch (error) {
        console.error('Nao foi possivel carregar o trailer.', error);
    }
}



export const getAllTrailer = async (movieId) => {
    try {
        const { data } = await Api.get(`/movie/${movieId}/videos`)
        return data.results;
    } catch (error) {
        console.error('Nao foi possivel carregar os trailers.', error);
    }
}


export const getMovieCredits = async (movieId) => {
    try {
        const { data: { cast } } = await Api.get(`/movie/${movieId}/credits`)
        // const dataTrailer = [data.results, data.results[0].key]
        // return dataTrailer;
        return cast;
    } catch (error) {
        console.error('Nao foi possivel carregar os creditos.', error);
    }
}

export const getMovieSimilar = async (movieId) => {
    try {
        const { data } = await Api.get(`/movie/${movieId}/similar`)
        // const dataTrailer = [data.results, data.results[0].key]
        // return dataTrailer;
        return data;
    } catch (error) {
        console.error('Nao foi possivel carregar os filmes similares.', error);
    }
}
export const getMovieById = async (movieId) => {
    try {
        const { data } = await Api.get(`/movie/${movieId}`)
        return data;
    } catch (error) {
        console.error('Nao foi possivel carregar os detalhes do filme.', error);
    }
}

export const getContentByGenre = async (contentType, genreId) => {
    try {
        const { data } = await Api.get(`/discover/${contentType}`, {
            params: { with_genres: genreId, sort_by: 'popularity.desc' }
        });
        return data;
    } catch (error) {
        console.error('Nao foi possivel carregar esta categoria.', error);
        return { results: [] };
    }
}

export const getFeaturedContent = async (contentType) => {
    try {
        const endpoint = contentType === 'tv' ? '/tv/on_the_air' : '/movie/now_playing';
        const { data } = await Api.get(endpoint);
        return data.results?.[0];
    } catch (error) {
        console.error('Nao foi possivel carregar o destaque.', error);
        return null;
    }
}

export const getContentDetails = async (contentType, contentId) => {
    try {
        const { data } = await Api.get(`/${contentType}/${contentId}`);
        return data;
    } catch (error) {
        console.error('Nao foi possivel carregar os detalhes.', error);
    }
}

export const getContentVideos = async (contentType, contentId) => {
    try {
        const { data } = await Api.get(`/${contentType}/${contentId}/videos`);
        return data.results || [];
    } catch (error) {
        console.error('Nao foi possivel carregar os trailers.', error);
        return [];
    }
}

export const getContentCredits = async (contentType, contentId) => {
    try {
        const { data } = await Api.get(`/${contentType}/${contentId}/credits`);
        return data.cast || [];
    } catch (error) {
        console.error('Nao foi possivel carregar os creditos.', error);
        return [];
    }
}

export const getContentSimilar = async (contentType, contentId) => {
    try {
        const { data } = await Api.get(`/${contentType}/${contentId}/similar`);
        return data;
    } catch (error) {
        console.error('Nao foi possivel carregar conteudos similares.', error);
        return { results: [] };
    }
}

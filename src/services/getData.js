import Api from "./axios";

export const getMovie = async () => {
    try {
        const { data: movieData } = await Api.get('/movie/popular')
        return movieData.results[1];
    } catch (error) {
        const errors = error;
    }
}

export const getMovies = async () => {
    try {
        const { data: topMovies } = await Api.get('/movie/top_rated')
        return topMovies;
    } catch (error) {
        const errors = error;
    }
}

export const getSeries = async () => {
    try {
        const { data: topSeries } = await Api.get('/tv/top_rated')
        return topSeries;

    } catch (error) {
        const errors = error;
    }
}


export const getActors = async () => {
    try {
        const { data: topActors } = await Api.get('/person/popular')
        return topActors;
    } catch (error) {
        const errors = error;
    }
}



export const getTrailer = async (movieId) => {
    try {
        const { data } = await Api.get(`/movie/${movieId}/videos`)
        const dataTrailer = [data.results, data.results[0].key]
        return dataTrailer;
    } catch (error) {
        const errors = error;
    }
}



export const getAllTrailer = async (movieId) => {
    try {
        const { data } = await Api.get(`/movie/${movieId}/videos`)
        return data.results;
    } catch (error) {
        const errors = error;
    }
}


export const getMovieCredits = async (movieId) => {
    try {
        const { data: { cast } } = await Api.get(`/movie/${movieId}/credits`)
        // const dataTrailer = [data.results, data.results[0].key]
        // return dataTrailer;
        return cast;
    } catch (error) {
        const errors = error;
    }
}

export const getMovieSimilar = async (movieId) => {
    try {
        const { data } = await Api.get(`/movie/${movieId}/similar`)
        // const dataTrailer = [data.results, data.results[0].key]
        // return dataTrailer;
        return data;
    } catch (error) {
        const errors = error;
    }
}
export const getMovieById = async (movieId) => {
    try {
        const { data } = await Api.get(`/movie/${movieId}`)
        return data;
    } catch (error) {
        const errors = error;
    }
} 
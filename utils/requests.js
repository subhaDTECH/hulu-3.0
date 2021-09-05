const API_KEY=process.env.API_KEY;

export default{
    fetchTrending: {
        title:"Trending",
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchNetflixOriginals: {
        title:"Originals",
        url:`/discover/tv?api_key=${API_KEY}&with_networks=213`
    },
    fetchTopRated: {
        title:"TopRated",
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies:{
        title:"Action",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchHorrorMovies:{
        title:"Horror",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies:{
        title:"Romance",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchDocumentaries:{
        title:'Documents',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=99`
    },
    fetchActionMovies:{
        title:"Action",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchHorrorMovies:{
        title:"Horror",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies:{
        title:"Romance",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchDocumentaries:{
        title:'Documents',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=99`
    }
    
};
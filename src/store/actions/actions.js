export const favoriMovie = (movie) => ({
  type: "FAV_MOVIE",
  payload: movie,
});



export const deleteFavMovie = (movie) => ({
    type: "DELETE_FAV_MOVIE",
    payload: movie,
}); 
    
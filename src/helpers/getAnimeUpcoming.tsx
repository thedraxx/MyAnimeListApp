import animeAPI from '../api/animeAPI';

export const getAnimeUpcoming = async () => {
  try {
    const resp = await animeAPI.get('seasons/upcoming');
    return resp.data;
  } catch (error) {
    console.log({error});
  }
};

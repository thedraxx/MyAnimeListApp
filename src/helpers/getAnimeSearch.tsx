import animeAPI from '../api/animeAPI';

export const getAnimeSearch = async () => {
  try {
    const resp = await animeAPI.get('top/anime');
    return resp.data;
  } catch (error) {
    console.log({error});
  }
};

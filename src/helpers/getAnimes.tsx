import animeAPI from '../api/animeAPI';

export const getAnimes = async () => {
  try {
    const resp = await animeAPI.get('anime/');
    return resp.data;
  } catch (error) {
    console.log({error});
  }
};

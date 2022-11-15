import animeAPI from '../api/animeAPI';

export const getAnimeTops = async () => {
  try {
    const resp = await animeAPI.get('top/anime');
    return resp.data;
  } catch (error) {
    console.log({error});
  }
};

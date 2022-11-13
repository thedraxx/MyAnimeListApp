import animeAPI from '../api/animeAPI';

export const getAnimeBanner = async (id: number) => {
  try {
    const resp = await animeAPI.get(`anime/${id}`);
    return resp.data;
  } catch (error) {
    console.log({error});
  }
};

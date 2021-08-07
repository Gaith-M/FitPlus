import { sanityClient } from '../lib/sanity';
import { setLoading, storeBlogs } from '../redux/reducers/blogs-slice';

export const fetchBlogs = async (
  query,
  params: { lang: string },
  dispatchFunction
) => {
  try {
    dispatchFunction(setLoading(true));
    let blogs = await sanityClient.fetch(query, params);
    dispatchFunction(storeBlogs(blogs));
    dispatchFunction(setLoading(false));
  } catch (e) {
    console.log(e);
  }
};

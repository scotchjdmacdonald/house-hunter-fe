
export const constructSearchUri = (searchParams) => {
  let uri = `${process.env.VUE_APP_HOUSE_HUNTER_API_BASE}search?`;
  uri += (searchParams.minPrice != null ? `minPrice=${searchParams.minSize}` : 'minPrice=0');
  uri += (searchParams.maxPrice != null ? `&maxPrice=${searchParams.maxPrice}` : '&maxPrice=6000');
  uri += (searchParams.minSize != null ? `&minSize=${searchParams.minSize}` : '');
  uri += (searchParams.bedrooms != null ? `&bedrooms=${searchParams.minBedrooms}` : '');
  uri += (searchParams.suburb != null ? `&suburb=${searchParams.suburb}` : '');

  return uri;
};

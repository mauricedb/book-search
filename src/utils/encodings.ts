// Note we don't want a "." because of the URL rewrite rules with the Azure CDN
export const decodeQuery = (query: string) =>
  query?.replace(/\+/g, ' ').replace(/•/g, '.');

export const encodeQuery = (query: string) =>
  query?.replace(/ /g, '+').replace(/\./g, '•');

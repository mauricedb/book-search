export type SearchModifier = 'everywhere' | 'intitle' | 'inauthor' | 'subject';

export type SearchInput = { criteria: string; modifier: SearchModifier };

export type SearchCriteriaParams = {
  query: string;
  field: SearchModifier;
};

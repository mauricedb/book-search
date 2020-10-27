import { SearchModifier } from '../types/search';
import assertNever from './assertNever';

const getQueryPrefix = (searchModifier: SearchModifier): string => {
  switch (searchModifier) {
    case 'everywhere':
      return '';
    case 'inauthor':
      return 'inauthor:';
    case 'intitle':
      return 'intitle:';
    case 'subject':
      return 'subject:';
    default:
      assertNever(searchModifier);
  }
  return '';
};

export default getQueryPrefix;


import { createContext } from 'react';
import { Page } from './types';

export const NavigationContext = createContext<{
  currentPage: Page;
  navigateTo: (page: Page) => void;
}>({
  currentPage: Page.HOME,
  navigateTo: () => {},
});

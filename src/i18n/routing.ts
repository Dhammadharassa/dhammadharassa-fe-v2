import {defineRouting} from 'next-intl/routing';
import { createNavigation } from "next-intl/navigation";
export const routing = defineRouting({
  
  //Bahasa Indoenesia and English is the supported locales
  locales: ['id', 'en'],
 
  // Used when no locale matches
  defaultLocale: 'id'
});
export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);

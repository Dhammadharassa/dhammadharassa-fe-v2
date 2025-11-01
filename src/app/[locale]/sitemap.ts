import type { MetadataRoute } from 'next';
//import { siteName } from '@/config/seo';
import { locales, defaultLocale } from '@/routing';


export default function sitemap(): MetadataRoute.Sitemap {
  // Use the provided domain for production
  const baseUrl = '';

  // All available routes in the application
  const paths = [
    '', 
  ];

  const entries: MetadataRoute.Sitemap = [];

  // Define page priorities and change frequencies
  const pagePriorities: Record<string, { priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = {
    '': { priority: 1.0, changeFrequency: 'daily' }, 
  };
  
  const excludePatterns = [
    // /^\/api\//,      
    // /^\/admin\//,    
    /^\/_/,          
  ];

 
  const lastModified = new Date();
  
 
  for (const locale of locales) {
    for (const path of paths) {
      const relativePath = path ? `/${path}` : '';
      const fullPath = `/${locale}${relativePath}`;
      
     
      if (excludePatterns.some(pattern => pattern.test(fullPath))) {
        continue;
      }
      
      const loc = `${baseUrl}${fullPath}`;
      const { priority: basePriority, changeFrequency } = pagePriorities[path];
      
     
      const priority = locale === defaultLocale ? basePriority : Math.max(0.1, basePriority - 0.1);
      
      entries.push({
        url: loc,
        lastModified,
        changeFrequency,
        priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}${relativePath}`])
          ),
        },
      });
    }
  }


  if (entries.length === 0) {
    console.warn('Sitemap: No entries generated. Check configuration.');
  }

  return entries;
}

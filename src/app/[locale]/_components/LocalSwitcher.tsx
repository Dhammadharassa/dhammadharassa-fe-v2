import { routing } from "@/i18n/routing";
import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "./LocalSwitcherSelect";
import Image from "next/image";

export default function LocaleSwitcher() {
  const locale = useLocale();

  
  const flagImages = {
    id: "/assets/img-indonesia-flag.png", 
    en: "/assets/img-us-flag.png"  
  };

  return (
    <div className='flex items-center'>
      {/* Ganti Globe dengan gambar bendera sesuai locale aktif */}
      <Image 
        src={flagImages[locale as keyof typeof flagImages]}
        alt={`${locale} flag`}
        width={20}
        height={15}
        className="h-5 w-5 object-cover"
      />
      
      <LocaleSwitcherSelect defaultValue={locale} label='Select a locale'>
        {routing.locales.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </LocaleSwitcherSelect>
    </div>
  );
}

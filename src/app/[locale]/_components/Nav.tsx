"use client"
import { useTranslations} from 'next-intl';
import StaggeredMenu from './ui/StaggeredMenu';





export default function Navbar() {

  const t = useTranslations("Navigation");
  const menuItems = [
  { label: `${t("AboutUs.Heading")}`, ariaLabel:`${t("AboutUs.Label")}` , link: '/' },
  { label: `${t("Projects.Heading")}`, ariaLabel: `${t("Projects.Label")}`, link: '/about' },
  { label: `${t("News.Heading")}`, ariaLabel: `${t("News.Label")}`, link: '/services' },
  { label: `${t("Merch.Heading")}`, ariaLabel: `${t("Merch.Label")}`, link: '/contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

return (
    <div style={{ height: '100vh' }}>
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#181411"
        openMenuButtonColor="#181411"
        changeMenuColorOnOpen={true}
        colors={['#24a863', '#ff7424']}
        logoUrl="/ddLogo.png"
        accentColor="#ff7424"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
        isFixed={true}
      />
    </div>
  );
}

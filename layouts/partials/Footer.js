import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import Logo from "@layouts/components/Logo";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { email, phone, location } = config.contact_info;

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-500">
      <div className="container">
        <div className="row border-t border-b border-gray-700 py-12">
          <div className="md:col-6 lg:col-3">
            <div className="transition-transform duration-300 hover:scale-105">
              <Logo />
            </div>
            {markdownify(footer_content, "p", "mt-3 text-sm text-gray-400")}
          </div>

          <div className="mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="text-lg font-semibold text-orange-400">
              Quick Links
            </h3>
            <ul className="mt-5 leading-8 text-sm text-gray-300">
              {menu.footer.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.url}
                    className="hover:text-orange-400 hover:underline transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="text-lg font-semibold text-orange-400">
              Location & Contact
            </h3>
            <ul className="mt-5 leading-8 text-sm text-gray-300">
              <li>{markdownify(location)}</li>
              {phone && (
                <li>
                  <Link href={`tel:${phone}`} className="hover:text-orange-400">
                    {phone}
                  </Link>
                </li>
              )}
              {email && (
                <li>
                  <Link
                    href={`mailto:${email}`}
                    className="hover:text-orange-400"
                  >
                    {email}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Social Media Section at End Point */}
        <div className="mt-12 flex justify-center space-x-6 text-orange-400">
          <div className="transition-transform duration-300 hover:scale-110">
            <Social
              source={social}
              className="flex text-2xl space-x-4 text-orange-400 hover:text-orange-500"
            />
          </div>
        </div>

        {/* copyright */}
        <div className="py-6 text-center text-xs text-gray-500 mt-6">
          {markdownify(copyright, "p", "footer-copy-write")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

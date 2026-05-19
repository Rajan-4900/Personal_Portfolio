import SocialIcons from "./ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="py-8 text-center border-t dark:border-dark-border border-light-border" aria-label="Site Footer">
      <div className="flex justify-center mb-6 md:hidden">
        <SocialIcons className="justify-center" />
      </div>
      <p className="dark:text-gray-500 text-gray-400 font-mono text-sm hover:text-primary-orange dark:hover:text-sky-500 transition-colors cursor-pointer inline-block">
        Designed & Built with React + Tailwind
      </p>
    </footer>
  );
}

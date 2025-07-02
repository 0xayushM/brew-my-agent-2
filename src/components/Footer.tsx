const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="container mx-auto max-w-7xl px-5 text-center">
        <p className="text-textMedium">
          &copy; {new Date().getFullYear()} brewmyagent. All Rights Reserved. | We&apos;re Brewing the Future of Work.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

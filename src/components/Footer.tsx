const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-mono">
            © {currentYear} Aditya Bohra
          </p>
          <p className="text-sm text-muted-foreground font-mono">
            Built with <span className="text-accent">data</span> & precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

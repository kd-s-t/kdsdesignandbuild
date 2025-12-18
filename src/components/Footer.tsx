"use client";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="font-display text-xl text-foreground mb-2">KDS Design & Build</p>
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


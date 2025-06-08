
interface LayoutProps {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html>
      <body>
    <div>
      {children}
    </div>
     </body>
    </html>
  );
};


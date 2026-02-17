import type { Metadata } from 'next';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/globals.css';

export const metadata: Metadata = {
  title: 'Boosy - Premium Boot Store',
  description: 'Discover our collection of handcrafted boots and shoes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../assets/components/customer/NavBar';
import Footer from '../../assets/components/customer/Footer';
import Header from '../../assets/components/customer/Header';
import CardFilter from '../../assets/components/customer/CardFilter';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = () => {
//   const [_selectedMenu, setSelectedMenu] = useState<string>('Dashboard');

//   const handleMenuSelect = (menu: string) => {
//     setSelectedMenu(menu);
//   };

  return (
    <>
      <div className="px-[4%] lg:px-[8%] bg-[#F1F3FF] pt-[20px] overflow-x-hidden">
        <div className="h-[100vh] lg:h-[70vh] w-full relative">
          <Navbar/>
          <Header/>
          <CardFilter/>
        </div>
      </div>
      <div className="px-[4%] lg:px-[8%] pt-12 lg:pt-24">
        <Footer/>
      </div>
    </>
    
  );
};

export default Layout;

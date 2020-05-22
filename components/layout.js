import Sidebar from '../components/sidebar';

const Layout = ({ children }) => {
  return (
    <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
      <Sidebar title="Home library" />
      <div className="ml-20">{children}</div>
    </div>
  );
};

export default Layout;

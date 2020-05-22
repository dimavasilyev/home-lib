import Sidebar from '../components/sidebar';

const Layout = ({ children, title = 'Home library' }) => {
  return (
    <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
      <Sidebar title={title} />
      <div className="p-8">{children}</div>
    </div>
  );
};

export default Layout;

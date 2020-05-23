import Sidebar from '../components/sidebar';
import Meta from '../components/meta';

const Layout = ({ children, title = 'Home library', pageTitle = '' }) => {
  return (
    <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
      <Meta title={pageTitle} />
      <Sidebar title={title} />
      <div className="p-8 w-full">{children}</div>
    </div>
  );
};

export default Layout;

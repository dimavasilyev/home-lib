import Sidebar from '../components/sidebar';
import Meta from '../components/meta';
import { useGlobalState } from '../hooks';

const Layout = ({ children, title = 'Home library', pageTitle = '' }) => {
  const {
    setGlobalState,
    globalState: { theme },
  } = useGlobalState();

  const switchTheme = () => {
    setGlobalState({
      type: 'TOGGLE_THEME',
    });
  };

  return (
    <div className={`${theme} md:flex flex-col md:flex-row md:min-h-screen w-full`}>
      <Meta title={pageTitle} />
      <Sidebar title={title} />
      <div className="bg-primary md:ml-64 p-8 w-full">
        <div onClick={switchTheme}>Switch</div>
        {children}
      </div>
    </div>
  );
};

export default Layout;

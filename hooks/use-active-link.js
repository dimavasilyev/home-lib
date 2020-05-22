import { useRouter } from 'next/router';

function useActiveLink() {
  const { pathname } = useRouter();

  return (href) => pathname === href;
}

export default useActiveLink;

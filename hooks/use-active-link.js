import { useRouter } from 'next/router';

export default function useActiveLink() {
  const { pathname } = useRouter();

  return (href) => pathname === href;
}

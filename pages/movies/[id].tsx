import { useRouter } from 'next/router';

export default function MovieInfoPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query.id);
  return (
    <article>
      <h1 className='page-title'>Information</h1>
    </article>
  );
}

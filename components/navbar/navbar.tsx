import Link from 'next/link';
export default function Navbar() {
  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <Link href='/'>MovieFlix</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href='/movies'>Filmer</Link>
            </li>
            <li>
              <Link href='/tv'>TV</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

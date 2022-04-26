import Link from 'next/link'

export default function Home() {
  return (
    <div className='text-center mt-5'>
      <h1 className="title">Welcome to Notes App</h1>
      <Link href="/notes/list"><a>Notes List</a></Link>&nbsp;&nbsp;
      <Link href="/notes/add"><a>Add Notes</a></Link>
    </div>
  );
}

import Link from 'next/link'

export default function Index() {
   return (
      <>
         <h1>Teste</h1>
         <Link href="/ssr">SSR</Link>
         <Link href="/ssg">SSG</Link>
      </>
   )
}
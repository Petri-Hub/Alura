import Link from "next/link";

export function getServerSideProps(){
   return {
      props: {
         message: "I was rendered for this request"
      }
   }
}

export default function SsrPage({ message }) {
   return (
      <>
         <h1>Página SSR | {message}</h1>
         <Link href="/">Home</Link>
      </>
   )
}
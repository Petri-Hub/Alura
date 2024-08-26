import Link from "next/link";

export function getStaticProps(){
   return {
      props: {
         message: "I was rendered for this build"
      }
   }
}

export default function SsgPage({ message }) {
   return (
      <>
         <h1>Página SSG | {message}</h1>
         <Link href="/">Home</Link>
      </>
   )
}
import { useRouter } from 'next/router'
import NextLink from 'next/link'

export default function Post() {
   const router = useRouter()
   const slug = router.query.slug   

   return (
      <div>
         Página de Post | {slug}
      </div>
   )
}
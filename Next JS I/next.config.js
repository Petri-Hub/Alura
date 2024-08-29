module.exports = {
   trailingSlash: true,
   redirect: async () => [
      {
         source: '/perguntas',
         destination: '/faq',
         /**
          * Muda o status da página 307 (Moved Temporarialy) para 
          * 308 (Moved Permanently) 
          */
         permanent: true
      }
   ]
}
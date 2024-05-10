module.exports = (object) => {
   for (let prop in object) {
      if (/Id|id/.test(prop)) {
         object[prop] = Number(object[prop])
      }
   }
   return object
}
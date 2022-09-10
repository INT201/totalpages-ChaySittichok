const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  //code here
  if(arrayItems == null || undefined ){
    return undefined
  }
  else if((rowsPerPage == null || undefined)||(rowsPerPage == 0)){
    return 1
  }
  else{
    let total = arrayItems.length/rowsPerPage
    return Math.ceil(total)
  }
  
}
module.exports = totalPages
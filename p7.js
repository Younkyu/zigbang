function generateNewFolderName(existingFolders) {
  // Write your code here
  let findNewFolder = existingFolders.filter(v => v !== 'New Folder')
  if(findNewFolder.length === existingFolders.length) return 'New Folder'
  findNewFolder.sort((a,b) => {
    aCompare = BigInt(a.replace(/[^0-9]/g,''))
    bCompare = BigInt(b.replace(/[^0-9]/g,''))
    if(aCompare - bCompare > 0) return 1
    else if (aCompare - bCompare < 0) return -1
    return 0
  })
  let result = 2n;
  findNewFolder.forEach(v => {
    let find = BigInt(v.replace(/[^0-9]/g,''))
    console.log(find)
    if(find > result) return result
    result = result + 1n
  })
  return `New Folder (${result.toLocaleString().replace(/[^0-9]/g,'')})`
}

console.log(generateNewFolderName(["New Folder", "New Folder (12341234123412512341341234123412341234123)",  "New Folder (123412341234125123411234123412341251234134123412341234123412312312341234123412512341341234123412341234123123341234123412341234123123)",  "New Folder (3)", "New Folder (4)", "New Folder (2)", "New Folder (10)"]));

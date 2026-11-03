 const fs=require('fs')
 console.log(process.argv[2])
 const operational =process.argv[2]
if(operational=='write')
{
    const name=process.argv[3]
    const content=process.argv[4]
    const path="files/"+name+".txt"
    fs.writeFileSync(path,content)

}else if(operational=='read')
{
    
      const name=process.argv[3]
    const path="files/"+name+".txt"
    let data=fs.readFileSync(path,"utf-8")
    console.log(data)

}else if(operational=='update')
{
  const name=process.argv[3]
    const content=process.argv[4]
    const path="files/"+name+".txt"
    fs.appendFileSync(path,"\n"+content)
    console.log("data updated")


}else if(operational=='delete')
{
  const name=process.argv[3]
    const path="files/"+name+".txt"
    fs.unlinkSync(path)
    console.log("file deleted")

}else
{
    console.log("Operation not found")
}

// fs.writeFileSync("files/bannana.txt","this is bannana file")
// fs.unlinkSync("files/bannana.txt")


// reading files modules 

// const readdata=fs.readFileSync('files/apples.txt',"utf-8")
// console.log(readdata)

// fs.appendFileSync("files/apples.txt","\nthis is third line in apple from append")

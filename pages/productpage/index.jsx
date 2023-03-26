import { useState } from 'react'
import fs from 'fs'
import path from 'path'

// const ProductPage = (props) => {

//   return (
//     <div>
//       <ul>
//         {props.productList.map((item)=>{
//             return <li key={item.book}>{item.book}</li>
//         })}
//       </ul>
//     </div>
//   )
// }

// export default ProductPage

// export async function getStaticProps(){
//     const filePath =  path.join(process.cwd() , 'data' , 'products.json')

//     const fileData =  fs.readFileSync(filePath)

//     const Data = await JSON.parse(fileData)

//     return{
//         props :{
//             productList : Data
//         }
//     }
// }

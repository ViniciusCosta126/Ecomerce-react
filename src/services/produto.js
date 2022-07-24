import axios from 'axios'
export default async function   getProdutos(){
    const {data} = await axios.get("https://fakestoreapi.com/products")
    return console.log(data)
}
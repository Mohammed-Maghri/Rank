import Cookies from "js-cookie";
import { context } from "../context";
import { useContext } from "react";
const StaticArray = []

for (let index = 0 ; index <  99; index++)
  StaticArray.push({level : 99.99, login : "maghri", 
  first_name : "Mohammed" , last_name : "Maghri", location : null})


const FuncFetch = async (DomainFetch, seter, Elem, Object, from, nav, Empty, ForLoads) => {
  try {

    let Resp = await fetch(DomainFetch, {
      method  : 'POST' ,
      headers : {
        'authorization' : `${Cookies.get('access_token')}`
      },
      body : JSON.stringify(Object)
    })
    if (!Resp.ok){
      console.log('Error !')
      Cookies.remove('access_token')
      nav('/')
    }
    const DataFetch = await Resp.json();
    let Eleme
    Eleme = [...Elem, ...DataFetch]
    seter(Eleme)
    if (Elem.length == 0) {
      Empty(false)
      ForLoads(true)
    }
  }catch {
    console.log('Error !')
      Cookies.remove('access_token')
      nav('/')
  }
    return ('Done')
}
export {FuncFetch, StaticArray}

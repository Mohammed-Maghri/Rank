import React, { useEffect } from 'react'
import Load from '../Loader/Loader'
import Cookies from 'js-cookie'
import { useContext } from 'react'
import { context } from '../context'
import { useNavigate } from 'react-router'

const Connect = () => {
    const {ObjectData, setObjectData} = useContext(context)
    const navigate = useNavigate()

    useEffect(() => {
        const EndPoint  = "https://api.1337leets.com/Auth"
        const ParamCode = new URLSearchParams(window.location.search).get('code')
        console.log(' == > ', ParamCode)
        if (ParamCode == undefined && !Cookies.get('access_token'))
            navigate('/')
        else if (Cookies.get('access_token') != null && Cookies.get('access_token') != undefined){
            navigate('/Home')
        }
        else {
            fetch(EndPoint, {
                method  : 'GET',
                headers : {
                    'authorization' : `${ParamCode}`
                }
            }).then((Data) => {
                return (Data.json())
            }).then((Data) => {
                Cookies.set('access_token',Data.token)
                setObjectData(Data)
                navigate('/Home')
            }).catch((Error) => {
                navigate('/')
            })
        }
    }, [])
    
return (
    <div className='w-[100%] flex items-center justify-center h-[100vh] bg-black'>
        <Load />
    </div>
  )
}
export default Connect

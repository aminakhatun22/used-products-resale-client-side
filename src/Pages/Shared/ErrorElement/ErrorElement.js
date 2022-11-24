import React from 'react'
import useTitle from '../../../Hooks/UseTitles'
import img from '../../../assests/errorImage.webp'



const ErrorPage = () => {
    useTitle('ErrorPage')

    return (
        <div className='flex justify-center items-center h-screen p-16 mt-10'>
            <div><img className='  w-96 h-96 mt-10 ml-10 ' src={img} alt="" /></div>

            <div className='flex flex-col min-h-[700px] justify-center items-center'>
                <h1 className='text-4xl ml-10 text-orange-400'>Sorry, we couldn't find this page.</h1>
            </div>
        </div>

    )
}

export default ErrorPage

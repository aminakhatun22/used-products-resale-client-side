import React from 'react'
import useTitle from '../../../Hooks/UseTitles'
import img from '../../../assests/errorImage.webp'



const ErrorPage = () => {
    useTitle('ErrorPage')

    return (
        <div >
            <div><img className='  justify-center items-center mt-10 ml-10 ' src={img} alt="" /></div>

            <div className='flex flex-col min-h-[700px] justify-center items-center'>
                <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
            </div>
        </div>

    )
}

export default ErrorPage

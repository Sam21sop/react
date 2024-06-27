import React from 'react'


const Form = () => {
    return (
        <>
            <section>
                <form className='flex justify-center flex-col gap-2'>
                    <div className='flex gap-2 items-center py-2 px-4'>
                        <label htmlFor="username" >Text Type Input: </label>
                        <input
                            type="text"
                            id='username' 
                            placeholder='text input'
                            className='border px-3 py-1 rounded-md'
                        />
                    </div>
                    <div className='flex gap-2 items-center py-2 px-4'>
                        <label htmlFor="email" >Email Type Input: </label>
                        <input
                            type="email"
                            id='email' 
                            placeholder='email input'
                            className='border px-3 py-1 rounded-md'
                        />
                    </div>
                </form>
            </section>
        </>
    )
}

export default Form
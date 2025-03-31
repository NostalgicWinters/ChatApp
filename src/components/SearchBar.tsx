import React from 'react'

function SearchBar() {
  return (
    <div className='bg-dark p-4 rounded-3xl h-16 flex justify-between align-middle'>
        <div className='p-2 flex justify-center hover:cursor-pointer'>
            <img src='search.svg' className='h-5 flex justify-self-center'></img>
        </div>
        <input type='text' placeholder='Search' className='text-white p-2 mx-8 w-full'></input>
    </div>
  )
}

export default SearchBar
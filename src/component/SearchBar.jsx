import React from 'react'

function SearchBar ({city, setCity ,handleSearch, loading, handleKeyDown}) {

  function handleKeyDown (e){
     if (e.key === "Enter" && city.trim() !== "") {
      handleSearch()
     }
  }
  return (
    <div className='flex flex-col sm:flex-row gap-3 mb-6 '>
        <input type="text"
        
            placeholder='Search city...'
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
        className='flex-1 px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"'
         />
         <button 
         onClick={handleSearch}
         disabled={loading}
         className='bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition duration-300'
         >
      
          {loading? "Searching..." : "Search"}
          </button>
    </div>
  )
}

export default SearchBar
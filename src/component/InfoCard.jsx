import React from 'react'

function InfoCard({title, value}) {
  return (
   <div className="bg-blue-50 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition">
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className="text-xl font-bold text-gray-800">{value}</h3>
    </div>
  )
}

export default InfoCard
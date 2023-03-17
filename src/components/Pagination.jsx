import React from 'react'

export const Pagination = ({page, quantyPage, setPage}) => {
  return (
    <div className='box_pagination'>
        { page > 1 && <button className='btn' onClick={() => setPage(page - 1) }>Prev</button>}
        <p className='pages'>{ page } de { quantyPage }</p>
        { quantyPage > page &&<button className='btn' onClick={() => setPage(page + 1) }>Next</button>}
    </div>
  )
}

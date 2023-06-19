import React from 'react'
import { Link } from 'react-router-dom'

const ListingItem = ({listing,id, onDelete}) => {
    return (
        <>
        <div className='d-flex align-items-center justify-content-center'>
         <div className='card category-link mb-2' style={{width :'800px'}}>
         <Link to={'/category/${listing.type}/${id}'}>
           <div className='row container p-2'>
              
              <div className='col-md-5'>
                <img src={listing.imgUrls[0]}
                className='img-thumbnail' 
                alt={listing.name} height={200} width={300}/>
              </div>
              <div className='col-md-5'>
              <h6>Pick up location:{''}</h6>
                <p>{listing.location}</p>
                <h2>{listing.name}</h2>
                <p>
                    Rs:{''}
                    {listing.offer
                     ? listing.offerPrice
                      : listing.regularPrice} {''}
                     
                      {listing.type === 'rent' && ' / Day'}
                      </p>
                      <p>Model:{''}
                      {listing.year}
                      </p>
                     {onDelete && (
                      <button
                       className='btn btn-danger'
                       onClick={() => {
                        onDelete(listing.id, listing.name)
                      }}
                        >
                          Delete Listing
                          </button> 
                     )}
                </div> 
            </div>
            </Link>
         </div>
         </div>
        </>
    )
}

export default ListingItem
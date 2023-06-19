import React, {useState,useEffect} from 'react'
import Layout from '../components/Layout/Layout';
import {getDoc,doc} from 'firebase/firestore';
import { db } from '../firebase.config';
import { getAuth } from 'firebase/auth';
import { useNavigate, Link,useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';



const Listing = () => {
    const [listing,setListing] = useState("");
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const params = useParams();
    const auth = getAuth();

    useEffect(() =>{
        const fetchListing = async () => {
            const docRef = doc(db,"listings",params.listingId);
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()){
                console.log(docSnap.data())
                setListing(docSnap.data())
                setLoading(false)
            }
        }  
        fetchListing()
    },[params.listingId])

    if(loading) {
        return <Spinner/>;
    }   
    return(
        <Layout>
            <div className='container d-flex align-items-center justify-content-center mt-4'>
            <div className="card" style={{width: '800px'}}>
            
            <div className="card-body"> </div>
            <h3>{listing.name}</h3>
            <h6>
                Price:{""} Rs {listing.offer ? listing.offerPrice:listing.regularPrice }
                 </h6>
                 <p>Bike For: {listing.type === 'rent' ? 'Rent' :'Sale'}</p>
                 <p>{listing.offer  &&(
                   <span>{listing.regularPrice - listing.offerPrice} Discount
                   </span> 
                 )}</p>
                 <p>Model: {listing.year}</p>
                 <p>Condition: {listing.condition}</p>
                 <p>Address: {listing.address}</p>
                 <Link 
                   className='btn btn-success'
                   to={`/contact/${listing.useRef}?listingName=${listing.name}}`}
                  >
                    Contact Owner
                 </Link>
        </div>
       </div>
      </Layout>
    );
};

export default Listing;
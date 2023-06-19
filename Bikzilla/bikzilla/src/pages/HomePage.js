import React from 'react'
import {useNavigate} from 'react-router-dom'
import Layout from '../components/Layout/Layout';



const HomePage = () => {
    const navigate = useNavigate()
    const img1 = 
    'https://images.unsplash.com/photo-1610229953140-d6c35bc7fa65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGhhcmxleSUyMGRhdmlkc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    const img2 =
    'https://images.unsplash.com/photo-1656766500535-3b2ff1f15082?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxzdXBlcmJpa2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    const img3 =
     'https://wallpaperaccess.com/full/5904790.jpg'  
    return (
        <Layout>
            <div className="container mt-3">
              
              <div className="row">
              <h1> Category </h1>
                <div className="col-md-5">
                    <div className="Imagecontainer">
                     <img src={img1} alt="Rent" style={{width: "100%"}} />
                     <button className="btn"
                     onClick={() => navigate('/category/rent')}
                     >For Rent</button>
                   </div>
                </div>
                <div className='col-md-5'>
                <div className="Imagecontainer">
                     <img src={img2} alt="Rent" style={{width: "132%"}} />
                     <button className="btn"
                     onClick={() => navigate('/category/sale')}
                     >For Sale</button>
                   </div>
                </div>
              </div>  
              <div className="Imagecontainer mb-3 mt-4">
                     <img src={img3} alt="Rent" style={{ height:'450px', width: "1080px"}} />
                     
                   </div>
            </div>
        </Layout>
    )
}

export default HomePage

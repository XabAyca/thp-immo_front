import Jumbotron from 'components/Jumbotron/Jumbotron';
import HousingList from 'components/HousingList/HousingList';
import Loading from 'components/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listingsFetch } from 'services/apiManager';

const Home = () => {

  const dispatch = useDispatch()
  const listings = useSelector(state => state.listings)

  const getListings = () => {
    dispatch(listingsFetch())
  }


  useEffect(() => {
    getListings();
  },[]);


  return(
    <>
    <div className="homepage">
      <Jumbotron />
      {
        listings.listings ?

          <HousingList data={listings.listings} />
          :
          <Loading />
      }
    </div>

    </>
  )
}

export default Home;
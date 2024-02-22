import React from 'react'
import Loader from './Loader'
import { useNavigate } from 'react-router-dom'

function Results(props) {
  const { err, pending, pets } = props
  const hero = 'http://pets-images.dev-apis.com/pets/none.jpg' // Default placeholder image URL
  const navigate = useNavigate()

  return (
    <div className='search'>
      {pending && <Loader />}

      {err && <div>Error happened</div>}
      {!pets?.length && !pending && <h1>No Pets Found</h1>}
      {console.log(err)}
      {pets &&
        pets.map((pet) => {
          const { id, name, animal, breed, city, state, images } = pet
          return (
            <div key={id} className='pet'>
              <div className='image-container'>
                <img
                  onClick={() => navigate(`/details/${id}`)}
                  src={images[0] || hero}
                  alt={name}
                />
              </div>
              <div className='info'>
                <h1 onClick={() => navigate(`/details/${id}`)}>{name}</h1>
                <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Results

import { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [breed, setBreed] = useState([])
  const [images, setImages] = useState([])

  const handleClick = async () => {
    const url = 'https://dog.ceo/api/breeds/list/all'
    const response = await axios.get(url)
    const dogList = Object.keys(response.data.message)
    setBreed(dogList)
  }
  const handleChange = async event => {
    const breedName = event.target.value
    const url = `https://dog.ceo/api/breed/${breedName}/images/random/3`
    const response = await axios.get(url)
    setImages(response.data.message)
    console.log(response.data.message)
  }
  return (
    <>
      <button onClick={handleClick}>犬種を取得</button>
      <select onChange={handleChange}>
        {breed.map(dog => (
          <option key={dog} value={dog}>
            {dog}
          </option>
        ))}
      </select>
      <ul>
        {images.map(image => (
          <li key={image}>
            <a href={image} target='_blank' rel='noreferrer noopener'>
              {image}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App

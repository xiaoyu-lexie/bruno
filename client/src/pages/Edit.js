import {useState}from 'react';
import FileBase from 'react-file-base64';

const Edit = ({match, location}) => {
  // console.log('params', match, location)

  const id = match.params.id;
  const productInfo = location.params1;

  const [updateData, setUpdateData] = useState(
    productInfo
  )

  const handleChange = (event) => {
    const {name, value} = event.target
    setUpdateData({
      ...updateData,
      [name]: value
    })
  }

  const handleUpdate = (event) => {
    event.preventDefault();

    fetch(`http://localhost:5000/products/${id}`, {
      method: "PATCH",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateData)
    })
  }

  const handleDelete = (event) => {
    event.preventDefault();

    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE"
    })
  }

  console.log('productInfo', productInfo.title)

  return (
    <div>
      <div>New product upload</div>
      <form >
        <p>
          <label htmlFor='title'>Product Title: </label>
          <input type='text' id='title'  name="title" placeholder={productInfo.title} onChange = {handleChange}></input>
        </p>

        <p>
          <label htmlFor='amazonLink'>Product amazonLink: </label>
          <input type='text' id='amazonLink' name="amazonLink" placeholder={productInfo.amazonLink} onChange = {handleChange}></input>
        </p>

        <p>
          <label htmlFor='positionOrder'>position order: </label>
          <input type='text' id='positionOrder' name="positionOrder" min = "1" max = "50" placeholder={productInfo.positionOrder} onChange = {handleChange}></input>
        </p>

        <p>
          <label htmlFor='promocode'>promocode: </label>
          <input type='text' id='promocode' name="promocode" placeholder={productInfo.promocode}  onChange = {handleChange}></input>
        </p>

        <p>
          <label htmlFor='promoStart'>promo start date: </label>
          <input type='date' id='promoStart' name="promoStart" min = "2021-01-01" max = "2025-01-01" placeholder={productInfo.promoStart}  onChange = {handleChange}></input>
        </p>

        <p>
          <label htmlFor='promoEnd'>promo end date: </label>
          <input type='date' id='promoEnd' name="promoEnd" min = "2021-01-01" max = "2025-01-01" placeholder={productInfo.promoEnd}  onChange = {handleChange}></input>
        </p>

        <p>
          <label htmlFor='category'>category: </label>

          <input type='checkbox' id='play' name="category" value = "play" onChange = {handleChange}></input>
          <label htmlFor = 'play'>play</label>

          <input type='checkbox' id='eat' name="category" value = "eat" onChange = {handleChange}></input>
          <label htmlFor = 'eat'>eat</label>

          <input type='checkbox' id='sleep' name="category" value = "sleep" onChange = {handleChange}></input>
          <label htmlFor = 'sleep'>sleep</label>
        </p>

        <p>
          <label htmlFor='tags'>search tags: </label>
          <input type='text' id='tags' name="tags" placeholder={productInfo.tags} onChange = {handleChange}></input>
        </p>

        <p>
          <label htmlFor='themeColor'>theme color: </label>
          <input type='color' id='themeColor' name="themeColor"  onChange = {handleChange}></input>
        </p>

        <p>
          upload image:
          <FileBase
              type = 'file'
              multiple = {false}
              onDone = {({base64}) => setUpdateData({...updateData, selectedFile:base64})}
          />
        </p>


        <button onClick = {handleUpdate}>Update Product</button>

        <button onClick = {handleDelete}>delete Product</button>


      </form>

      <a href = '/'>go back to all products</a>
    </div>
  )
}

export default Edit;
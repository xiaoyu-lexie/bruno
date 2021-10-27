import React, {useState}from 'react';
// import FileBase from 'react-file-base64';


const Form = ({fetchAll, addProduct}) => {
  const [inputData, setInputData] = useState(
    {
      title: "",
      amazonLink: "",
      positionOrder: "",
      promocode: "",
      promoStart: "",
      promoEnd: "",
      category: "",
      tags: "",
      themeColor: "",
    }
  )

  const [file, setFile] = useState();

  const handleChange = (event) => {
    const { name, value } = event.target
    setInputData({
      ...inputData,
      [name]: value
    })
  }

  const handleFileChange = (event) => {
    const upload = event.target.files[0];
    setFile(upload);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("title", inputData.title)
    data.append("amazonLink", inputData.amazonLink)
    data.append("positionOrder", inputData.positionOrder)
    data.append("promocode", inputData.promocode)
    data.append("promoStart", inputData.promoStart)
    data.append("promoEnd", inputData.promoEnd)
    data.append("category", inputData.category)
    data.append("tags", inputData.tags)
    data.append("themeColor", inputData.themeColor)

    data.append("file", file)


    addProduct(data)

  }

  return (
    <div>
      <div>New product upload</div>
      <form encType='multipart/form-data' onSubmit = {handleSubmit}>
        <p>
          <label htmlFor='title'>Product Title: </label>
          <input type='text' id='title' name="title" onChange = {handleChange}></input>
        </p>

        <p>
          <label htmlFor='amazonLink'>Product amazonLink: </label>
          <input type='text' id='amazonLink' name="amazonLink" onChange = {handleChange}></input>
        </p>

        <p>
          <label htmlFor='positionOrder'>position order: </label>
          <input type='text' id='positionOrder' name="positionOrder" min = "1" max = "50" onChange = {handleChange}></input>
        </p>

        <p>
          <label htmlFor='promocode'>promocode: </label>
          <input type='text' id='promocode' name="promocode" onChange = {handleChange}></input>
        </p>

        <p>
          <label htmlFor='promoStart'>promo start date: </label>
          <input type='date' id='promoStart' name="promoStart" min = "2021-01-01" max = "2025-01-01" onChange = {handleChange}></input>
        </p>

        <p>
          <label htmlFor='promoEnd'>promo end date: </label>
          <input type='date' id='promoEnd' name="promoEnd" min = "2021-01-01" max = "2025-01-01" onChange = {handleChange}></input>
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
          <input type='text' id='tags' name="tags" onChange = {handleChange}></input>
        </p>

        <p>
          <label htmlFor='themeColor'>theme color: </label>
          <input type='color' id='themeColor' name="themeColor" onChange = {handleChange}></input>
        </p>

        <p>
        <label htmlFor='image'>theme color: </label>
          <input type='file' id='image' name="image" onChange = {handleFileChange}></input>
        </p>

        <button>Create New Product</button>
      </form>
   </div>
  )
}

export default Form;
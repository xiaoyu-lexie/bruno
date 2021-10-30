const Nav = ({fetchCategory}) => {

  const clickCategory = (e) => {
    const category = e.target.value
    fetchCategory(category)
  }

  return (
    <nav>
      <div>
        search position
      </div>

      <div className='category'>
        <button value='play' onClick={clickCategory}>play</button>
        <button value='eat' onClick={clickCategory}>eat</button>
        <button value='sleep' onClick={clickCategory}>sleep</button>
      </div>
    </nav>
  )
}

export default Nav
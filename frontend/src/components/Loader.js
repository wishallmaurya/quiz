

const Loader =  (props) => {
 return(
    props.loader ?
    <div
          id='modal'
          className="fixed z-50 inset-0 bg-black bg-opacity-25 backdrop-blur-[2px] flex items-center justify-center ">
        <div className="spinner-border animate-spin block w-8 h-8 border-4 rounded-full text-blue-600 items-center mx-6" role="status" >
            <span className="visually-hidden">Loading...</span>
        </div><br></br>
        <h5>Please wait...</h5>
    </div>
    :
    <>
    </>   
 )
}

export default Loader;
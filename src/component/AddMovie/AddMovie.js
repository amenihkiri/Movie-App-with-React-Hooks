import React,{useState} from "react";
import Modal from "react-modal"
import "./AddMovie.css"

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

Modal.setAppElement('#root')
 
function Add({addMovie}){

    const [name, setname] = useState("");
    const [rating, setrating] = useState(1);
    const [date, setdate] = useState("");
    const [desc, setdesc] = useState("");
    const [image, setimage] = useState("")
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setIsOpen(false);
  }
 const handleAdd=()=>{
     addMovie({name,
    rating,
image,
date})
 }
    return (
      <div>
        <button onClick={openModal} className="Add-btn" >+</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Add New Movie</h2>
          
          
          <form>
          <label>Movie Name</label>
          <input
            
            type="text"
            name="name"
            required
            onChange={(e)=>setname((e.target.value))}
          />
          <label>Movie Rate</label>
          <input
          
            type="text"
            name="rating"
            required
            onChange={(e)=>setrating((e.target.value))}
         />
           
          <label>Movie Release Date</label>
          <input
            
            type="number"
            name="date"
            required
            onChange={(e)=>setdate((e.target.value))}
          />
          <label>Movie Image</label>
          <input
           
            type="url"
            name="image"
            required
            onChange={(e)=>setimage((e.target.value))}
          />
          <label>Movie Description </label>
          <textarea
            
            type="text"
            name="description"
            required
            onChange={(e)=>setdesc((e.target.value))}
          />
          
        </form>
        <button className="Modal-btn"   onClick={closeModal}>close</button>
          <button className="Modal-btn"  onClick={handleAdd}> submit </button>
        </Modal>
      </div>
    );
}
export default Add

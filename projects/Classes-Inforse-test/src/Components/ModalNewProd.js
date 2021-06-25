/* eslint-disable */
import React from "react" 
import  ReactDOM  from "react-dom"
import  './modal.scss'


const ModalNewProd = ({ show,  title, children, add }) => {
    console.log('show', show);

    

    // handleLangChange: function () {
    //     var lang = this.refs.dropdown.value;
    //     this.props.onSelectLanguage(lang);            
    // },
    
    // onTrigger = (e) => {
    //     this.props.parentCallback({modal: false})
    //     e.preventDefault()
    // }




    //  Passing from Child to Parent
    const onTrigger = (props) => {
        console.log('onTrigger', !show);
         this.props.parentCallback({modal: false})
        
    //    ({show: false}) 
        // this.props.parentCallback({modal: false })
        // this.props.parentCallback({ modal: false})  
    }

    // onTrigger: function(e) {
    //     this.props.parentCallback({modal: false})
    //     e.preventDefault()
    // }
     
    

    return ReactDOM.createPortal(
        <>
           <div className={`modalContainer ${show ? "show" : "" }` }   >
               <div className="modal" onClick={(e)=> e.stopPropagation()}>
               <header className="modal_header">
                   <h2 className="modal_header-title"> {title}</h2>
                       <button className="close"  >X</button>
               </header>
               <main className="modal_content">{ children }</main>
               <footer className="modal_footer">
                   
                   <button className="modal-close" onClick={() => onTrigger()}>Cancel</button>
                   <button className="submit" >Add</button>
               </footer>
               </div>
           </div>  
               
        </>,
        document.getElementById("modal")
    );
};

export default ModalNewProd

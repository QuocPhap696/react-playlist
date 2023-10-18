// import { Link } from "react-router-dom";
// import { React, useState } from "react";




// const AddCustomer = ({show, handleClose, handleOpen}) => {
    
//     return (
//         <div className="container">
           
//            <div className={`modal fade ${show ? 'show' : ''}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: show ? 'block' : 'none' }}>
//          <div class="modal-dialog">
//                     <div class="modal-content">
//                         <div class="modal-header">
//                             <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div class="modal-body">
//                         <div>
//                     <label className="form-label" htmlFor="">Full Name</label>
//                     <input className="form-control" type="text" name="fullName" id="fullName" />
//                 </div>
//                 <div>
//                     <label className="form-label" htmlFor="">Email</label>
//                     <input className="form-control" type="email" name="email" id="email" />
//                 </div>
//                 <div>
//                     <label className="form-label" htmlFor="">Phone</label>
//                     <input className="form-control" type="tel" name="phone" id="phone" />
//                 </div>
//                 <div>
//                     <label className="form-label" htmlFor="">Gender</label>
//                     <label className="me-3">Gender: </label>
//                     <input
//                         type="radio"
//                         id="male"
//                         name="gender"
//                         value="male"
//                     />
//                     <label htmlFor="male" className="me-5">Male</label>
//                     <input
//                         type="radio"
//                         id="female"
//                         name="gender"
//                         value="female"
//                     />
//                     <label htmlFor="female">Female</label>
//                 </div>
//                 <div>
//                     <label className="form-label" htmlFor="">City</label>
//                     <label className="form-lavel">City</label>
//                     <select className="form-select" >
//                         <option value="hcm">Hà Nội</option>
//                         <option value="hn">Huế</option>
//                         <option value="pt">Đà Nẵng</option>
//                         <option value="dn">Sài Gòn</option>
//                     </select>
//                 </div>
//                 <div>
//                     <label className="form-label" htmlFor="">Address</label>
//                     <input className="form-control" type="text" name="address" id="address" />
//                 </div>
//                 <div> Action
//                     <td>
//                         <button
//                             className="btn btn-outline-primary me-2"
//                             onClick={''} // Call handleAddCustomer on button click
//                         >
//                             Add
//                         </button>
//                         <button
//                             className="btn btn-outline-secondary"
//                         >
//                             Cancle
//                         </button>
//                     </td>
//                 </div>
//                         </div>
//                         <div class="modal-footer">
//                             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                             <button type="button" class="btn btn-primary">Save changes</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }
// export default AddCustomer;
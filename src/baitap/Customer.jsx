
import { useState } from "react"
// import AddCustomer from "./AddCustomer";
import Button from 'react-bootstrap/Button';
// import { Link, NavLink } from 'react-router-dom';
const customers = [
    {
        id: 1,
        fullName: "NVA",
        email: "nva@gmail.com",
        phone: "12345",
        gender: "male",
        city: "Huế",
        address: "28 NTP"
    },
    {
        id: 2,
        fullName: "NVB",
        email: "nvb@gmail.com",
        phone: "12345",
        gender: "male",
        city: "Huế",
        address: "28 NTP"
    },
]

const cities = ["Hue", "Ha Noi", "Hai Phong"];


const Customer = () => {
    const [customerList, setCustomerList] = useState(customers);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [editedCustomer, setEditedCustomer] = useState(null);


    const handleCreate = () => {
        console.log(customerList);
        const newCustomer = {
            id: Math.floor(Math.random() * 1000), // Tạo ID mới cho khách hàng
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            gender: document.querySelector('input[name="gender"]:checked').value,
            city: document.getElementById('city').value,
            address: document.getElementById('address').value
        };
        setCustomerList([...customerList, newCustomer]);
        // Đóng modal
        handleClose();
    };

    const deleteCustomer = (id) => {
        const updatedCustomerList = customerList.filter((customer) => customer.id !== id);
        setCustomerList(updatedCustomerList);
    };

    const handleEdit = (customer) => {
        setEditedCustomer(customer);
        setShow(true);  // Hiển thị modal
    };

    const handleUpdate = () => {
        // Lấy thông tin đã chỉnh sửa từ các input
        const updatedCustomerInfo = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            // ... (similarly for other fields) ...
        };

        // Cập nhật thông tin khách hàng
        const updatedCustomerList = customerList.map((customer) => {
            if (customer.id === editedCustomer.id) {
                return { ...customer, ...updatedCustomerInfo };
            }
            return customer;
        });

        setCustomerList(updatedCustomerList);
        setEditedCustomer(null); // Đặt lại thông tin khách hàng đang chỉnh sửa
        handleClose(); // Đóng modal
    };


    return (
        <div>
            <Button variant="primary" onClick={handleShow}>Create</Button>{' '}
            <table
                className="table table-hover"
                style={{
                    width: '100%',
                }}
            >

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {customerList.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.fullName}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.city}</td>
                                <td>{item.address}</td>

                                <button
                                    type="button"
                                    className="btn btn-success me-3"
                                    onClick={() => handleEdit(item)}
                                >
                                    <i className="fa fa-pen" aria-hidden="true"></i>
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => deleteCustomer(item.id)}
                                >
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </button>

                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className="container">
                <div className={`modal fade ${show ? 'show' : ''}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: show ? 'block' : 'none' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close"
                                    data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <label className="form-label" htmlFor="">Full Name</label>
                                    <input className="form-control" type="text" name="fullName" id="fullName" />
                                </div>
                                <div>
                                    <label className="form-label" htmlFor="">Email</label>
                                    <input className="form-control" type="email" name="email" id="email" />
                                </div>
                                <div>
                                    <label className="form-label" htmlFor="">Phone</label>
                                    <input className="form-control" type="tel" name="phone" id="phone" />
                                </div>
                                <div>
                                    <label className="form-label" htmlFor="">Gender</label>
                                    <label className="me-3">Gender: </label>
                                    <input
                                        type="radio"
                                        id="male"
                                        name="gender"
                                        value="male"
                                    />
                                    <label htmlFor="male" className="me-5">Male</label>
                                    <input
                                        type="radio"
                                        id="female"
                                        name="gender"
                                        value="female"
                                    />
                                    <label htmlFor="female">Female</label>
                                </div>
                                <div>
                                    <label className="form-label" htmlFor="">City</label>
                                    <label className="form-lavel">City</label>
                                    <select className="form-select" id="city" >
                                        <option value="Hà Nội">Hà Nội</option>
                                        <option value="Huế">Huế</option>
                                        <option value="Đà Nẵng">Đà Nẵng</option>
                                        <option value="Sài Gòn">Sài Gòn</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="form-label" htmlFor="">Address</label>
                                    <input className="form-control" type="text" name="address" id="address" />
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary"
                                    data-bs-dismiss="modal" onClick={handleClose}>Close</button>
                                <button type="button" className="btn btn-primary"
                                    onClick={handleCreate}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
export default Customer
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const UserForm = (props) => {
    const [input, setInput] = useState({})

    const handleInputChange = (e) => setInput({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value
    })

    const userFormSubmit = (event) => {
        event.preventDefault();
        try{
        const reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...input }),
        };

        fetch('http://localhost:4000/user/createUser', reqOptions)
            .then((res) => res.json())
            .then((resData) => {
                props.closeModal(false);
                props.refershList();
                toast.success(resData.message);
            });
        }catch(err) {
            toast.error(err.message);  
        }
    }

    return (
        <div>
            <div className={`modal fade ${props.show ? `show` : ``}`} id="exampleModal" >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create User</h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                onClick={() => props.closeModal(false)}
                                aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" >
                            <div className="col-md-12">
                                <form onSubmit={userFormSubmit}>
                                    <div className="row">
                                        <div className="col-md-7 form-group">
                                            <label htmlFor="name">Name:</label>
                                            <input type="text" name="name" className="form-control" required onChange={handleInputChange} placeholder="Enter Your Name" />
                                        </div>
                                        <div className="col-md-5 form-group ">
                                            <label htmlFor="age">Age:</label>
                                            <input type="number" name="age" className="form-control" required onChange={handleInputChange} placeholder="Enter Your Age" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="emailId">Email ID:</label>
                                        <input type="email" name="emailId" className="form-control" required onChange={handleInputChange} placeholder="Enter Your Email ID" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="mobileNo">Mobile No :</label>
                                        <input type="number" name="mobileNo" className="form-control" required onChange={handleInputChange} placeholder="Enter Your Mobile No" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address">Address:</label>
                                        <textarea className="form-control" name="address" rows="5" required onChange={handleInputChange}></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-outline-primary float-right">Submit</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserForm;

import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import UserForm from '../components/UserForm';

const Users = () => {

  const [show, setShow] = useState(false);
  const [userList, setUserList] = useState([]);
  const addUser = () => {
    setShow(true);
  }

  const closeModal = (show) => {
    setShow(show);
  }

  const getUsers = () => {
    const reqOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };

    fetch('http://localhost:4000/user/getUsers', reqOptions)
      .then((res) => res.json())
      .then((resData) => {
        setUserList(resData.data);
      }).catch((error) => {
        toast.error(error.message);
      });
  }

  useEffect(() => {
    getUsers();
  }, [])


  const deleteUser = (id) => {
    confirmAlert({
      title: 'Delete User',
      message: 'Are you sure to delete the user?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            const reqOptions = {
              method: 'DELETE',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ id }),
            };
            fetch('http://localhost:4000/user/deleteUser', reqOptions)
              .then((res) => res.json())
              .then((resData) => {
                getUsers();
                toast.success(resData.message);
              }).catch((error) => {
                toast.error(error.message);
              });
          }
        },
        {
          label: 'No'
        }
      ]
    });
  }
  return (
    <div>
      <div className="container">
        <div className="card mt-4">
          <div className="card-header bg-info">
            <div className="row">
              <div className="col-md-8">
                <div className="text-left text-white"> <strong>Users List</strong></div>
              </div>
              <div className="col-md-4">
                <div className="text-right mb-1">
                  <button className="btn btn-outline-light btn-sm" onClick={() => addUser()}>Add new user</button>
                </div>
              </div>
            </div>
          </div>
          {
            userList.length ? userList.map(item => (
              <div className="row" key={item.id}>
                <div className="col-md-12">
                  <ul className="list-group">
                    <div className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{`${item.name} ${(item.age)}`}</h5>
                        <small>
                          <button
                            type="button"
                            className="btn btn-outline-danger btn-sm mr-5"
                            onClick={() => deleteUser(item.id)}
                          >Delete</button>
                        </small>
                      </div>
                      <p className="mb-1">{item.address}</p>
                      <small><strong>EmailId :</strong> {item.emailId} <strong> MobileNo :</strong> {item.mobileNo}</small>
                    </div>
                  </ul>
                </div>
              </div>
            )) : (
                <div className="row">
                  <div className="col-md-12">
                    <ul className="list-group">
                      <span className="no-record text-center">
                        No record found
                       </span>
                    </ul>
                  </div>
                </div>
              )
          }

        </div>

        {show && (<UserForm show={show} refershList={getUsers} closeModal={closeModal} />)}

      </div>
    </div>
  );
};

export default Users;
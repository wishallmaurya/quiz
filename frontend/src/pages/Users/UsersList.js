import React, { useState, useEffect } from "react";
import Skeleton from "../../layouts/Skeleton";
import TopComponent from "../../components/TopComponent";
import CircularButton from "../../components/CircularButton";
import Table from "../../components/Table";
import { MdDelete, MdEdit } from "react-icons/md";
import SearchBar from "../../components/SearchBar";
// import MultiSelect from "../../components/MultiSelect_U";
import UserModal from "./UserModel"; 
import { getAPI, postAPI , patchAPI, deleteAPI, putAPI} from "../../network";
import {formatDate} from "../../utils"
import Loader from "../../components/Loader";
import { getRoles } from "@testing-library/react";
import Modal from "../../components/Modal";
import Multiselect from 'multiselect-react-dropdown';
import useDocumentTitle from './../../utils/useDocumentTItle'



function UserList() {
  const [openModal, setOpenModal] = useState({ action: false })

  const [deleteModal, setDeleteModal] = useState({action: false})

    const [processId, setProcessId] = useState('')
  
    const [action, setAction] = useState('add')
    const [user, setUser] = useState({})  
    const handleOnClose = () => {
        setOpenModal({ action: false })
    }

    const handleOnDeleteClose = () =>{
        setDeleteModal({ action: false })
    }
    const [users, setUsers] = useState([]);
    const [loader, setLoader] = useState(false);
    const [editId, setEditId] = useState('');
    const [roles, setRoles] = useState([])

    

  const getUsers = async () => {
    setLoader(true)
    let data = await getAPI(`/user/all`)
    if(data) {
        var arr = [];
        for(var i = 0 ; i < data.length; i++){
          var obj = data[i]
          obj['sno'] = i + 1;
          arr.push(obj)
        }
        setUsers(arr)
    }
    setLoader(false)
  }

  useDocumentTitle('IVY | User List')


  const getRoles = async () => {
    setLoader(true)
    let data = await getAPI(`/role/all`)
    if(data) {
        var arr = [];
        for(var i = 0 ; i < data.length; i++){
          
          arr.push({label : data[i].name, value : data[i]._id})
        }
        setRoles(arr)
    }
    setLoader(false)
  }

  const changeRole = async(e,roleId) => {
    let id = e.target.value
    setLoader(true)
    let datas = await putAPI(`/role/status/${id}`,{role : roleId})
    if(datas){
      getRoles()
    }
    setLoader(false)
  }

  console.log("USER",users)

  // const handleDelete = async() => {
  //   setLoader(true);
  //   let process = await deleteAPI(`/user/delete/${editId}`);
  //   setLoader(false);
  //   if(process){
  //     getUsers();
  //   }
  // }
  // const deleteUser = (id) => {
  //   console.log("ID",id)
  //   setEditId(id);
  // //  handleDelete()
  // }

  const columns = [
    {
      name: "S.no.",
      selector: (row) => row.sno,
      width: "80px",
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => `${row.firstName} ${row.lastName}`,
      width: "180px",
    },
    {
      name: "Email",
      selector: (row) => row.email,
      width: "150px",
    },
    {
      name: "Company",
      selector: (row) => row.company,
    },
    {
      name: "Role",
      selector: (row) => <>
                           <select onChange={(e) => {changeRole(e, row._id)}} style={{height : 35}} value={row.role?._id}>
                             <option value={''}>No Role</option>
                             {
                              roles.map((item, index) => {
                                  return <option value={item.value} key={index}>{item.label}</option>
                              })
                             }
                           </select>
                         </>,
      width : '180px'
    },
    // {
    //   name: "Role",
    //   cell: (row) => (
    //     <Multiselect
    //       options={roles} // Options to display in the dropdown
    //       selectedValues={roles.map(item => {
    //         return {label : item?.name, value : item?._id}
    //       })} // Preselected value to persist in dropdown
    //       singleSelect={true}
    //       onSelect={(data) => {
    //         console.log(data)
            
    //       }} // Function will trigger on select event
    //       onRemove={(e) => {
    //         console.log(e)
    //       }} // Function will trigger on remove event
    //       displayValue="label" // Property name to display in the dropdown options
    //       />
    //   ),
    //   width: "15rem"
    // },
    {
      name: "Date Added",
      selector: (row) => formatDate(row?.createdAt),
    },
    {
      name: "Action",
      cell: (row) => (
        <>
            <button className='btn-bg-green  hover:btn-bg-green text-white font-bold py-2 px-2 rounded mx-1' onClick={() => {
                setUser(row)
                setAction('edit')
                setOpenModal({action:true})
            }}><MdEdit /></button>
            <button className='btn-bg-gray  hover:btn-bg-grey text-white font-bold py-2 px-2 rounded mx-1' onClick={() => {deleteRow(row._id)}}><MdDelete /></button>
        </>
      ),
    },
  ];
  // const clearAll = () => {
  
  // }

  useEffect(() => {
    getUsers()
    getRoles()
  },[]);

  const deleteRow = (id) => {
    setProcessId(id)
    setDeleteModal({ action: true })
    
}

const deleteUser = async() => {
    setLoader(true)
    let data = await deleteAPI(`/user/delete/${processId}`);
    if(data){
        setDeleteModal({ action: false });
        getUsers()
    }
    setLoader(false)
}

const changeActive = async(id) => {
  setLoader(true)
   let data = await putAPI(`user/isactivetoggle/${id}`)
   if(data){
    getUsers()
   }
   setLoader(false)
}


  return (
    <Skeleton>
      
      <Loader loader={loader} />
      <div className="p-8">
        <TopComponent title="User" component="Users" current="List" />
        <div className="w-auto bg-white mt-10 rounded-lg shadow-2l pb-2">
        
          <div className="p-5 border-b border-#6c6c6c-500  m-b-2 flex justify-between">
          <div className='py-3 px-3'><h1 style={{ fontWeight: 700 }}>User Role</h1></div>
            <div className="px-8 py-3">
              <CircularButton  title={"Add User"} bgColor={'bg-[#448268]'} bgColorHover={''} onClick ={()=>setOpenModal({action: true})}/>
            </div>
          </div>
          <div
            className="p-5 border-b border-#6c6c6c-500  m-b-2 flex"
            style={{ justifyContent: " center" }}
          >
            <SearchBar></SearchBar>
          </div>

          <Table columns={columns} data={users} />
        </div>
      </div>
      {/* {openModal.action && <UserModal open={openModal} onClose={handleOnClose} title='Add User'/>} */}

      {openModal.action && <UserModal open={openModal} onClose={handleOnClose} title='User' loading={() => {getUsers()}} type={action} data={user} roles={roles}/>}
        {deleteModal.action &&
          <Modal
              open={deleteModal} 
              onClose={handleOnDeleteClose}
              title={'Delete User'}
              size="small"
              >
              <div className='py-5 px-5'>
              <h3>Do you want to delete this user</h3>
              <div className='flex pt-4 text-center space-x-5'>
              <CircularButton title="Delete" bgColor={'btn-bg-red'} bgColorHover={''} onClick={() => deleteUser()} /> 
              <CircularButton title="Cancel" bgColor={'btn-bg-gray'} bgColorHover={''} onClick={handleOnDeleteClose} />
              </div>
              </div> 
          </Modal>
          }
    </Skeleton>
  );
}

export default UserList;

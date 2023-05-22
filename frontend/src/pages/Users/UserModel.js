import React, { useEffect, useState } from 'react'
import CircularButton from '../../components/CircularButton'
import Input from '../../components/Input'
import Modal from '../../components/Modal _U'
import Table from '../../components/Table'
import Select from '../../components/Select'
import TopComponent from '../../components/TopComponent'
import { getAPI, postAPI, putAPI } from '../../network'
import { formatDatePost, validation } from '../../utils'
import Multiselect from 'multiselect-react-dropdown';
import Loader from '../../components/Loader'


function UserModal({ navigation, title, open, onClose , loading = null , type="add", data = null, roles = []}) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [company, setCompany] = useState("");
    const [date, setDate] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState([]);
    const [profile, setProfile] = useState("");
    const [load, setLoad] = useState(false)
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
      if(type !== 'add'){
        setId(data?._id)
        setFirstName(data?.firstName)
        setLastName(data?.lastName)
        setDate(formatDatePost(data?.createdAt))
        setMobile(data?.mobile)
        setEmail(data?.email)
        setRole(data.role.label)
        setCompany(data?.company)
      }
     
    },[title, type])
    console.log("ROLE------------",role)
    // const getPermissions = async() => {
    //   setLoad(true)
    //   let datas = await getAPI('/permission/all')
    //   console.log('DATASSSSSS', datas)
    //   if(datas){
    //     var arr = []
    //     for(var i = 0 ; i < datas.length ; i++){
    //       var obj = datas[i]
    //       obj['sno'] = i + 1;
    //       obj['addAction'] = false;
    //       obj['readAction'] = true;
    //       obj['editAction'] = false;
    //       obj['deleteAction'] = false;
    //       arr.push(obj)
    //     }
    //     console.log('ARRRRRRR',arr)
    //     setPermissions(arr)
    //   }
    //   setLoad(false)
    // }
  
    const onSubmit = async(e) => {
      e.preventDefault();
     

      // console.log(role)
      // return;
     

      const values = {
        firstName,
        lastName,
        company,
        date,  
        mobile,
        email,
        profile,
        password,
        role: role[0].value,
        
      };

      // console.log(values);
      // return;

      
      if(validation(null, 'First Name', firstName)){
       return;
      }
      // else if(validation(null, 'Last Name', lastName)){
      //   return;
      // }
      else if(validation(null, 'Company', company)){
        return;
      }
      else if(validation('date', 'Added Date', date)){
        return;
      }
      else if(validation('phone', 'Mobile', mobile)){
        return;
      }
      // else if(validation('email', 'Email', email.toString())){
      //   return;
      // }
      else if(validation(null, 'Password', password)){
        return;
      }
      else if(validation('role', 'Role', role[0].value)){
        return;
      }
      else if(validation('empty', 'Profile Picture', profile)){
        return;
      }

      setLoad(true)

      var formData = new FormData()
      formData.append('firstName',firstName)
      formData.append('lastName', lastName)
      formData.append('password', password)
      formData.append('company', company)
      formData.append('date',date)
      formData.append('mobile', mobile)
      formData.append('email', email)
      formData.append('role', role[0].value)
      formData.append('profilePhoto', profile)
      formData.append('isActive', true)
    
      console.log("-----sending values",values)
      // return;

      if(type === 'add'){
          let datas = await postAPI('/user/create', values);
          if(datas){
              onClose()
              loading()
          }
      }
      else{
          let datas = await putAPI(`/user/update/${id}`, values);
          if(datas){
              onClose()
              loading()
          }
      }
      
      setLoad(false)
    };
    const handleClick = () => {
      console.log("hello");
      setFirstName("");
      setLastName("");
      setMobile("");
      setEmail("");
      setCompany("");
      setDate("");
      setProfile(null);
      setRole([])
    };

    
    

   
    return (
        <Modal title={title}
        open={open} onClose={onClose} className="w-3\/4">
          <Loader loader={load}/>
          <div className="py-3 px-3 bg-neutral-200 w-80 rounded-md font-semibold mb-6 pt-2 my-5 ml-5">
                      Add Information
            </div>
          <div className="p-5">
            <div className="w-auto bg-white mt-0 rounded-lg shadow-2l pb-2">
              <div className="py-10 px-5">
                <form action="#" onSubmit={(event) => onSubmit(event)}>
                  <div className="mb-5">
                    <h1 className="block text-gray-700 text-sm font-bold mb-2">
                      Name<span className="text-red-500">&nbsp;*</span>
                    </h1>
                    <div className="grid grid-cols-2 gap-5">
                      <Input
                        id="firstName"
                        type={"text"}
                        placeholder="First name"
                        value={firstName}
                        required
                        onChange={(v) => setFirstName(v)}
                      />
                      <Input
                        id="lastName"
                        type={"text"}
                        placeholder="last name"
                        value={lastName}
                        required
                        onChange={(v) => setLastName(v)}
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <div className="grid grid-cols-2 gap-5">
                      <Input
                        id="company"
                        label={"Company"}
                        required
                        type={""}
                        placeholder="Company"
                        value={company}
                        onChange={(v) => setCompany(v)}
                      />
                      <Input 
                        id="date"
                        label={"Date"}
                        required
                        type={"date"}
                        placeholder="Select Date"
                        value={date}
                        onChange={(v) => setDate(v)}
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <div className="grid  grid-cols-2 gap-5">
                    <Input
                        id="password"
                        label={"Password"}
                        required
                        type={"password"}
                        placeholder="Password"
                        value={password}
                        onChange={(v) => setPassword(v)}
                      />
                    <label className="block text-gray-700 text-sm font-bold py-3">Role Type<span className="text-red-500">&nbsp;*</span>

                      <Multiselect className='text-sm'
                      options={roles} // Options to display in the dropdown
                      selectedValues={role} // Preselected value to persist in dropdown
                      singleSelect={true}
                      onSelect={(data) => {
                        console.log(data)
                        setRole(data)
                      }} // Function will trigger on select event
                      onRemove={(e) => {
                        console.log(e)
                      }} // Function will trigger on remove event
                      displayValue="label" // Property name to display in the dropdown options
                      />
                      </label>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="py-3 px-3 bg-neutral-200 w-80 rounded-md font-semibold mb-6">
                      Additional Information
                    </div>
                    <div className="mb-5">
                      <div className="grid grid-cols-1 gap-5">
                        <Input
                          id="file"
                          label={"Profile Photo"}
                          required={type === 'add' ? true : false}
                          type={"file"}
                          placeholder="Choose file"
                          value={null}
                          onChange={(v) => setProfile(v)}
                        />
                      </div>
                    </div>
                    <div className="mb-5">
                      <div className="grid grid-cols-2 gap-5">
                        <Input
                          id="number"
                          label={"Mobile"}
                          required
                          type={""}
                          placeholder="Mobile Number"
                          value={mobile}
                          onChange={(v) => setMobile(v)}
                        />
                        <Input
                          id="email"
                          label={"Email"}
                          required
                          type={"email"}
                          placeholder="Email Id"
                          value={email}
                          onChange={(v) => setEmail(v)}
                        />
                      </div>
                    </div>
                  </div>


                  {/* <div className="text-center space-x-5 mt-10">
                    <Table columns={columns} data={permissions} page={false}/>
                  </div> */}
                  <div className="text-center space-x-5 mt-10">
                    <button
                      className={`text-white text-base rounded-3xl py-2 px-10 btn-bg-green `}
                      type="submit"
                    >
                      Submit
                    </button>

                    <CircularButton
                      title="Reset"
                      bgColor={"btn-bg-gray"}
                      bgColorHover={""}
                      onClick={() => handleClick()}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal>
    )
}

export default UserModal;
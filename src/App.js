import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [dept, setDept] = useState('')
  const [HR, setHR] = useState('')
  const [Engineering, setEngineering] = useState('')
  const [user, setUser] = useState({})
  const [toggle, setToggle] = useState(false)

  const hr = [1, 2, 3, 4, 5]
  const engineering = [6, 7, 8, 9, 10]
  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${parseInt(HR)}`)
      .then((response) => {
        console.log(response.data)
        setUser(response.data)
      })
  }, [HR])
  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${parseInt(Engineering)}`)
      .then((response) => {
        console.log(response.data)
        setUser(response.data)
      })
  }, [Engineering])

  const handledepartmentChange = (e) => {
    setDept(e.target.value)
  }
  const handleHrChange = (e) => {
    setHR(e.target.value)
  }
  const handleEngineeringChange = (e) => {
    setEngineering(e.target.value)
  }
  const Toggledetails = () => {
    setToggle(!toggle)
  }

  const clear = () => {
    setDept('')
    setHR('')
    setEngineering('')
    setUser({})
    setToggle(false)
  }
  return (
    <div>
      <div className="col-md-4">
        <select value={dept} onChange={handledepartmentChange}>
          <option value="">select Department</option>
          <option value="HR">HR</option>
          <option value="Engineering">Engineering</option>
        </select>
      </div>
      {dept === 'HR' ? <div className="col-md-4">
        <select value={HR} onChange={handleHrChange}>
          <option value="">Select Id</option>
          {hr.map((el, i) => {
            return <option key={i} value={el}>{el}</option>
          })}

        </select>
      </div> : <div className="col-md-4">
          <select value={Engineering} onChange={handleEngineeringChange}>
            <option value="">Select id</option>
            {engineering.map((el, i) => {
              return <option key={i} value={el}>{el}</option>
            })}
          </select>

        </div>}
      <div className="col-md-4">
        <button onClick={Toggledetails}>Get details</button>
      </div>
      <div className="col-md-4">
        <button onClick={clear}>clear</button>
      </div>

      {toggle ?
        Object.keys(user).length > 0 && <div className="card" style={{ width: "35%", left: "30%", height: "25%" }}>
          <img className="card-img-top" src={user.data.avatar} alt={user.data.first_name} />
          <div className="card-body">
            <h3 className="card-title">Username:{user.data.first_name}{user.data.last_name}</h3>
            <h4 className="card-text">id:{user.data.id}</h4>
            <h5>email:{user.data.email}</h5>


          </div>

        </div> : ''}





    </div>
  )
}
export default App;

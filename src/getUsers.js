import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router-dom"

const GetUsers = () => {
  const history = useHistory()

  const token = localStorage.getItem("token")

  const [details, setDetails] = useState("")

  if (!token) {
    history.push("/")
  }
  axios
    .get("http://192.168.100.2/api/User/GetUsers/", {
      headers: {
        Authorization: `Bearer ${token}` /* ,
                  "Content-Type":"application/json" */,
      },
    })
    .then(response => {
      console.log(response)
      setDetails(response.data.responseData)
    })
    .catch(error => console.log(error))

  const handleDelete = id => {
    axios
      .delete(`http://192.168.100.2/api/User/DeleteUser?id=${id}`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { id: `${id}` },
      })
      .then(res => console.log(`User was deleted successfully`))
  }

  return (
    <div className="getusers">
      <table>
        <thead>
          <tr>
            <th
              colSpan={5}
              style={{
                textAlign: "center",
                fontSize: "2rem",
                backgroundColor: "rgb(55, 55, 140)",
                borderRadius: "10px",
                color: "white",
              }}
            >
              Customer Details
            </th>
          </tr>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ROLE</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {details &&
            details.map(detail => (
              <tr key={detail.id}>
                <td>{detail.id}</td>
                <td>{detail.name}</td>
                <td>{detail.email}</td>
                <td>{detail.role}</td>
                <td>
                  <button onClick={() => handleDelete(detail.id)}>
                    delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default GetUsers

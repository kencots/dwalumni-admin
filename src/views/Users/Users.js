import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import axios from 'axios'
//import usersData from './UsersData'

function UserRow(props) {
  //console.log(window.location.href)
  const user = props.user
  const userLink = `#/users/${user.id}`
  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={user.id.toString()}>
        <th scope="row"><a href={userLink}>{user.id}</a></th>
        <td><a href={userLink}>{user.username}</a></td>
        <td>{user.email}</td>
        <td>Alumni</td>
        <td><Badge href={userLink} color='success'>Active</Badge></td>
    </tr>
  )
}

class Users extends Component {
  constructor(props){
  super(props);
  this.state={
    usersData:[]
  }
}
componentWillMount(){
  const token = localStorage.getItem('token')
  const self = this
  axios({
        method:'GET',
        url : 'http://localhost:8000/api/user/',
        headers : {
          'Content-Type':'application/json',
          'Authorization':"JWT "+token
        }
      }).then(function(response){
       self.setState({usersData: response.data.results})
      })
}
  render() {

    //const userList = usersData.filter((user) => user.id < 10)
     const userList = this.state.usersData.filter((user) => user.id < 10)
     console.log(this.state.userData)
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">name</th>
                      <th scope="col">registered</th>
                      <th scope="col">role</th>
                      <th scope="col">status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) =>
                      <UserRow key={index} user={user}/>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Users;

import React, { Component } from "react";
import { Card, CardBody, CardHeader, Row, Col, Table } from "reactstrap";
import axios from 'axios'

class HiringPartner extends Component {
  constructor(props){
    super(props);
    this.state={
      companyName :'',
      address :'',
      dataCompany :[]
    }
  }
  handlePost(){
    const token = localStorage.getItem('token')
    const self = this
    axios({
          method:'post',
          url : 'http://localhost:8000/api/company/',
          headers : {
            'Content-Type':'application/json',
            'Authorization':"JWT "+token
          },
          data: {
            'name'      : this.state.companyName,
            'address'   : this.state.address,
          }
        }).then(function(response){
        console.log('nama: '+self.state.companyName+" address : "+self.state.adress)
        })

  }
      handleChangeName(event) {
        this.setState({companyName : event.target.value});
      }
      handleChangeAddress(event){
        this.setState({address:event.target.value});
      }
  componentWillMount(){
    const token = localStorage.getItem('token')
    const self = this
    axios({
          method:'GET',
          url : 'http://localhost:8000/api/company/',
          headers : {
            'Content-Type':'application/json',
            'Authorization':"JWT "+token
          }
        }).then(function(response){
         self.setState({dataCompany: response.data.results})
        })
    }
  render() {
    console.log(this.state.dataCompany)
    return (
      <div className="detailskill">
        <Row>
          <Col lg={12}>
            <Card>
              <CardHeader>
                <h3>
                  <i className="cui-user" />Hiring Partner
                </h3>
              </CardHeader>
              <CardBody>
                <form onSubmit={this.handlePost.bind(this)}>
                  <div className="form-group">
                    <label for="name">
                      <i className="cui-file" /> Company Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      onChange={this.handleChangeName.bind(this)}
                      value={this.state.companyName}
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="address">
                      <i className="cui-file" />Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      onChange={this.handleChangeAddress.bind(this)}
                      value={this.state.address}
                      placeholder="Address"
                      required
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn btn-success"
                    value="Submit"
                  />
                </form>
              </CardBody>
            </Card>
          </Col>
          <Col lg={12}>
            <Card>
              <CardHeader>
                <h3>Info Hiring Partner</h3>
              </CardHeader>
              <CardBody>
                <Table className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.dataCompany.map((item,i)=>(
                     <tr>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                      </tr>

                    ))}
                   
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default HiringPartner;

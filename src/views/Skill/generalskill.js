import React, { Component } from "react";
import { Card, CardBody, CardHeader, Row, Col, Table } from "reactstrap";
import axios from 'axios';

class Generalskill extends Component {
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
    return (
      <div className="generalskill">
        <Row>
          <Col lg={12}>
            <Card>
              <CardHeader>
                <h3>
                  <i className="cui-user-follow" />Add Skill
                </h3>
              </CardHeader>
              <CardBody>
                <form>
                  <div className="form-group">
                    <label for="skill">Select Main Skill:</label>
                    <select
                      className="form-control"
                      id="skill"
                      placeholder="skill"
                      required
                    >
                      <option value="" selected="selected" disabled="disabled">
                        --Select Skill--
                      </option>
                      <option>React</option>
                      <option>Python</option>
                      <option>Javascript</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="title">
                      <i className="cui-file" />Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Skill"
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
                <h3>General Skill</h3>
              </CardHeader>
              <CardBody>
                <Table className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>Name Skill</th>
                      <th>Main SKill</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>React</td>
                      <td>UI</td>
                    </tr>
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
export default Generalskill;

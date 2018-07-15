import React, { Component } from "react";
import { Card, CardBody, CardHeader, Row, Col, Table } from "reactstrap";
import axios from 'axios'

class Mainskill extends Component {
  constructor(props){
    super(props);
    this.state={
      name :'',
      icon :'',
      dataMainskill :[]
    }
  }
  handlePost(){
    const token = localStorage.getItem('token')
    const self = this
    axios({
          method:'post',
          url : 'http://localhost:8000/api/skill/',
          headers : {
            'Content-Type':'application/json',
            'Authorization':"JWT "+token
          },
          data: {
            'name'      : this.state.name,
            'icon'   : this.state.icon,
          }
        }).then(function(response){
        console.log('nama: '+self.state.name+" icon : "+self.state.icon)
        })

  }
      handleChangeName(event) {
        this.setState({name : event.target.value});
      }
      handleChangeIcon(event){
        this.setState({icon : event.target.value});
      }
  componentWillMount(){
    const token = localStorage.getItem('token')
    const self = this
    axios({
          method:'GET',
          url : 'http://localhost:8000/api/skill/',
          headers : {
            'Content-Type':'application/json',
            'Authorization':"JWT "+token
          }
        }).then(function(response){
         self.setState({dataMainskill: response.data.results})
        })
    }
  render() {
    return (
      <div className="mainskill">
        <Row>
          <Col lg={12}>
            <Card>
              <CardHeader>
                <h3>
                  <i className="cui-user-follow" />Add Skill
                </h3>
              </CardHeader>
              <CardBody>
                  <form onSubmit = {this.handlePost.bind(this)}>
                  <div className="form-group">
                    <label for="name">
                      <i className="cui-file" />Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      onChange={this.handleChangeName.bind(this)}
                      value={this.state.name}
                      placeholder="Skill"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="icon">Icon</label>
                    <textarea
                      className="form-control"
                      id="icon"
                      onChange={this.handleChangeIcon.bind(this)}
                      value={this.state.icon}
                      placeholder="Icon"
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
                <h3>Info Skill</h3>
              </CardHeader>
              <CardBody>
                <Table className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>Name Skill</th>
                      <th>Icon</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.dataMainskill.map((item,i)=>(
                     <tr>
                        <td>{item.name}</td>
                        <td>{item.icon}</td>
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
export default Mainskill;

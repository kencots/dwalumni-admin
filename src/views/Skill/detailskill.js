import React, { Component } from "react";
import { Card, CardBody, CardHeader, Row, Col, Table } from "reactstrap";
import axios from 'axios'

class Detailskill extends Component {
  constructor(props){
    super(props);
    this.state={
      name :'',
      skill :'',
      dataDetailskill :[]
    }
  }
  handlePost(){
    const token = localStorage.getItem('token')
    const self = this
    axios({
          method:'post',
          url : 'http://localhost:8000/api/detail-skill/',
          headers : {
            'Content-Type':'application/json',
            'Authorization':"JWT "+token
          },
          data: {
            'name'      : this.state.name,
            'skill'   : this.state.skill,
          }
        }).then(function(response){
        console.log('nama: '+self.state.name+" address : "+self.state.skill)
        })

  }
      handleChangeName(event) {
        this.setState({name : event.target.value});
      }
      handleChangeSkill(event){
        this.setState({skill : event.target.value});
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
         self.setState({dataDetailskill: response.data.results})
        })
    }
  render() {
    return (
      <div className="detailskill">
        <Row>
          <Col lg={12}>
            <Card>
              <CardHeader>
                <h3>
                  <i className="cui-user" />Main Skill
                </h3>
              </CardHeader>
              <CardBody>
                <form onSubmit={this.handlePost.bind(this)}>
                  <div className="form-group">
                    <label for="skill">Select Main Skill:</label>
                    <select
                      className="form-control"
                      id="name"
                      placeholder="skill"
                      required
                      onChange={this.handleChangeName.bind(this)}
                      value={this.state.name}
                    >
                      <option value="" selected="selected" disabled="disabled">
                        --Select Skill--
                      </option>
                      {this.state.dataDetailskill.map((item,i)=>(
                      <option>{item.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="title">
                      <i className="cui-file" />Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="skill"
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
                <h3>Info Skill</h3>
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
                  {this.state.dataDetailskill.map((item,i)=>(
                     <tr>
                        <td>{item.name}</td>
                        <td>{item.skill}</td>
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
export default Detailskill;

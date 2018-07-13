import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password:'',
      isChecked:false,
      status:400
    };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePasswd = this.handleChangePasswd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); }

     handleChangeUsername(event) {
        this.setState({username : event.target.value});
      }
      handleChangePasswd(event){
        this.setState({password:event.target.value});
      }
      handleSubmit(){
        const self=this
        if(this.state.username === "" || this.state.password === "" ){
          alert("Maaf, ada data yang kosong/ belum terisi !!")
        }else{
           axios({
                  method:'post',
                  url:'http://localhost:8000/api/authentication/',
                  headers:{
                    "Content-Type":"application/json"
                  },
                  data:{
                    username: this.state.username,
                    password: this.state.password
                  }
                }).then(function(response){
                  const status= response.request.status;
                  const token=response.data.token
                  self.setState({status:status})
                  localStorage.setItem('token',token)
                  window.location.href="http://localhost:3000/#/dashboard"
                }).catch(function(error){
                  alert(error);
                })
        }
          !this.state.isChecked ? this.setState({username:'',password:'',isChecked:false}):'';
          //event.preventDefault();

      }
  render() {
    console.log(this.state.password);
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Username" value={this.state.username} onChange={this.handleChangeUsername} />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" value={this.state.password} onChange={this.handleChangePasswd} />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4" onClick={this.handleSubmit}>Login</Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">Forgot password?</Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Button color="primary" className="mt-3" active>Register Now!</Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;

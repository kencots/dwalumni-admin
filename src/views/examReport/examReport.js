import React, {Component} from 'react'
import { Card, CardBody, CardHeader, Col, Row, Form, FormGroup, Label, Input, FormText, Button, Table } from 'reactstrap'

export default class examReport extends Component{
	render(){
		const user_id= this.props.match.params.id
		return(
			<div className="animated fadeIn">
				<Row>
					<Col lg={6}>
					<Card>
						<CardHeader>
							<strong><i className="icon-info pr-1"></i>Make Achievement Report</strong>
						</CardHeader>
						<CardBody>
							<Form>
								<FormGroup>
									<Label for="username">User:</Label>
									<Input type="text" name='username' id='username' placeholder='Username' value={user_id}/>
								</FormGroup>
								<FormGroup>
									<Label for="detailskill">Detail Skill:</Label>
									<Input type="select" name="select" id='detailskill'>
										<option value='' selected disabled>--Select Category--</option>
										<option>React Native</option>
										<option>Python</option>
									</Input>
								</FormGroup>
								<FormGroup>
									<Label for="score">Score:</Label>
									<Input type="text" name='score' id='score' placeholder='Score'/>
								</FormGroup>
								<Button className='btn btn-success'>Submit</Button>
							</Form>

						</CardBody>
					</Card>	
					</Col>
					<Col lg={6}>
						 <Card>
			                <CardHeader>
			                  <strong><i className="icon-info pr-1"></i>Learn Achievement Report</strong>
			                </CardHeader>
			                <CardBody>
			                  <p><strong><u>General React Skill Achievement</u></strong></p>
			                    <Table responsive striped hover bordered>
			                      <tbody>
			                        <tr>
			                          <th>Skill Name</th>
			                          <th>Score</th>
			                        </tr>
			                        <tr>
			                          <td>UI</td>
			                          <td><strong>5</strong></td>
			                        </tr>
			                      </tbody>
			                    </Table>
			                     <p><strong><u>General Python Skill Achievement</u></strong></p>
			                    <Table responsive striped hover bordered>
			                      <tbody>
			                        <tr>
			                          <th>Skill Name</th>
			                          <th>Score</th>
			                        </tr>
			                        <tr>
			                          <td>UI</td>
			                          <td><strong>5</strong></td>
			                        </tr>
			                      </tbody>
			                    </Table>
			                    <hr/>
			                    <p><strong><u>Detail Python Skill Achievement</u></strong></p>
			                    <Table responsive striped hover bordered>
			                      <tbody>
			                        <tr>
			                          <th>Skill Name</th>
			                          <th>Score</th>
			                        </tr>
			                        <tr>
			                          <td>UI</td>
			                          <td><strong>5</strong></td>
			                        </tr>
			                      </tbody>
			                    </Table>
			                     <p><strong><u>Detail Python Skill Achievement</u></strong></p>
			                    <Table responsive striped hover bordered>
			                      <tbody>
			                        <tr>
			                          <th>Skill Name</th>
			                          <th>Score</th>
			                        </tr>
			                        <tr>
			                          <td>UI</td>
			                          <td><strong>5</strong></td>
			                        </tr>
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
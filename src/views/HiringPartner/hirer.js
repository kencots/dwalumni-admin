import React, { Component } from "react";
import { Card, CardBody, CardHeader, Row, Col, 
	Label, Form, FormGroup, Input, Button,
	Table } from "reactstrap";
import axios from 'axios'

class Hirer extends Component{
	render(){
		return(
			<Row>
				<Col lg={6}>
					<Card>
						<CardHeader>
							<strong>Hirer Name</strong>
						</CardHeader>
						<CardBody>
							<Form>
								<FormGroup>
									<Label for='username'>Username</Label>
									<Input type='text' id='username'/>
								</FormGroup>
								<FormGroup>
									<Label for='company'>Company Name</Label>
									<Input type='select' id='company'>
										<option selected disbaled>--Select Company--</option>
										<option value="id">Mitar jaya</option>
										<option value="id">Mitar jaya</option>
										<option value="id">Mitar jaya</option>
									</Input>
								</FormGroup>
								<Button className="btn btn-success">Submit</Button>
							</Form>
						</CardBody>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<CardHeader>
							<strong>Hirer List</strong>
						</CardHeader>
						<CardBody>
							<Table className="table table-hover table-bordered">
								<thead>
									<tr>
										<th>Username</th>
										<th>Company</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Abdul jami'</td>
										<td>Maju Lancar</td>
									</tr>
								</tbody>
							</Table>
						</CardBody>
					</Card>
				</Col>
			</Row>
			)
	}
}
export default Hirer;
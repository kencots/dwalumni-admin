import React, {Component} from 'react'
import {Row, Col, Form, FormGroup, Input, Label} from 'reactstrap'

export default class Register extends Component{
	render(){
		return(
			<div className="animated fadeIn">
				<Row>
					<Col lg={6}>
						<Form>
							<FormGroup>
								<Label for='username'/>
								<Input type='text' id='username' placeholder='Username'/>
							</FormGroup>
						</Form>
					</Col>
				</Row>
			</div>
			)
	}
}
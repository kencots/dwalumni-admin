import React, {Component} from 'react'
import {Row, Col, Card, CardHeader, CardBody} from 'reactstrap'

class Certificate extends Component{
	render(){
		return(
			<div className='certicate'>
				<Row>
					<Col lg={12}>
						<Card>
							<CardHeader>
								<h4>Add Certificate</h4>
							</CardHeader>
							<CardBody>
								<form>
									<div class='form-group'>
										<label for='title'>Title:</label>
										<input type='text' name='title' id='title' class='form-control' placeholder='Certificate title'/>
									</div>
									<div class='form-group'>
										<label for='institution'>Institution Name:</label>
										<input type='text' name='institution' id='institution' class='form-control' placeholder='Intitution name'/>
									</div>
									<div class='form-group'>
										<label for='cert-img'>Certificate Image URL:</label>
										<input type='text' name='cert-img' id='cert-img' class='form-control' placeholder='Certificate image url'/>
									</div>
									<input type='submit' value='Submit' class='btn btn-success' />
								</form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</div>
			)
	}
}
export default Certificate;
import React ,{Component} from 'react'
import {Card, CardBody, CardHeader, Row, Col} from 'reactstrap'

class PersonalInfo extends Component{
	render(){
		return(
				<div className="personal-info">
					<Row>
						<Col lg={12}>
							<Card>
								<CardHeader>
									<h3>Your Personal Information</h3>
								</CardHeader>
								<CardBody>
									<form>
									  <div class="form-group">
									    <label for="username"><i class="icon-file"></i>Name:</label>
									    <input type="username" class="form-control" id="username" placeholder="Your name" required/>
									  </div>
									  <div class='form-group'>
									  	<label for='gender'>Gender:</label>
									  	<select class='form-control' name='gender' id='gender'>
									  		<option value='' selected='selected' disabled='disabled'>--Select Gender--</option>
									  		<option value='male'>Male</option>
									  		<option value='female'>Female</option>									  	
									  	</select>
									  </div>
									  <div class='form-group'>
									  	<label for='birthday'>Birthday:</label>
									  	<input type='date' name='birthday' id='birthday' class='form-control' required/>
									  </div>
									  <div class="form-group">
									    <label for="salary">Expected Salary:</label>
									    <div class="input-group mb-2">
									        <div class="input-group-prepend">
									          <div class="input-group-text">Rp</div>
									        </div>
									        <input type="text" class="form-control" id="salary" placeholder="Expected salary"/>
									     </div>
									  </div>
									  <div class="form-group">
									    <label for="location">Expected Work Location:</label>
									    <input type="text" class="form-control" id="location" placeholder="expected work location" required/>
									  </div>
									  <div class='form-group'>
									  	<label for='about'>About Me</label>
									  	<textarea name='about' id='about' placeholder="Tell us all about you" class='form-control'></textarea>
									  </div>
									  <input type="submit" class="btn btn-success" value="Submit" name='pers-submit'/>
									</form>
								</CardBody>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col lg={12}>
							<Card>
								<CardHeader>
									<h4>Education</h4>
								</CardHeader>
								<CardBody>
									<form>
										<div class='form-group'>
											<label for='school'>Scholl/ Education Institution:</label>
											<input type='text' name='scholl' id='scholl' class='form-control' placeholder="School/ education Institution name"/>
										</div>
										<div class='form-group'>
											<label for='major'>Major:</label>
											<input type='text' name='major' id='major' class='form-control' placeholder="Major that you took"/>
										</div>
										<div class='form-group'>
											<label for='year'>Year</label>
											<input type='text' name='year' id='year' class='form-control' placeholder="Year"/>
										</div>
										<input type='submit' value='Submit' class='btn btn-success' name='edu-submit'/>
									</form>
								</CardBody>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col lg={12}>
							<Card>
								<CardHeader>
									<h4>Experience</h4>
								</CardHeader>
								<CardBody>
									<form>
										<div class='form-group'>
											<label for='exp-name'>Experienced in: </label>
											<input type='text' name='exp-name' id='exp-name' placeholder='Experience' class='form-control'/>
										</div>
										<div class='form-group'>
											<label for='institution'>Institution/ Organization</label>
											<input type='text' name='institution' id='institution' class='form-control' placeholder="Institution or Organization name"/>
										</div>
										<div class='form-group'>
											<label for='exp-desc'>Description</label>
											<textarea name='exp-desc' id='exp-desc' class='form-control' placeholder="Experience description"></textarea>
										</div>
										<input type='submit' value='Submit' name='exp-submit' class='btn btn-success'/>
									</form>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</div>
			)
	}
}
export default PersonalInfo;
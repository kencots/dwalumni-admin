import React ,{Component} from 'react'
import {Card, CardBody, CardHeader, Row, Col} from 'reactstrap'

class Portfolio extends Component{
	render(){
		return(
				<div className="portfolio">
					<Row>
						<Col lg={12}>
							<Card>
								<CardHeader>
									<h3>Tambah Portfolio</h3>
								</CardHeader>
								<CardBody>
									<form>
									  <div class="form-group">
									    <label for="title"><i class="cui-file"></i>Title</label>
									    <input type="text" class="form-control" id="title" placeholder="Portfolio title" required/>
									  </div>
									  <div class="form-group">
									    <label for="desc">Decription</label>
									    <textarea class="form-control" id="desc" placeholder="Description" required></textarea>
									  </div>
									  <div class="form-group">
									    <label for="link">Link GitHub</label>
									    <input type="text" class="form-control" id="link" placeholder="Link GitHub" required/>
									  </div>
									  <input type="submit" class="btn btn-success" value="Tambah"/>
									</form>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</div>
			)
	}
}
export default Portfolio;
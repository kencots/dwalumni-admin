import React, {Component} from 'react'
import {Row, Col, Card, CardHeader, CardBody} from  'reactstrap'
class Article extends Component{
	render(){
		return(
			<div className='article'>
				<Row>
					<Col lg={12}>
						<Card>
							<CardHeader>
								<h4><i class='icon-user'></i> Add Article</h4>
							</CardHeader>
							<CardBody>
								<form>
									<div class='form-group'>
										<label for='title'>Title</label>
										<input type='text' name='title' id='title' class='form-control' placeholder="Article Title"/>
									</div>
									<div class='form-group'>
										<label for='article-img'>Image URL</label>
										<input type='text' name='article-img' id='article-img' class='form-control' placeholder="Image URL"/>
									</div>
									<div class='form-group'>
										<label for='article-desc'>Description</label>
										<textarea name='article-desc' id='article-desc' class='form-control' placeholder='Article description'></textarea>
									</div>
									<input type='submit' name='article-submit' value='Submit' class='btn btn-success'/>
								</form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</div>
			)
	}
}
export default Article;
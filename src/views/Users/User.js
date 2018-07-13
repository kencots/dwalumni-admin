import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import usersData from './UsersData'

class User extends Component {

  render() {

    const user = usersData.find( user => user.id.toString() === this.props.match.params.id)

    const userDetails = user ? Object.entries(user) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>Profil User id: {this.props.match.params.id}</strong>
              </CardHeader>
                <CardBody>
                  <Table responsive striped hover>
                    <tbody>
                      <tr>
                        <td><strong>First Name</strong></td>
                        <td>Nama depan</td>
                      </tr>
                      <tr>
                        <td><strong>Last Name</strong></td>
                        <td>Nama Belakang</td>
                      </tr>
                      <tr>
                        <td><strong>Gender</strong></td>
                        <td>Jenis kelamin</td>
                      </tr>
                      <tr>
                        <td><strong>Birthday</strong></td>
                        <td>20 Mei 1908</td>
                      </tr>
                      <tr>
                        <td><strong>Expected Salary</strong></td>
                        <td>Rp 10.000.000,00</td>
                      </tr>
                      <tr>
                        <td><strong>Expected Work Location</strong></td>
                        <td>Jakarta</td>
                      </tr>
                      <tr>
                        <td><strong>Education</strong></td>
                        <td>S1 Universitas Indonesia</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>S2 Universiti Utara Malaysia</td>
                      </tr>
                      <tr>
                        <td><strong>Summary</strong></td>
                        <td>
                          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء
                        </td>
                      </tr>
                    </tbody>
                  </Table>
              </CardBody>
            </Card>
            <Card>
                <CardHeader>
                  <strong><i className="icon-info pr-1"></i>Learn Achievement</strong>
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
          <Col lg={6}>
              <Card>
                <CardHeader>
                  <strong><i className="icon-info pr-1"></i>Role Status User id: {this.props.match.params.id}</strong>
                </CardHeader>
                <CardBody>
                    <Table responsive striped hover>
                      <tbody>
                        {
                          userDetails.map(([key, value]) => {
                            return (
                              <tr>
                                <td>{`${key}:`}</td>
                                <td><strong>{value}</strong></td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </Table>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <strong><i className="icon-info pr-1"></i>Portfolio</strong>
                </CardHeader>
                <CardBody>
                    <Table responsive striped hover>
                      <tbody>
                              <tr>
                                <th>No</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>GitHub Link</th>
                              </tr>
                              <tr>
                                <td>1</td>
                                <td>App Test</td>
                                <td>
                                  Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.
                                </td>
                                <td>Google.com</td>
                              </tr>
                              <tr>
                                <td>1</td>
                                <td>App Test</td>
                                <td>
                                  Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.
                                </td>
                                <td>Google.com</td>
                              </tr>
                              <tr>
                                <td>1</td>
                                <td>App Test</td>
                                <td>
                                  Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.
                                </td>
                                <td>Google.com</td>
                              </tr>
                      </tbody>
                    </Table>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <strong><i className="icon-info pr-1"></i>Article</strong>
                </CardHeader>
                <CardBody>
                    <Table responsive striped hover>
                      <tbody>
                              <tr>
                                <th>No</th>
                                <th>Title</th>
                                <th>Link</th>
                              </tr>
                              <tr>
                                <td>1</td>
                                <td>App Test</td>
                                <td>Google.com</td>
                              </tr>
                              <tr>
                                <td>1</td>
                                <td>App Test</td>
                                <td>Google.com</td>
                              </tr>
                              <tr>
                                <td>1</td>
                                <td>App Test</td>
                                <td>Google.com</td>
                              </tr>
                      </tbody>
                    </Table>
                </CardBody>
              </Card>
               <Card>
                <CardHeader>
                  <strong><i className="icon-info pr-1"></i>Certificate</strong>
                </CardHeader>
                <CardBody>
                    <Table responsive striped hover>
                      <tbody>
                              <tr>
                                <th>No</th>
                                <th>Title</th>
                                <th>Link Image</th>
                              </tr>
                              <tr>
                                <td>1</td>
                                <td>App Test</td>
                                <td>Google.com</td>
                              </tr>
                              <tr>
                                <td>1</td>
                                <td>App Test</td>
                                <td>Google.com</td>
                              </tr>
                              <tr>
                                <td>1</td>
                                <td>App Test</td>
                                <td>Google.com</td>
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

export default User;

import React, { Component } from "react";
import { Card, CardBody, CardHeader, Row, Col, Table } from "reactstrap";

class HiringPartner extends Component {
  render() {
    return (
      <div className="detailskill">
        <Row>
          <Col lg={12}>
            <Card>
              <CardHeader>
                <h3>
                  <i className="cui-user" />Hiring Partner
                </h3>
              </CardHeader>
              <CardBody>
                <form>
                  <div className="form-group">
                    <label for="name">
                      <i className="cui-file" />Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="address">
                      <i className="cui-file" />Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Address"
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
                <h3>Info Hiring Partner</h3>
              </CardHeader>
              <CardBody>
                <Table className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Roy</td>
                      <td>Jakarta</td>
                    </tr>
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
export default HiringPartner;
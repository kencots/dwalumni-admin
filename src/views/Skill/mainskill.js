import React, { Component } from "react";
import { Card, CardBody, CardHeader, Row, Col, Table } from "reactstrap";

class Mainskill extends Component {
  render() {
    return (
      <div className="mainskill">
        <Row>
          <Col lg={12}>
            <Card>
              <CardHeader>
                <h3>
                  <i className="cui-user-follow" />Add Skill
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
                      placeholder="Skill"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="icon">Icon</label>
                    <textarea
                      className="form-control"
                      id="desc"
                      placeholder="Icon"
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
                <h3>Info Skill</h3>
              </CardHeader>
              <CardBody>
                <Table className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>Name Skill</th>
                      <th>Icon</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>React</td>
                      <td>Icon</td>
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
export default Mainskill;

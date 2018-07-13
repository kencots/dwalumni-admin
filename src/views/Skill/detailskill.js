import React, { Component } from "react";
import { Card, CardBody, CardHeader, Row, Col, Table } from "reactstrap";

class Detailskill extends Component {
  render() {
    return (
      <div className="detailskill">
        <Row>
          <Col lg={12}>
            <Card>
              <CardHeader>
                <h3>
                  <i className="cui-user" />Main Skill
                </h3>
              </CardHeader>
              <CardBody>
                <form>
                  <div className="form-group">
                    <label for="skill">Select Main Skill:</label>
                    <select
                      className="form-control"
                      id="skill"
                      placeholder="skill"
                      required
                    >
                      <option value="" selected="selected" disabled="disabled">
                        --Select Skill--
                      </option>
                      <option>React</option>
                      <option>Python</option>
                      <option>Javascript</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="title">
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
                      <th>Main SKill</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>React</td>
                      <td>UI</td>
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
export default Detailskill;

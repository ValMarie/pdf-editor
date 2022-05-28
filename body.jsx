import React from "react";
import { Card, CardTitle, CardText, Col, Row } from "reactstrap";
import { CgArrowsMergeAltH } from "react-icons/cg";
import { FaCompressArrowsAlt, FaFilePowerpoint } from "react-icons/fa";
import { FiEdit} from "react-icons/fi";
import { AiOutlineSplitCells } from "react-icons/ai";
import { BsFillFileEarmarkPdfFill , BsFileEarmarkWordFill, BsFillArrowDownRightSquareFill, BsFileEarmarkExcelFill} from "react-icons/bs";
import pdfLogo from "../assets/fast_load.png";

const Body = () => {
  return (
    <div>
      <Card className="p-5 container card-body text-center shadow-lg">
        <CardTitle tag="h5">Special Title Treatment</CardTitle>

        <Row>
          <Col md={3}>
            <Card className="icon_class shadow-lg">
              {" "}
              <h3>
                {" "}
                <CgArrowsMergeAltH className="icon" />{" "}
                <BsFillFileEarmarkPdfFill className="icon" />
              </h3>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="icon_class shadow-lg">
              {" "}
              <h3>
                {" "}
                <FaCompressArrowsAlt className="icon" />{" "}
                <BsFillFileEarmarkPdfFill className="icon" />
              </h3>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="icon_class shadow-lg">
              {" "}
              <h3>
                {" "}
                <AiOutlineSplitCells className="icon" />{" "}
                <BsFillFileEarmarkPdfFill className="icon" />
              </h3>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="icon_class shadow-lg">
              {" "}
              <h3>
                {" "}
                <FiEdit className="icon" />{" "}
                < BsFillFileEarmarkPdfFill className="icon" />
              </h3>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <Card className="icon_class shadow-lg">
              {" "}
              <h3>
                {" "}
                <BsFillArrowDownRightSquareFill className="icon" />{" "}
                <BsFileEarmarkWordFill className="icon" />
              </h3>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="icon_class shadow-lg">
              {" "}
              <h3>
                {" "}
                <BsFillArrowDownRightSquareFill className="icon" />{" "}
                <BsFileEarmarkExcelFill className="icon" />
              </h3>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="icon_class shadow-lg">
              {" "}
              <h3>
                {" "}
                <BsFillArrowDownRightSquareFill className="icon" />{" "}
                <FaFilePowerpoint className="icon" />
              </h3>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="icon_class shadow-lg">
              {" "}
              <h3>
                {" "}
                <AiOutlineSplitCells className="icon" />{" "}
                <BsFillFileEarmarkPdfFill className="icon" />
              </h3>
            </Card>
          </Col>
        </Row>

        <CardText></CardText>
      </Card>

      <Row className="body-text m-5">
        <Col md="5">
          <p>The fastest and most convenient way to edit your PDFs</p>
        </Col>
        <Col md="7">
          <div
            className="svg-img"
            style={{
              backgroundImage: `url(${pdfLogo})`,
              backgroundRepeat: "no-repeat",
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Body;

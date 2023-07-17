import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Listings() {
    return (
        <div style={{ margin: "auto" }}>
            <h2
                style={{
                    fontSize: "36px",
                    lineHeight: "50px",
                    marginTop: "20px",
                    textAlign: "center",
                    fontWeight: "normal",
                }}
            >
                Browse stores in Chula Vista
            </h2>
            <Container style={{ marginTop: "50px", textAlign: "center" }}>
                <Row
                    style={{
                        borderBottom: "2px solid #E8E9EB",
                        display: "flex",
                        justifyContent: "space-evenly",
                    }}
                >
                    <Row>
                        <Col xs=".5">
                            <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }}
                                src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/38/bef2eb95-7375-4547-ab37-21502de090e0.png"
                                roundedCircle
                            />
                        </Col>
                        <Col style={{ textAlign: 'left' }}>
                            <h5 style={{ fontWeight: "bold" }}>Ralphs</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row>
                        <Col xs=".5">
                            <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }}
                                src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/279/b6a0666c-e18e-4be3-a7a9-22def804a290.png"
                                roundedCircle
                            />
                        </Col>
                        <Col style={{ textAlign: 'left' }}>
                            <h5 style={{ fontWeight: "bold" }}>Sprouts Farmer's Market</h5>
                            <p> Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row>
                        <Col xs=".5">
                            <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }}
                                src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/1487/5ffe3fb7-2a0c-4714-8c71-364d7186a3d3.png"
                                roundedCircle
                            />
                        </Col>
                        <Col sm="1">
                            <h5 style={{ fontWeight: "bold" }}>Walmart</h5>
                            <p>Delivery</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs=".5">
                            <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }}
                                src="https://www.instacart.com/image-server/116x116/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png"
                                roundedCircle
                            />
                        </Col>
                        <Col style={{ textAlign: 'left' }}>
                            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row>
                        <Col xs=".5">
                            <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }}
                                src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png"
                                roundedCircle
                            />
                        </Col>
                        <Col style={{ textAlign: 'left' }}>
                            <h5 style={{ fontWeight: "bold" }}>Costco</h5>
                            <p>Delivery </p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row>
                        <Col xs=".5">
                            <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }}
                                src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/290/627b03bd-1ef8-4d74-8f3d-346f7f6d18a5.png"
                                roundedCircle
                            />
                        </Col>
                        <Col sm="1">
                            <h5 style={{ fontWeight: "bold" }}>Vons</h5>
                            <p>Delivery</p>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    );
}

export default Listings

import Card from "react-bootstrap/Card";

function Background() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row"
        }}>
            <div id="banner">
                <Card border="light" style={{
                    width: "100%",
                    minHeight: "428px",
                    marginBottom: "50px",
                    backgroundColor: "#DDEDD4",
                    borderRadius: "0",
                }}
                    className="text-black"
                >
                    <div
                        style={{
                            top: "auto",
                            width: "650px",
                            marginLeft: "100px",
                            marginBottom: "50px",
                            marginTop: "75px",
                        }}
                    >
                        <Card.Text style={{ fontSize: "3em", fontWeight: "bold" }}>
                            Order groceries for<br /> delivery or pickup today
                        </Card.Text>
                        <Card.Text style={{ fontSize: "1em" }}>
                            Whatever you want from local stores, brought right to your door.
                        </Card.Text>
                    </div>
                </Card>
            </div>
            <div>
                <img
                    style={{
                        minHeight: "428px",
                        width: "60%",
                        position: "absolute",
                        backgroundSize: "contain",
                        backgroundRepeat: 'no-repeat',
                    }}
                    src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" fluid width="1166px" height="20px" />
            </div>
        </div>
    )
}

export default Background;
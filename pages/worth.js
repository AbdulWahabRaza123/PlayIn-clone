import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import { WorthStyle, Wrapper } from "../Components/styles";
import { H1, H3, HR, P } from "../Components/Typography";
import Image from "next/image";
const worth = () => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);
  return mount ? (
    <>
      <Navbar title="Worth" />
      <WorthStyle>
        <Wrapper className="container container-fluid">
          <Wrapper className="row" style={{ marginTop: "100px" }}>
            <Wrapper className="ml-4 col-md-5">
              <H1>
                OUR
                <br />
                WORTH
              </H1>
            </Wrapper>
            <Wrapper className="col-md-1"></Wrapper>
            <Wrapper className="col-md-5 ml-4">
              <P size="20px" color="white" weight="100">
                We are guided by a shared vision:
                <br />
                <br />
                to revolutionize fandom, champion global communities and embrace
                greatness one play at a time, through seamless adoption of
                decentralized technology.
              </P>
            </Wrapper>
          </Wrapper>
          <HR color="#49ffa4" />
          <HR color="#49ffa4" />
        </Wrapper>

        {/* Generating Boxes */}

        <Wrapper className="container container-fluid mt-5 mb-5">
          <Wrapper
            className="d-flex row"
            style={{ flex: "wrap", flexDirection: "row" }}
          >
            {/* 1st Box  */}
            <Wrapper className="col-md-5">
              <Wrapper
                className="mt-5"
                style={{
                  borderRadius: "10px",
                  border: "1px solid #49ffa4",
                  position: "relative",
                  maxWidth: "70vh",
                  height: "60vh",
                }}
              >
                <Image
                  src="/assets/eyes.svg"
                  width="500"
                  height="350"
                  className="img-fluid"
                  style={{
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                />
                <H3
                  size="75px"
                  className="ml-3"
                  style={{ position: "absolute", top: "0" }}
                >
                  01
                </H3>
                <H3
                  size="30px"
                  weight="600"
                  className="ml-3 mb-4"
                  style={{
                    position: "absolute",
                    bottom: "0",
                  }}
                >
                  VISION AND CONTROL
                </H3>
              </Wrapper>
            </Wrapper>
            {/* 2nd Box  */}
            <Wrapper className="col-md-7">
              <Wrapper
                className="mt-5"
                style={{
                  borderRadius: "10px",
                  border: "1px solid #49ffa4",
                  position: "relative",
                  maxWidth: "90vh",
                  height: "60vh",
                }}
              >
                <Image
                  src="/assets/three.svg"
                  width="600"
                  height="450"
                  className="img-fluid"
                  style={{
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                />
                <H3
                  size="75px"
                  className="ml-3"
                  style={{ position: "absolute", top: "0" }}
                >
                  02
                </H3>
                <H3
                  size="30px"
                  weight="600"
                  className="ml-3 mb-4"
                  style={{
                    position: "absolute",
                    bottom: "0",
                  }}
                >
                  COMMUNITY
                </H3>
              </Wrapper>
            </Wrapper>

            {/* 3rd Box  */}

            <Wrapper className="col-md-12">
              <Wrapper
                className="mt-5"
                style={{
                  borderRadius: "10px",
                  border: "1px solid #49ffa4",
                  position: "relative",
                  maxWidth: "166vh",
                  height: "60vh",
                }}
              >
                <Image
                  src="/assets/gamming.svg"
                  width="600"
                  height="450"
                  className="img-fluid"
                  style={{
                    position: "absolute",
                    bottom: "0",
                    top: "0",
                    left: "0",
                    right: "0",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                />
                <H3
                  size="75px"
                  className="ml-3"
                  style={{ position: "absolute", top: "0" }}
                >
                  03
                </H3>
                <H3
                  size="30px"
                  weight="600"
                  className="ml-3 mb-4"
                  style={{
                    position: "absolute",
                    bottom: "0",
                  }}
                >
                  GAMIFIED EXPERIENCE
                </H3>
              </Wrapper>
            </Wrapper>

            {/* 3rd Row  */}
            {/* 4th Box  */}
            <Wrapper className="col-md-7">
              <Wrapper
                className="mt-5"
                style={{
                  borderRadius: "10px",
                  border: "1px solid #49ffa4",
                  position: "relative",
                  maxWidth: "90vh",
                  height: "60vh",
                }}
              >
                <Image
                  src="/assets/hand.svg"
                  width="400"
                  height="300"
                  className="img-fluid"
                  style={{
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    marginTop: "auto",
                    marginBottom: "auto",
                    left: "0",
                    right: "0",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <H3
                  size="75px"
                  className="ml-3"
                  style={{ position: "absolute", top: "0" }}
                >
                  04
                </H3>
                <H3
                  size="30px"
                  weight="600"
                  className="ml-3 mb-4"
                  style={{
                    position: "absolute",
                    bottom: "0",
                  }}
                >
                  BEYOND GAMING
                </H3>
              </Wrapper>
            </Wrapper>

            {/* 5th Box  */}
            <Wrapper className="col-md-5">
              <Wrapper
                className="mt-5 worth_box5_res"
                style={{
                  borderRadius: "10px",
                  border: "1px solid #49ffa4",
                  position: "relative",
                  maxWidth: "70vh",
                  height: "60vh",
                }}
              >
                <Image
                  src="/assets/horse.svg"
                  width="500"
                  height="350"
                  className="img-fluid"
                  style={{
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                />
                <H3
                  size="75px"
                  className="ml-3"
                  style={{ position: "absolute", top: "0" }}
                >
                  05
                </H3>
                <H3
                  size="30px"
                  weight="600"
                  className="ml-3 mb-4"
                  style={{
                    position: "absolute",
                    bottom: "0",
                  }}
                >
                  VISION AND CONTROL
                </H3>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </WorthStyle>
    </>
  ) : (
    ""
  );
};

export default worth;

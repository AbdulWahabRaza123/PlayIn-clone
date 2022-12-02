import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import { AboutUsStyle, Wrapper } from "../Components/styles";
import { H1, P } from "../Components/Typography";
import Image from "next/image";
const about = () => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);
  return mount ? (
    <>
      <Navbar title="About" />
      <AboutUsStyle>
        {/* Team Card 1  */}
        <Wrapper
          className="container container-fluid"
          style={{ marginTop: "70px" }}
        >
          <H1 className="text-center">MEET THE TEAM</H1>
          <P className="mt-5 text-center">
            We have gathered the most dedicated and driven team to
            <br />
            guide you along the way
          </P>
        </Wrapper>
        <Wrapper
          className="container container-fluid"
          style={{ marginTop: "150px" }}
        >
          <Wrapper
            className="d-flex mt-5"
            style={{
              flexDirection: "row",
              flex: "wrap",
              position: "relative",
            }}
          >
            <Wrapper
              style={{
                width: "350px",
                height: "500px",
                position: "absolute",
                left: "0",
              }}
            >
              <P style={{}} weight="bolder" size="25px" className="ml-2 mt-4">
                {" "}
                WHETHER OR NOT THIS IS YOUR FIRST CRYPTO/ WEB3 RODEO
                <br />
                <br />
                WE ARE CONFIDENT THAT WE CAN SUPPORT YOU.
              </P>
            </Wrapper>
            <Wrapper
              // className="col-md-8"
              style={{
                width: "500px",
                height: "500px",
              }}
            >
              <Image
                style={{
                  position: "absolute",
                  right: "0",
                }}
                src="/assets/saen.svg"
                width="430"
                height="230"
                alt="team"
                className="img-fluid team_res_image"
              />

              <Wrapper
                className="text-right text-white set_team_image_info_bottom"
                style={{
                  position: "absolute",
                  right: "0",
                  // bottom: "-220px",
                  backgroundColor: "black",
                  paddingTop: "30px",
                  paddingBottom: "20px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  // marginTop: "100px",
                }}
              >
                <H1 size="21px" className="text-center">
                  SEAN JAGERMANN
                </H1>
                <br />
                <P size="15px">Co-Founder</P>
                <P size="15px">Head of Finance/Partnerships</P>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>

        {/* Team Card 2  */}

        <Wrapper className="container container-fluid">
          <Wrapper
            className="d-flex reduce_mt_in_desk"
            style={{
              flexDirection: "row",
              flex: "wrap",
              position: "relative",
            }}
          >
            <Wrapper
              // className="col-md-8"
              style={{
                width: "500px",
                height: "500px",
              }}
            >
              <Image
                style={{
                  position: "absolute",
                  left: "0",
                }}
                src="/assets/evua.svg"
                width="430"
                height="230"
                alt="team"
                className="img-fluid team_res_image"
              />

              <Wrapper
                className="text-right text-white set_team_image_info_bottom"
                style={{
                  position: "absolute",
                  left: "0",
                  backgroundColor: "black",
                  paddingTop: "30px",
                  paddingBottom: "20px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <H1 size="21px" className="text-center">
                  ENYU RAO
                </H1>
                <br />
                <P size="15px">Co-Founder</P>
                <P size="15px">Head of Operations/Product</P>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>

        {/* Team Card 3  */}
        <Wrapper className="container container-fluid">
          <Wrapper
            className="d-flex reduce_mt_in_desk"
            style={{
              flexDirection: "row",
              flex: "wrap",
              position: "relative",
            }}
          >
            <Wrapper
              style={{
                width: "500px",
                height: "500px",
              }}
            >
              <Image
                style={{
                  position: "absolute",
                  right: "0",
                }}
                src="/assets/haider.svg"
                width="430"
                height="230"
                alt="team"
                className="img-fluid team_res_image"
              />

              <Wrapper
                className="text-right text-white set_team_image_info_bottom"
                style={{
                  position: "absolute",
                  right: "0",
                  backgroundColor: "black",
                  paddingTop: "30px",
                  paddingBottom: "20px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <H1 size="21px" className="text-center">
                  GHULAM HAIDER
                </H1>
                <br />
                <P size="15px">Co-Founder</P>
                <P size="15px">Head of Dev/Implementation</P>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </AboutUsStyle>
    </>
  ) : (
    ""
  );
};

export default about;

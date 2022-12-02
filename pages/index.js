import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Typed from "react-typed";
import StarIcon from "@mui/icons-material/Star";
import Marquee from "react-fast-marquee";
import {
  H1,
  H2,
  H3,
  H4,
  H3Box,
  P,
  P2,
  POrg,
  HR,
} from "../Components/Typography";
import { Wrapper, HomeStyle, Button, Input } from "../Components/styles";
import LImgRTxt from "../Components/LImgRTxt";
import AOS from "aos";
import "aos/dist/aos.css";
const index = () => {
  const [mount, setMount] = useState(false);
  const [show, setShow] = useState(false);
  const [showId, setShowId] = useState(null);
  useEffect(() => {
    setMount(true);
    AOS.init();
  }, []);

  const ExpandFun = (props) => {
    const html = props.html;
    return <Wrapper dangerouslySetInnerHTML={{ __html: html }} />;
  };
  const mainBox1Arr = [
    {
      img: "/assets/medal.svg",
      desc: "You must reach the Daily PLEX Rewards Target. Win or Lose, PLEX is earned.",
    },
    {
      img: "/assets/token.svg",
      desc: "You are then granted an allocation of $PLAYN Tokens.",
    },
    {
      img: "/assets/nft.svg",
      desc: "$PLAYN Token allocations are auto-staked, and you receive a share of the revenue generated from $PLAYN liquidity pools.",
    },
  ];
  const mainEcosystemBoxArr = [
    {
      title: "PLAY2EARN WITH COLLECTIBLES.",
      content: `You automatically earn a set amount of 
      <span style={{ color: "#49ffa4" }}>
        <b>PLEX</b>
      </span> 
      points just by owning a 
      <span style={{ color: "#49ffa4" }}>
        <b>COLLECTIBLE.</b>
      </span>
      <br />
      <br />
      Play by Play. All the time, Everytime.
      <br />
      <ul>
        <li>
          There are <b>5 tiers</b> of PlayIn Collectibles
          <br />
          <br />
          <span>
            <b>Normal</b>
          </span>
          , 
          <span style={{ color: "#61DBFB" }}>
            <b>COOL</b>
          </span>
          , 
          <span style={{ color: "#49ffa4" }}>
            <b>RARE</b>
          </span>
          , 
          <span style={{ color: "#A020F0" }}>
            <b>Epic</b>
          </span>
          , 
          <span style={{ color: "yellow" }}>
            <b>ELITE</b>
          </span>
          , <br />
          <br />
          The higher tier the item, the higher the bonuses
          you earn on your gameplay
        </li>
      </ul>`,
    },
    {
      title: "SENTIMENT AND CONSENSUS ODDS MAKING",
      content: `You automatically earn a set amount of 
      <span style={{ color: "#49ffa4" }}>
        <b>PLEX</b>
      </span> 
      points just by owning a 
      <span style={{ color: "#49ffa4" }}>
        <b>COLLECTIBLE.</b>
      </span>
      <br />
      <br />
      Play by Play. All the time, Everytime.
      <br />
      <ul>
        <li>
          There are <b>5 tiers</b> of PlayIn Collectibles
          <br />
          <br />
          <span>
            <b>Normal</b>
          </span>
          , 
          <span style={{ color: "#61DBFB" }}>
            <b>COOL</b>
          </span>
          , 
          <span style={{ color: "#49ffa4" }}>
            <b>RARE</b>
          </span>
          , 
          <span style={{ color: "#A020F0" }}>
            <b>Epic</b>
          </span>
          , 
          <span style={{ color: "yellow" }}>
            <b>ELITE</b>
          </span>
          , <br />
          <br />
          The higher tier the item, the higher the bonuses
          you earn on your gameplay
        </li>
      </ul>`,
    },
    {
      title: "ORACLE TO CONTRACT SETTLEMENT",
      content: `You automatically earn a set amount of 
      <span style={{ color: "#49ffa4" }}>
        <b>PLEX</b>
      </span> 
      points just by owning a 
      <span style={{ color: "#49ffa4" }}>
        <b>COLLECTIBLE.</b>
      </span>
      <br />
      <br />
      Play by Play. All the time, Everytime.
      <br />
      <ul>
        <li>
          There are <b>5 tiers</b> of PlayIn Collectibles
          <br />
          <br />
          <span>
            <b>Normal</b>
          </span>
          , 
          <span style={{ color: "#61DBFB" }}>
            <b>COOL</b>
          </span>
          , 
          <span style={{ color: "#49ffa4" }}>
            <b>RARE</b>
          </span>
          , 
          <span style={{ color: "#A020F0" }}>
            <b>Epic</b>
          </span>
          , 
          <span style={{ color: "yellow" }}>
            <b>ELITE</b>
          </span>
          , <br />
          <br />
          The higher tier the item, the higher the bonuses
          you earn on your gameplay
        </li>
      </ul>`,
    },
    {
      title: "BETTING ON AUTOPILOT",
      content: `You automatically earn a set amount of 
      <span style={{ color: "#49ffa4" }}>
        <b>PLEX</b>
      </span> 
      points just by owning a 
      <span style={{ color: "#49ffa4" }}>
        <b>COLLECTIBLE.</b>
      </span>
      <br />
      <br />
      Play by Play. All the time, Everytime.
      <br />
      <ul>
        <li>
          There are <b>5 tiers</b> of PlayIn Collectibles
          <br />
          <br />
          <span>
            <b>Normal</b>
          </span>
          , 
          <span style={{ color: "#61DBFB" }}>
            <b>COOL</b>
          </span>
          , 
          <span style={{ color: "#49ffa4" }}>
            <b>RARE</b>
          </span>
          , 
          <span style={{ color: "#A020F0" }}>
            <b>Epic</b>
          </span>
          , 
          <span style={{ color: "yellow" }}>
            <b>ELITE</b>
          </span>
          , <br />
          <br />
          The higher tier the item, the higher the bonuses
          you earn on your gameplay
        </li>
      </ul>`,
    },
  ];
  return mount ? (
    <>
      <Navbar title="Home" />
      <HomeStyle>
        {/* Section 1 Main/Home  */}
        <Wrapper
          className="container-fluid"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Wrapper className="row align-items-center res_center_content">
            {/* for desktop version line? */}
            <Wrapper className="col-md-1 mt-3 mb-5 show_line_home">
              <Wrapper className="vl" style={{ marginLeft: "31px" }}></Wrapper>
            </Wrapper>
            {/* for font written on home page */}
            <Wrapper className="col-md-8">
              {/* to set the size and padding on responsiveness */}
              <H1 className="home_res_h1_pad_top">
                <Typed
                  strings={["A NEW APPROACH TO SPORTS GAMING"]}
                  typeSpeed={150}
                  backSpeed={100}
                />
              </H1>
              {/* for paragraph written below h1 text */}
              <Wrapper className="row">
                {/* for desktop version */}
                <Wrapper className="col-md-8">
                  <P className="home_res_pad_bottom display_para_desk">
                    Peer2Peer Sports Betting Meets Play2Earn Gaming Earn All The
                    Time. Every Time.
                  </P>
                  {/* for mobile version  */}
                  <P
                    size="18px"
                    className="display_para_res home_res_pad_bottom"
                  >
                    Peer2Peer Sports Betting Meets
                    <br /> Play2Earn Gaming
                    <br /> Earn All The Time. Every Time.
                  </P>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>
          <Wrapper className="col-md-3"></Wrapper>
        </Wrapper>
        {/* Marquee Section 2 */}
        <Wrapper
          className="mt-5 mb-5"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Marquee
            play={true}
            pauseOnHover={true}
            className={`bg-black`}
            gradient={false}
          >
            <H2>
              - TOURNAMENT -<span className="text-success">REWARDS</span>- GAMES
              -<span className="text-success"> BET TO WIN </span>- TOURNAMENT -
              <span className="text-success"> REWARDS </span>- GAMES -
              <span className="text-success"> BET TO WIN </span>
            </H2>
          </Marquee>
        </Wrapper>
        {/* Section 3 Game Xp Real Money */}
        <Wrapper
          className="container-fluid mt-5 mb-5"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Wrapper className="row">
            <Wrapper className="col-md-1"></Wrapper>
            <Wrapper className="col-md-4" style={{ marginTop: "200px" }}>
              <H3 className="text-center">
                IN GAME XP TO
                <br /> REAL MONEY
              </H3>
              <Wrapper
                style={{
                  marginTop: "-50px",
                  marginBottom: "50px",
                  marginLeft: "100px",
                  backgroundImage: `url("/assets/line.svg")`,
                  maxWidth: "400px",
                  height: "200px",
                }}
              >
                <P style={{ paddingTop: "100px", marginLeft: "60px" }}>
                  A Simple Gameplan:
                  <br />
                  In-Game Xp to Real $$$
                </P>
              </Wrapper>
            </Wrapper>
            <Wrapper className="col-md-1"></Wrapper>
            <Wrapper className="col-md-5 mt-5 mb-5">
              {/* Creating Boxes */}
              {mainBox1Arr.map((val, index) => {
                return (
                  <>
                    <Wrapper
                      key={index}
                      style={{ border: "1px solid white" }}
                      className="mt-3 res_center_content"
                    >
                      <Wrapper className="row ml-4 mr-5 mt-3 mb-3">
                        <Wrapper className="col-md-2 mt-4 mb-4">
                          <Image
                            src={val.img}
                            width="80"
                            height="80"
                            alt="medal"
                            layout="responsive"
                          />
                        </Wrapper>

                        <Wrapper className="col-md-10 mt-3 mb-4">
                          <H4 className="ml-4">{val.desc}</H4>
                        </Wrapper>
                      </Wrapper>
                    </Wrapper>
                  </>
                );
              })}
            </Wrapper>
          </Wrapper>
        </Wrapper>
        {/* Marquee Section 4 */}
        <Wrapper
          className="mt-5 mb-5"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Marquee
            play={true}
            pauseOnHover={true}
            className={`bg-black`}
            gradient={false}
          >
            <H2 className="marquee_text_res">
              - DECENTRALIZED -
              <span className="text-success"> GOVERNANCE </span>- COMMUNITY -
              <span className="text-success"> DELEGATE </span> - DECENTRALIZED -
              <span className="text-success"> GOVERNANCE </span>- COMMUNITY -
              <span className="text-success"> DELEGATE </span>
            </H2>
          </Marquee>
        </Wrapper>
        {/* Section 5 PLAYIN ECOSYSTEM  */}
        <Wrapper
          className="container container-fluid mb-5"
          style={{ marginTop: "170px" }}
        >
          <H1>PLAYIN ECOSYSTEM</H1>

          <Wrapper className="row">
            <Wrapper className="col-md-6 mt-5">
              {/* Creating Boxes  */}
              {mainEcosystemBoxArr.map((val, index) => {
                return (
                  <>
                    <Wrapper
                      key={index}
                      className="mt-4"
                      style={{ border: "1px solid white" }}
                    >
                      <Wrapper className="container container-fluid">
                        <Wrapper
                          className="row"
                          style={{
                            backgroundColor: `${
                              show && showId === index ? "#49ffa4" : "black"
                            }`,
                            // backgroundColor: "black",
                          }}
                        >
                          <Wrapper className="col-md-12 mt-4 mb-3">
                            <Wrapper className="d-flex">
                              <Wrapper className="col-md-10">
                                <H3
                                  size="25px"
                                  weight="300"
                                  color="white"
                                  style={{
                                    float: "left",
                                  }}
                                >
                                  {val.title}
                                </H3>
                              </Wrapper>
                              <Wrapper className="col-md-2">
                                {show && index === showId ? (
                                  <H3
                                    style={{
                                      float: "right",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => {
                                      setShow(!show);
                                      setShowId(index);
                                    }}
                                  >
                                    -
                                  </H3>
                                ) : (
                                  <H3
                                    style={{
                                      float: "right",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => {
                                      if (!show) {
                                        setShow(true);
                                      }
                                      setShowId(index);
                                    }}
                                  >
                                    +
                                  </H3>
                                )}
                              </Wrapper>
                            </Wrapper>
                          </Wrapper>
                        </Wrapper>

                        {show && index === showId ? (
                          <Wrapper
                            key={index}
                            className="container container-fluid mt-3"
                          >
                            <P size="22px" className="d-flex" color="#D6D5CB">
                              <StarIcon
                                style={{
                                  width: "17px",
                                  height: "30px",
                                  color: "#61DBFB",
                                }}
                                className="mr-2"
                              />
                              <ExpandFun html={val.content} />
                            </P>
                          </Wrapper>
                        ) : (
                          ""
                        )}
                      </Wrapper>
                    </Wrapper>
                  </>
                );
              })}
            </Wrapper>
            {/* <Wrapper className="col-md-1"></Wrapper> */}
            <Wrapper className="col-md-6 text-center">
              <Image
                className="img-fluid mt-5"
                src="/assets/playin-gold-spinning.gif"
                width="500"
                height="500"
                alt="gold spinning"
              />
            </Wrapper>
          </Wrapper>
        </Wrapper>
        {/* Left Image Right Text Component  */}
        <LImgRTxt
          title="PLEX XP"
          desc="The game rewards token. Use it to level up your PlayIn Badge &
Collectibles."
          src="/assets/crystals.svg"
        />
        {/* Better Governance Token Section  */}
        <Wrapper
          className="container-fluid"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Wrapper className="row">
            <Wrapper className="col-md-6">
              <Wrapper
                className="img-fluid"
                style={{
                  marginTop: "70px",
                  backgroundImage: `url("/assets/vectorweb.svg")`,
                  width: "650px",
                  height: "500px",
                }}
              >
                <H1 style={{ paddingTop: "100px", marginLeft: "120px" }}>
                  $BETR GOVERNANCE TOKEN
                </H1>
              </Wrapper>
            </Wrapper>
            <Wrapper className="col-md-6 align-content-end">
              <Wrapper
                className="img-fluid align-content-end"
                style={{
                  marginLeft: "130px",
                  marginTop: "70px",
                  backgroundImage: `url("/assets/goverence.svg")`,
                  maxWidth: "500px",
                  height: "500px",
                }}
              >
                <Wrapper className="col-md-10">
                  <P
                    style={{
                      paddingTop: "250px",
                      marginTop: "100px",
                    }}
                  >
                    The $BETR token grants holders votes in governing the
                    underlying Play-2-Earn ecosystem
                  </P>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
        {/* Lift IMage Right Content Section  */}
        <LImgRTxt
          title="$PLAYN TOKEN"
          desc="The value carrying token that facilitates all wagers & purchases on the PlayIn Marketplace"
          src="/assets/money-stack.svg"
        />
        {/* Form  */}
        <Wrapper className="container container-fluid mb-5">
          <Wrapper className="text-center" style={{ marginTop: "100px" }}>
            <H3>
              PLAYIN EARLY
              <br /> ACCESS CARDS
            </H3>

            <P className="mt-5 ml-5 mr-5">
              <Wrapper className="container container-fluid">
                The PlayIn Access Card is the beginning of the PlayIn journey.
                There are 5 tiers, each with their own set of reward incentives.
                Be the first to know when we release.
              </Wrapper>
            </P>
          </Wrapper>
          <Wrapper className="row justify-content-center">
            <Wrapper className="row mt-5">
              <Wrapper className="col-md-3"></Wrapper>
              <Wrapper className="col-md-6">
                <input
                  type="email"
                  style={{ height: "50px", border: "1px solid #49ffa4" }}
                  className="form-control"
                  placeholder="Your Email Address"
                  name="email"
                />
              </Wrapper>
              <Wrapper className="col-md-3"></Wrapper>
            </Wrapper>
            <Wrapper className="row mt-3">
              <Wrapper className="col-md-3"></Wrapper>
              <Wrapper className="col-md-4">
                <Input
                  type="text"
                  style={{ height: "50px", border: "1px solid #49ffa4" }}
                  className="form-control"
                  placeholder="Your Email Address"
                  name="email"
                />
              </Wrapper>
              <Wrapper className="col-md-2">
                <Button
                  style={{
                    height: "50px",
                    width: "100%",
                    backgroundColor: " #49ffa4",
                    color: "black",
                  }}
                >
                  Submit
                </Button>
              </Wrapper>
              <Wrapper className="col-md-3"></Wrapper>
            </Wrapper>
            <Wrapper className="row text-center">
              <P size="16px" className="mt-2">
                If you have already signed up then enter your email again to see
                your standing in waitlist
              </P>
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <HR />
      </HomeStyle>
    </>
  ) : (
    ""
  );
};

export default index;

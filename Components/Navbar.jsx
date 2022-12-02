import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { Wrapper, Nav, A, Button, Span, Ul, Li } from "../Components/styles";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import ClearIcon from "@mui/icons-material/Clear";
const Navbar = (props) => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Wrapper>
        <Nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "black" }}
        >
          <Link href="/">
            <Image
              className={`left_margin mt-2`}
              src="/assets/playin-logo.png"
              width="120"
              height="35"
              alt="logo"
            />
          </Link>
          <Button
            className="navbar-toggler navbar-dark"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? (
              <ClearIcon
                style={{
                  color: "#49ffa4",
                  width: "60px",
                  height: "50px",
                }}
              />
            ) : (
              <ClearAllIcon
                style={{ color: "#49ffa4", width: "60px", height: "50px" }}
              />
            )}
          </Button>

          {/* to show the desktop version menu */}

          <Wrapper
            className={`collapse navbar-collapse ${
              show ? "show text-center add_style_open_list" : ""
            }`}
          >
            <Ul className="navbar-nav mr-auto ml-auto">
              <Li className="nav-item">
                <Link href="/" className="link">
                  <A
                    className={`nav-link ${
                      router.pathname == "/" ? "active" : "no-active"
                    }`}
                  >
                    Main
                  </A>
                </Link>
              </Li>
              <Li className="nav-item">
                <Link href="/play" className="link">
                  <A
                    className={`nav-link ${
                      router.pathname == "/play" ? "active" : "no-active"
                    }`}
                  >
                    How To Play2Earn
                  </A>
                </Link>
              </Li>
              <Li className="nav-item">
                <Link href="/roadmap" className="link">
                  <A
                    className={`nav-link ${
                      router.pathname == "/roadmap" ? "active" : "no-active"
                    }`}
                  >
                    Roadmap
                  </A>
                </Link>
              </Li>
              <Li className="nav-item">
                <Link href="/worth" className="link">
                  <A
                    className={`nav-link ${
                      router.pathname == "/worth" ? "active" : "no-active"
                    }`}
                  >
                    Our Worth
                  </A>
                </Link>
              </Li>
              <Li className="nav-item">
                <Link href="/about" className="link">
                  <A
                    className={`nav-link ${
                      router.pathname == "/about" ? "active" : "no-active"
                    }`}
                  >
                    About Us
                  </A>
                </Link>
              </Li>
            </Ul>
            {show ? (
              ""
            ) : (
              <form className="form-inline my-2 my-lg-0 mr-4">
                <button
                  className="btn btn-success nav_btn"
                  style={{ transform: "translate3d(0px, 0px, 0px)" }}
                  type="submit"
                >
                  Get Started
                </button>
              </form>
            )}
          </Wrapper>
        </Nav>
      </Wrapper>
    </>
  );
};

export default Navbar;

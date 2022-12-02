import { H1, H2, H3, H4, P } from "./Typography";
import { Wrapper, HomeStyle } from "../Components/styles";
import Image from "next/image";
const LImgRTxt = (props) => {
  return (
    <>
      <Wrapper className="container container-fluid mt-5 mb-5">
        <Wrapper className="row">
          <Wrapper className="col-md-6 text-center mt-5">
            <Image
              className="img-fluid"
              src={props.src}
              width="400"
              height="400"
              alt="crystals"
            />
          </Wrapper>

          <Wrapper className="col-md-6 mt-5 text-right text-end">
            <Wrapper className="container container-fluid">
              <H1 className="home_h1_res_size">{props.title}</H1>
              <P>{props.desc}</P>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default LImgRTxt;

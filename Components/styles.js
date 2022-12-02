import styles from "styled-components";
export const HomeStyle = styles.div` 
width:100%;
  margin:auto; 
  height:100%; 
  overflow:auto;
  background-color:black !important;
.display_para_res{
    display:none;
}
.home_res_pad_top{
margin-top:-200px !important;
}
.display_para_desk{
    display:block;
}
.vl{
    border: 1px solid #fff !important;
    width:1px !important;
      height: 600px !important;
    }
    @media screen and (max-width: 768px) {
        
        .show_line_home{
            display:none;
        }
       
        .display_para_res{
            display:block;
        }
        .display_para_desk{
            display:none;
        }
        .home_res_h1_pad_top{
            margin-left:60px;
            margin-right:60px;
            margin-top:120px;
        }
        .home_res_pad_bottom{
            margin-top:20px;
            margin-left:25px;
            margin-right:25px;
            padding-bottom:10%;
        }
        .res_center_content{
            text-align: center !important;
        }

      }
`;
export const Wrapper = styles.div` 

`;
export const Nav = styles.nav`
padding-top:20px;
.add_style_open_list{
    padding-top:80px !important;
    padding-bottom:250px !important;
    font-size:26px !important;
}
.left_margin{
    margin-left:40px;
}
.nav_btn{
 
  margin: 0;
  font-size: 16px;
  transform: skew(-20deg) !important;
  border-radius: 0px;
  width: 161px;
  height: 45px;
}
@media screen and (max-width: 768px) {
    .left_margin{
        margin-left:30px;
    }
  }
`;
export const WorthStyle = styles.div` 
width:100%;
  margin:auto; 
  height:100%; 
  overflow:auto;
  background-color:black !important;
.worth_box5_res{
    margin-left:-70px;
}
@media screen and (max-width: 768px) {

    .img_hover{
        width:100px !important;
        transform: scale(1.5) !important;
        position: relative !important;
    }
    .worth_box5_res{
        margin-left:0px !important;
    }
    .worth_h1_res_size{
        font-size:36px !important;
    }
    .res_center_content{
        text-align: center !important;
    }

  }
`;
export const RoadMapStyle = styles.div` 
width:100%;
  margin:auto; 
  height:100%; 
  overflow:auto;
  background-color:black !important;
.roadmap_scroll_box{
    overflow:scroll;
}
.roadmap_scroll_box::-webkit-scrollbar {
    display: none;
  }
  .roadmap_scroll_box {
    -ms-overflow-style: none; 
    scrollbar-width: none; 
  }
@media screen and (max-width: 768px) {
  
    .res_center_content{
        text-align: center !important;
    }

  }
`;
export const AboutUsStyle = styles.div`
width:100%;
  margin:auto; 
  height:100%; 
  overflow:auto;
  background-color:black !important;
  .set_team_image_info_bottom{
    bottom:0;
  }
.reduce_mt_in_desk{
    margin-top:-130px;
}
  @media screen and (max-width: 768px) {
  
  
        .team_res_image{
            top: 300px;
        }
        .set_team_image_info_bottom{
            bottom:-220px;
          }
          .reduce_mt_in_desk{
            margin-top:0px;
        }
         
    

  }
  
`;
export const A = styles.a``;
export const Button = styles.button``;
export const Span = styles.span``;
export const Ul = styles.ul``;
export const Input = styles.input``;
export const Li = styles.li`
font-size:${(props) => props.size || ""};
.active{
    color:#49ffa4 !important;
}
.no-active{
    color:gray !important;
}
.link{
    text-decoration:none !important;
}
`;

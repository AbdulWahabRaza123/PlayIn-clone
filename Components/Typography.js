import styles from "styled-components";
export const H1 = styles.h1` 
font-size:${(props) => props.size || "76px"};
color:${(props) => props.color || "white"};
@media screen and (max-width: 768px) {
    font-size:${(props) => props.size || "28px"};
}
`;
export const H2 = styles.h2`
font-size:${(props) => props.size || "56px"};
color:${(props) => props.color || "white"};
@media screen and (max-width: 768px) {
  font-size:${(props) => props.size || "28px"};
}
`;
export const H3 = styles.h3`
font-size:${(props) => props.size || "45px"};
color:${(props) => props.color || "white"};
font-weight:${(props) => props.weight || ""};
`;
export const H4 = styles.h4`
color:white !important;
font-weight:350 !important;
`;

export const P = styles.p`
  font-size:${(props) => props.size || "24px"};
  color:${(props) => props.color || "gray"};
  // font-weight:${(props) => props.weight || "300"};
  @media screen and (max-width: 768px) {
    font-size:${(props) => props.size || "20px"};
}
  `;

export const HR = styles.hr`
color:${(props) => props.color || "gray"};
  `;

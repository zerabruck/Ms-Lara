"use client";

import { Col, Flex, Row, Space, Grid } from "antd";
import Image from "next/image";

const { useBreakpoint } = Grid;
const MeetYourProviderSection = () => {
  const screen = useBreakpoint();
  return (
    <Row
      style={{
        paddingTop: "40px",
      }}
    >
      {/* <Col span={5}></Col> */}
      <Col offset={4} span={16}>
        <Flex gap={40} vertical={screen.xs ? true : false}>
          <Image
            src="/Ellipse 22.png"
            width={259}
            height={269}
            alt="Provider Portait"
          />
          <Space size={40} direction="vertical">
            <span
              style={{
                fontFamily: "Helvetica",
                fontSize: "25px",
                fontWeight: 400,
                lineHeight: "32.37px",
                textAlign: "left",
              }}
            >
              Meet Your Providers
            </span>
            <span
              style={{
                fontFamily: "Helvetica",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "15px",
                letterSpacing: "0.01em",
                textAlign: "left",
                color: "#5E596D",
              }}
            >
              “I got into massage so I could work directly with patients on
              their injuries, pain and other conditions reducing their quality
              of life, Massage is part of a hands-on healthcare continuum - and
              can make a huge difference in people’s long-term wellbeing.”
            </span>
            <span
              style={{
                fontFamily: "Helvetica",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "15px",
                letterSpacing: "0.01em",
                textAlign: "left",
                color: "#5E596D",
              }}
            >
              Jean-Pierre started his healthcare career as a exercise
              physiologist later enering the Air Force, where he managed it’s
              largest healthcare clinic at Andrews Air Force Base. Jean-Pierre
              holds as BS in Exercise Physiology and an MS in Healthcare
              Administration.
            </span>

            <Space size={"middle"} direction="vertical">
              <span
                style={{
                  fontFamily: "Helvetica",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "25.9px",
                  textAlign: "left",
                }}
              >
                Jean-Pierre DeBarros
              </span>
              <span
                style={{
                  fontFamily: "Helvetica",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  textAlign: "left",
                  color: "#0D99FF",
                }}
              >
                LICENSED MASSAGE THERAPIST, MIAMI FL
              </span>
            </Space>
          </Space>
        </Flex>
      </Col>
      <Col span={3}></Col>
    </Row>
  );
};

export default MeetYourProviderSection;
// "use client";

// import Image from "next/image";
// import { Grid } from "antd";
// import { relative } from "path";

// const { useBreakpoint } = Grid;
// const MeetYourProviderSection = () => {
//   const screen = useBreakpoint();

//   const styles = {
//     container: {
//       // paddingLeft: screen.lg ? "20%" : "10%",
//       paddingRight: "15%",
//       display: "grid",
//       gridTemplateColumns: screen.lg ? "repeat(12,1fr)" : "1fr",
//       gridGap: "40px",
//     },

//     imageContainer: {
//       position: "relative" as "relative",
//       width: screen.lg ? "259px" : "157px",
//       height: screen.lg ? "265px" : "157px",
//       gridColumn: "span 10",
//     },
//     itemsContainer: {},

//     item: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: screen.lg ? "" : "center",
//       gap: "16px",
//       gridColumn: screen.lg ? "span 1" : "span 10",
//       marginBottom: screen.lg ? 0 : "20px",
//     },

//     textContainer: {
//       gridColumn: screen.lg ? "span 10" : "span 10",
//       display: "flex",
//       justifyContent: "center",
//       flexDirection: "column",
//       gap: "24px",
//     },
//     bodyTextContainer: {
//       gridColumn: "span 10",
//       display: "flex",
//       flexDirection: "column",
//       gap: "40px",
//     },
//     bodyText: {
//       fontFamily: "Helvetica",
//       fontSize: "12px",
//       fontWeight: 400,
//       lineHeight: "15px",
//       letterSpacing: "0.01em",
//       textAlign: "left",
//       color: "#5E596D",
//     },
//     header: {
//       fontFamily: "Helvetica",
//       fontSize: "25px",
//       fontWeight: 400,
//       lineHeight: "32.37px",
//       textAlign: "center",
//       color: "#000000",
//     },
//     profileContainer: {
//       display: "flex",
//       flexDirection: "column",
//       gap: "16px",
//     },

//     profileName: {
//       fontFamily: "Helvetica",
//       fontSize: "20px",
//       fontWeight: 400,
//       lineHeight: "25.9px",
//       textAlign: "left",
//       color: "#000000",
//     },
//     proof: {
//       fontFamily: "Helvetica",
//       fontSize: "14px",
//       fontWeight: 400,
//       lineHeight: "24px",
//       textAlign: "left",
//       color: "#0067B8",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       {!screen.lg && (
//         <div
//           style={{
//             gridColumn: "span 12",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <span style={styles.header}>Meet Your Providers</span>
//         </div>
//       )}
//       {/* <div style={styles.item}>
//         <div style={styles.imageContainer}>
//           <Image
//             src="/Ellipse 22.png"
//             layout="fill"
//             objectFit="contain"
//             alt="Provider Portait"
//           />
//         </div>
//       </div> */}

//       <div style={styles.textContainer}>
//         {screen.lg && <span style={styles.header}>Meet Your Providers</span>}
//         <div style={styles.bodyTextContainer}>
//           <span style={styles.bodyText}>
//             Jean-Pierre started his healthcare career as a exercise physiologist
//             later enering the Air Force, where he managed it’s largest
//             healthcare clinic at Andrews Air Force Base. Jean-Pierre holds as BS
//             in Exercise Physiology and an MS in Healthcare Administration.
//           </span>
//           <span style={styles.bodyText}>
//             “I got into massage so I could work directly with patients on their
//             injuries, pain and other conditions reducing their quality of life,
//             Massage is part of a hands-on healthcare continuum - and can make a
//             huge difference in people’s long-term wellbeing.”
//           </span>
//         </div>

//         <div style={styles.profileContainer}>
//           <span style={styles.profileName}>Jean-Pierre DeBarros</span>
//           <span style={styles.proof}>LICENSED MASSAGE THERAPIST, MIAMI FL</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MeetYourProviderSection;

"use client";

import { Col, Row, Space } from "antd";
import Image from "next/image";
const ZeelConnnectsSection = () => (
  <Row>
    <Col span={2}></Col>
    <Col span={20}>
      <Row gutter={40}>
        <Col span={13}>
          <Space direction="vertical" size={32}>
            <Space direction="vertical" size={24}>
              <span
                style={{
                  fontFamily: "Helvetica",
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "23.31px",
                  textAlign: "left",
                  color: "#0D99FF",
                }}
              >
                IN THE NEWS
              </span>
              <span
                style={{
                  fontFamily: "Helvetica",
                  fontSize: "25px",
                  fontWeight: 400,
                  lineHeight: "32.37px",
                  textAlign: "left",
                  color: "#000000",
                }}
              >
                Zeel Connects Massage Therapists to Veterans
              </span>
            </Space>
            <Space direction="vertical" size={40}>
              <span
                style={{
                  fontFamily: "Helvetica",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "15px",
                  letterSpacing: "0.01em",
                  textAlign: "justify",
                  color: "#5E596D",
                }}
              >
                {` MASSAGE Magazine: "Zeel’s [VA] massage therapy program emerged from
          its pilot stage with impressive figures related to pain relief and
          compliance. 'Nothing has done what massage has done for me, it’s
          incredible,' said Marine Corps Veteran Donald Deleskiewicz."`}
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
                Read more at Massage Magazine
              </span>
            </Space>
          </Space>
        </Col>
        <Col span={11}>
          <Image src="/Rectangle 523.png" width={538} height={309} alt="" />
        </Col>
      </Row>
    </Col>
    <Col span={2}></Col>
  </Row>
);
export default ZeelConnnectsSection;

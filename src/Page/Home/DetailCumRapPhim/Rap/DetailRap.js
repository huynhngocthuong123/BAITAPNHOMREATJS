import { Radio, Result, Space, Tabs } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { layDSRap } from "../../../../Redux/action/DetailHeThongRapAction";
export default function DetailRap() {
  const { TabPane } = Tabs;
  let { DSRap, setDSRap } = useState();
  useEffect(() => {
    layDSRap().then((result) => {
      console.log("GET", result.data.content);
      setDSRap(result.data.content);
    });
  }, []);
  console.log("DS", DSRap);
  return (
    <Fragment>
      {}
      <Tabs tabPosition="left">
        <TabPane tab="Tab 1" key="1">
          Content of Tab 1
        </TabPane>
      </Tabs>
    </Fragment>
  );
}

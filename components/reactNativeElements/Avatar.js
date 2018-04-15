import React, { Component } from "react";
import { View } from "react-primitives";
import { Avatar } from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";

export default () => (
  <View>
    <Grid>
      <Row>
        <Grid>
          <Col>
            <Avatar
              small
              rounded
              source={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
              }}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
          </Col>
          <Col>
            <Avatar
              medium
              source={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"
              }}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
          </Col>
          <Col>
            <Avatar
              large
              source={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
              }}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
          </Col>
        </Grid>
      </Row>
      <Row>
        <View style={{ top: 100 }}>
          <Avatar
            xlarge
            rounded
            source={{
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
            }}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
        </View>
      </Row>
    </Grid>
  </View>
);

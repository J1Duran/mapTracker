import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tooltip from "rc-tooltip";
import 'rc-tooltip/assets/bootstrap.css';


const Wrapper = styled.div`
position: absolute;
top: 50%;
left: 50%;
width: 14px;
height: 14px;
background-color: #35536b;
border: 1.5px solid #d3cfcf;
border-radius: 100%;
user-select: none;
transform: translate(-50%, -50%);
cursor: ${props => (props.onClick ? 'pointer' : 'default')};
&:hover {
  z-index: 1;
}
`;

const Marker = props => (
  <div style={{ height: "auto", width: "auto" }}>
    <Tooltip
      placement="top"
      animation="zoom"
      overlay={
        <span>
        <strong>ID</strong>:{props.info.id}<br />
        <strong>IMEI</strong>:{props.info.imei}<br />
        <strong>PATENT</strong>:{props.info.patent}<br />
        <strong>CODE</strong>:{props.info.code}<br />
        <strong>NUMBER</strong>:{props.info.number}<br />
        <strong>PHONE</strong>:{props.info.phone}<br />
        <strong>VERSION</strong>:{props.info.version}<br />
        <strong>BATTERY</strong>:{props.info.battery}<br />
        <strong>LAST SYNC</strong>:{props.info.last_sync}<br />
        <strong>AGENCY</strong>:{props.info.agency}
        </span>
      }
    >
      <span> <Wrapper /></span>
    </Tooltip>
    </div>
);

Marker.defaultProps = {
  onClick: null,
  info:{}
};

Marker.propTypes = {
  onClick: PropTypes.func,
  info: PropTypes.object.isRequired,
};

export default Marker;

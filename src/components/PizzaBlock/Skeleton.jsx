import React from "react";
import ContentLoader from "react-content-loader";

const MySkeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={470}
    viewBox="0 0 280 470"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="560" y="218" rx="3" ry="3" width="52" height="177" />
    <rect x="518" y="234" rx="3" ry="3" width="410" height="6" />
    <rect x="571" y="232" rx="3" ry="3" width="380" height="6" />
    <rect x="524" y="236" rx="3" ry="3" width="178" height="6" />
    <circle cx="588" cy="533" r="30" />
    <circle cx="624" cy="553" r="57" />
    <circle cx="130" cy="140" r="130" />
    <rect x="2" y="277" rx="10" ry="10" width="280" height="27" />
    <rect x="4" y="316" rx="10" ry="10" width="280" height="88" />
    <rect x="1" y="424" rx="10" ry="10" width="85" height="27" />
    <rect x="128" y="414" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default MySkeleton;

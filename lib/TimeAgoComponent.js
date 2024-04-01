import React, { useEffect, useState } from "react";
import TimeAgo from "javascript-time-ago";
import pt from "javascript-time-ago/locale/pt";
import { data } from "jquery";
function TimeAgoComponent({ timestamp }) {
  // Russian.

  TimeAgo.addDefaultLocale(pt);

  const timeAgo = new TimeAgo("pt-PT");

  const newtime = timeAgo.format(new Date(timestamp));
  return <span>{newtime}</span>;
}

export default TimeAgoComponent;

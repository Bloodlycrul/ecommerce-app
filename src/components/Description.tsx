"use client";

import React from "react";

const Description = ({
  item,
}: {
  item: {
    description: string | null | undefined;
  };
}) => {
  return (
    <div
      className="text-sm text-gray-500"
      dangerouslySetInnerHTML={{ __html: item.description || "" }}
    ></div>
  );
};

export default Description;

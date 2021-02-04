import React from 'react';

export default function title(props) {
  const { schema: title } = props;
  console.log(title.title);

  return <h2 className="w-100">{title.title}</h2>;
}

import React from 'react';
import FRWrapper from '../FRWrapper';
import SCHEMA from './GlobalSettingSchema.json';
// import { widgets } from '../widgets/antd';
import { useStore, useGlobal } from '../hooks';

export default function ItemSettings() {
  const { widgets, frProps } = useStore();
  const setGlobal = useGlobal();

  const onDataChange = frProps => {
    setGlobal({ frProps });
  };

  return (
    <div style={{ paddingRight: 24 }}>
      <FRWrapper
        schema={SCHEMA}
        formData={frProps}
        onChange={onDataChange}
        displayType="row"
        showDescIcon
        widgets={widgets}
        preview={true}
      />
    </div>
  );
}

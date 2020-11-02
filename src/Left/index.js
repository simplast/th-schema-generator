import React, { useEffect } from 'react';
import { defaultSettings, commonSettings } from '../Settings';
import './index.css';
import Element from './Element';

const Left = ({ saveList, setSaveList, ...rest }) => {
  useEffect(() => {}, []); // eslint-disable-line

  return (
    <div className="left-layout w5-l w4">
      {Array.isArray(defaultSettings) ? (
        defaultSettings.map((item, idx) => {
          return (
            <div key={idx}>
              <p className="f6 b">{item.title}</p>
              <ul className="pl0">
                {Array.isArray(item.widgets) ? (
                  item.widgets.map((widget, idx) => {
                    return (
                      <li key={idx.toString()} className="left-item">
                        <Element {...widget} {...rest} key={idx.toString()} />
                      </li>
                    );
                  })
                ) : (
                  <div>此处配置有误</div>
                )}
              </ul>
            </div>
          );
        })
      ) : (
        <div>配置错误：Setting不是数组</div>
      )}
    </div>
  );
};

export default Left;

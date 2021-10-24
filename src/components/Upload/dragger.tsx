/*
 * @Author: Censwin
 * @Date: 2021-10-24 20:52:53
 * @LastEditTime: 2021-10-24 22:31:11
 * @Description:
 * @FilePath: /beetle-design/src/components/Upload/dragger.tsx
 */
import React, { useState } from "react";
import classNames from "classnames";
import { InputProps } from "../Input/input";
import Icon from "../Icon/icon";

interface IDraggerProps {
  onFile: (files: FileList) => void;
}

const Dragger: React.FC<IDraggerProps> = (props) => {
  const { onFile, children } = props;
  const [dragOver, setDragOver] = useState(false);
  const classes = classNames("beetle-dragger", {
    "is-dragover": dragOver,
  });
  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    setDragOver(false);
    onFile(e.dataTransfer.files);
  };
  const handleDrag = (e: React.DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault();
    setDragOver(over);
  };
  // https://developer.mozilla.org/zh-CN/docs/Web/API/DragEvent
  return (
    <div
      className={classes}
      onDragOver={(e) => handleDrag(e, true)}
      onDragLeave={(e) => handleDrag(e, false)}
      onDrop={handleDrop}
    >
      <div className="drag-pannel-icon">
        <Icon icon="archive" />
      </div>
      <div className="drag-pannel-text">
        {dragOver ? "释放鼠标" : "点击或将文件拖拽至此区域"}
      </div>
    </div>
  );
};

export default Dragger;

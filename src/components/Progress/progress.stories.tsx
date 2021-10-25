/*
 * @Author: Censwin
 * @Date: 2021-10-25 23:46:28
 * @LastEditTime: 2021-10-25 23:51:28
 * @Description: 
 * @FilePath: /whale-design/src/components/Progress/progress.stories.tsx
 */
import React from "react";
import Progress from "./progress";

export default {
    title: '通用/Progress',
    compoennt: Progress,
    argTypes: {
        type : {
            options: ['line', 'circle'],
            control: { type: 'radio' },
            description: 'line | circle'
        }
    }
}
export type strokeType = "line" | "circle";
export interface IProgressProps {
    percent: number;
    showInfo?: boolean;
    type?: strokeType;
    style?: React.CSSProperties;
  }
export const Default = (args: IProgressProps) => <Progress {...args} />
Default.args = {
    percent: 10,
    showInfo: false,
    type: 'link',
}
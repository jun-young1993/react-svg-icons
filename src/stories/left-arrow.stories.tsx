import { Meta, StoryFn } from "@storybook/react";
import { LeftArrowIcon } from "../index";
import React from "react";

export default {
  title: 'LeftArrowIcon',
  component: LeftArrowIcon, 
} as Meta<typeof LeftArrowIcon>;

const Template: StoryFn<typeof LeftArrowIcon> = (args) => <LeftArrowIcon {...args} />

export const Default = Template.bind({});
Default.args = {
  viewBox: "0 0 48 48",
  width: "100",
  height: "100"
  // 기본값을 설정할 수 있습니다.
};

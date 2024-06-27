import { Meta, StoryFn } from "@storybook/react";
import { RightArrowIcon } from "../index";
import React from "react";

export default {
  title: 'RightArrowIcon',
  component: RightArrowIcon, 
} as Meta<typeof RightArrowIcon>;

const Template: StoryFn<typeof RightArrowIcon> = (args) => <RightArrowIcon {...args} />

export const Default = Template.bind({});
Default.args = {
  viewBox: "0 0 48 48",
  width: "100",
  height: "100"
  // 기본값을 설정할 수 있습니다.
};

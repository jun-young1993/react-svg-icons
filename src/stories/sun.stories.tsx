import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { SunIcon } from "../index";

export default {
  title: 'SunIcon',
  component: SunIcon,
} as Meta<typeof SunIcon>;

const Template: StoryFn<typeof SunIcon> = (args) => <SunIcon {...args} />

export const Default = Template.bind({});
Default.args = {
  viewBox: "0 0 128 128",
  width: "100",
  height: "100",
  color: "blue"
  // 기본값을 설정할 수 있습니다.
};

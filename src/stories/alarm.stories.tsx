import { Meta, StoryFn } from "@storybook/react";
import { AlarmIcon } from "../index";
import React from "react";

export default {
  title: 'AlarmIcon',
  component: AlarmIcon, 
} as Meta<typeof AlarmIcon>;

const Template: StoryFn<typeof AlarmIcon> = (args) => <AlarmIcon {...args} />

export const Default = Template.bind({});
Default.args = {
  viewBox: "0 0 48 48",
  width: "100",
  height: "100"
  // 기본값을 설정할 수 있습니다.
};

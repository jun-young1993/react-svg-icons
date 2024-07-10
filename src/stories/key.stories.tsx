import { Meta, StoryFn } from "@storybook/react";
import {  KeyIcon } from "../index";
import React from "react";

export default {
  title: 'KeyIcon',
  component: KeyIcon, 
} as Meta<typeof KeyIcon>;

const Template: StoryFn<typeof KeyIcon> = (args) => <KeyIcon {...args} />

export const Default = Template.bind({});
Default.args = {
  viewBox: "0 0 48 48",
  width: "100",
  height: "100",
  children: "Enter"
  // 기본값을 설정할 수 있습니다.
};

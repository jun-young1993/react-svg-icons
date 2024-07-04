import { Meta, StoryFn } from "@storybook/react";
import { SearchIcon } from "../index";
import React from "react";

export default {
  title: 'SearchIcon',
  component: SearchIcon, 
} as Meta<typeof SearchIcon>;

const Template: StoryFn<typeof SearchIcon> = (args) => <SearchIcon {...args} />

export const Default = Template.bind({});
Default.args = {
  viewBox: "0 0 48 48",
  width: "100",
  height: "100"
  // 기본값을 설정할 수 있습니다.
};

import { Meta, StoryFn } from "@storybook/react";
import { HiddenIcon } from "../index";
import React from "react";

export default {
  title: 'HiddenIcon',
  component: HiddenIcon, 
} as Meta<typeof HiddenIcon>;

const Template: StoryFn<typeof HiddenIcon> = (args) => <HiddenIcon {...args} />

export const Default = Template.bind({});
Default.args = {
  // 기본값을 설정할 수 있습니다.
};

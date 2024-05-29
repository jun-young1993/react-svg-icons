import { Meta, StoryFn } from "@storybook/react";
import { CloseIcon } from "../index";
import React from "react";

export default {
  title: 'CloseIcon',
  component: CloseIcon, 
} as Meta<typeof CloseIcon>;

const Template: StoryFn<typeof CloseIcon> = (args) => <CloseIcon {...args} />

export const Default = Template.bind({});
Default.args = {
  // 기본값을 설정할 수 있습니다.
};

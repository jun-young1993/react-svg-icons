import { Meta, StoryFn } from "@storybook/react";
import { MaximizeIcon } from "../index";
import React from "react";

export default {
  title: 'MaximizeIcon',
  component: MaximizeIcon, 
} as Meta<typeof MaximizeIcon>;

const Template: StoryFn<typeof MaximizeIcon> = (args) => <MaximizeIcon {...args} />

export const Default = Template.bind({});
Default.args = {
  // 기본값을 설정할 수 있습니다.
};

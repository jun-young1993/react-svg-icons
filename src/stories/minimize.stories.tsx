import { Meta, StoryFn } from "@storybook/react";
import { MinimizeIcon } from "../index";
import React from "react";

export default {
  title: 'MinimizeIcon',
  component: MinimizeIcon, 
} as Meta<typeof MinimizeIcon>;

const Template: StoryFn<typeof MinimizeIcon> = (args) => <MinimizeIcon {...args} />

export const Default = Template.bind({});
Default.args = {
  // 기본값을 설정할 수 있습니다.
};

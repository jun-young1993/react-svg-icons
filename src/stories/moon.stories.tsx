import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { MoonIcon } from "../index";

export default {
  title: 'MoonIcon',
  component: MoonIcon,
} as Meta<typeof MoonIcon>;

const Template: StoryFn<typeof MoonIcon> = (args) => <MoonIcon {...args} />

export const Default = Template.bind({});
Default.args = {

};

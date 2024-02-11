import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Header from "../components/Header/Header.vue";
import Content from "../components/Content/Content.vue";

describe("Header", () => {
  it("should render", () => {
    const wrapper = mount(Header);
    expect(wrapper.find("h1").exists()).toBeTruthy();
  });

  it("should display correctly", () => {
    const title = "Погодное приложение";
    const wrapper = mount(Header, {
      props: {
        title,
      },
    });
    expect(wrapper.html()).toContain(title);
  });
});

describe("Content", () => {
  it("should render", () => {
    const wrapper = mount(Content);
    expect(wrapper);
  });
});

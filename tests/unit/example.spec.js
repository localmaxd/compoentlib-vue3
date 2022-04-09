import { shallowMount } from "@vue/test-utils";
import { defineComponent, h } from "vue";

// 组件测试 ：1渲染结果 2 改变props 3触发事件

const HelloWorld = defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup(props) {
    return () => {
      return h("div", props.msg);
    };
  },
});
// before each after each 每一个it 前后都会执行 预设（所有测试用例都会用到）和清洗
// before all after all  只执行一次
// 异步断言过程 传递一个done

//  test-suit describe的数量 里面的针对hello。test:it的数量
describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });

    // 断言 wrapper中的和msg一致 地址一摸一样 tobe  toequal
    expect(wrapper.text()).toMatch(msg);
  });
  it("should work", () => {
    expect(1 + 1).toBe(2);
  });
  it("should works", () => {
    return new Promise((resolve) => {
      expect(1 + 1).toBe(3);
      resolve();
    });
  });
});

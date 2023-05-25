import { nextTick, onMounted, reactive, ref, watch } from "vue";

export function useIndicatorForm(cascade_object: any) {
  /** 定义表单引用 */
  // const formRef = ref();

  /** 初始化面板数据 */
  // datasets 当前选中的 datasets
  const datasets_selected = ref("laion-768-5m-ip");
  const datasets_candidates = ref(["arxiv-titles-384-angular", "laion-768-5m-ip"]);
  // dataset tag
  const dataset_tag_candidates = ref(["filter", "no-filter"]);
  const dataset_tag_selected = ref(["no-filter"]);

  // indicator 指示器选中的值
  const indicator_selected = ref("rps");

  // parallel 选中的并发数
  const parallel_selected = ref(["1", "2", "4", "8"]);
  // topk 选中的 topk
  const topk = ref("10");


  const form_data = {
    datasets_selected: Object.keys(cascade_object)[0],
    datasets_candidates: Object.keys(cascade_object),
    dataset_tag_candidates: Object.keys(cascade_object[Object.keys(cascade_object)[0]]),
    dataset_tag_selected: Object.keys(cascade_object[Object.keys(cascade_object)[0]]),
    indicator_selected: "rps",
    parallel_selected: [1],
    topk: 10
  };

  /** 监听 current selected ids */
  watch(form_data, newValue => {
    console.log("watch => form_data", newValue);
  });

  onMounted(() => {
    // 等待页面渲染完成, 进行预处理
  });

  return {
    // 表单引用
    // formRef,
    // 表单数据
    form_data
  };
}

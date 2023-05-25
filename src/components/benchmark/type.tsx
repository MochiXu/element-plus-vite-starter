export interface each_json {
  hash_code: number;
  engine: string;
  version: string;
  remark: string;
  index_type: string;
  dataset: string;
  dataset_group: string;
  dataset_tag: string;
  time_stamp: number;
  index_create_parameter: object;
  index_search_params: object;
  search_parallel: number;
  search_top: number;
  upload_parallel: number;
  upload_batch_size: number;
  mean_precisions: number;
  rps: number;
  p95_time: number;
  mean_time: number;
  total_upload: number;
};

export const form_data_default = {
  datasets_selected: "🚀",
  datasets_candidates: ["🏀"],
  dataset_tag_candidates: ["🌲", "🏜️"],
  dataset_tag_selected: ["🏜️", "🪐"],
  indicator_selected: "mean_time",
  parallel_selected: ["1", "2", "4", "8"],
  parallel_candidates: ["1", "2", "4", "8"],
  topk: "10",
  topk_candidates: ["10", "100"]
};

export const cascade_results_default = {
  "gist_960": {
    "no-filter": {
      "valid_parallel": ["1", "2", "4", "8"],
      "valid_top": ["10"]
    }
  } 
}
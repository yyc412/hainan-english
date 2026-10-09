// videos.js — 视频链接配置（由贝利亚生成）
// 网页 index.html 会自动读取本文件，把视频放到对应的学习站点。
//
// 字段说明：
//   intro : 开场视频（本文件夹暂无，留空 ""）
//   spots : 6 个学习站点视频，对应网页里的 loc / parks / food / trans / ind / pol
//   final : 结尾视频（本文件夹暂无，留空 ""）
//
// 填法：
//   • 同文件夹下的 mp4 用相对路径  "./文件名.mp4"
//   • 也可填 Bilibili / YouTube 链接（网页会自动转换）
//   • 留空 "" 则该位置不显示视频
//
// ⚠️ 重要：下面的 6 个 mp4 是按「原文件字母顺序」临时对应到 6 个站点的。
//    如果实际录制顺序不是这样，请告诉贝利亚正确的对应关系，我来调整。

window.HNFTP_VIDEOS = {
  intro: "",

  spots: {
    loc:   "./loc.mp4",
    parks: "./parks.mp4",
    food:  "./food.mp4",
    trans: "./trans.mp4",
    ind:   "./ind.mp4",
    pol:   "./pol.mp4"
  },

  final: ""
};

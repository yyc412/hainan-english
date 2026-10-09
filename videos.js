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
// ⚠️ 重要：下面的 6 个 mp4 是按「文件名字母顺序」临时对应到 6 个站点的。
//    如果实际录制顺序不是这样，请告诉贝利亚正确的对应关系，我来调整。

window.HNFTP_VIDEOS = {
  intro: "",

  spots: {
    loc:   "./0a66a369f160f58ceb32c22fd52e9b5e.mp4",
    parks: "./140cd6ada1910ba191d940d2ce75df69.mp4",
    food:  "./485aa005eea6e7af3a864c138fa97c45.mp4",
    trans: "./6b1d334687b4902dcbb06082735812b9.mp4",
    ind:   "./deb54f4060c4687a2ce21905af2a07c7.mp4",
    pol:   "./f61dcb3755d6c48a3fafc3817e600a47.mp4"
  },

  final: ""
};

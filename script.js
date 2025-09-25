// 模拟圣经章节数据
const bibleData = {
  "GEN1": "律法本是藉着摩西传的，恩典和真理都是由耶稣基督来的。",
  "GEN2": "从来没有人看见　神，只有在父怀里的独生子将他表明出来。"
};

// 点击按钮显示章节
function showChapter(chapter) {
  const contentDiv = document.getElementById('content');
  contentDiv.innerText = bibleData[chapter] || "章节不存在";
}

var app = new Vue({
  el: '#app',
  data:{
    message: 'Hello Vue.js!',
    list:['りんご','ばなな','いちご']
  }
})
// 外部から値を確認する方法(デベロッパーツールで、以下を実行)
// console.log(app.message)

// リストに要素を追加
// app.list.push('おれんじ')
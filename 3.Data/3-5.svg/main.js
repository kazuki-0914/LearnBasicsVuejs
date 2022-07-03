var app = new Vue({
  el: '#app', //　マウントする要素
  data:{
    // アプリで使用するデータ(変数)
    radius:50
  },
  conputed:{
    // 算出プロパティ
    // 単純なdataと違い、関数によって算出されたプロパティ
    conputedMessage: function(){
      return this.message + '!'
    }
  },
  // ライフサイクルフック //
  beforeCreate:function() {
    // 行いたい処理
    // ライフサイクルフック(Vueインスタンスの特定のタイミングで自動的に呼び出されるフック)
    console.log('beforeCreated')
    console.log(this.message)
    console.log(this.$el)
  },
  created:function() {
    // 行いたい処理
    // ライフサイクルフック(Vueインスタンスの特定のタイミングで自動的に呼び出されるフック)
    console.log('created')
    console.log(this.message)
    console.log(this.$el)
  },
  beforeMount:function() {
    // 行いたい処理
    // ライフサイクルフック(Vueインスタンスの特定のタイミングで自動的に呼び出されるフック)
    console.log('beforeMount')
    console.log(this.message)
    console.log(this.$el)
  },
  mounted:function() {
    // 行いたい処理
    // ライフサイクルフック(Vueインスタンスの特定のタイミングで自動的に呼び出されるフック)
    console.log('mounted')
    console.log(this.message)
    console.log(this.$el)
  },
  beforeUpdate:function() {
    // 行いたい処理
    // ライフサイクルフック(Vueインスタンスの特定のタイミングで自動的に呼び出されるフック)
    console.log('beforeUpdate')
    console.log(this.message)
    console.log(this.$el)
  },
  updated:function() {
    // 行いたい処理
    // ライフサイクルフック(Vueインスタンスの特定のタイミングで自動的に呼び出されるフック)
    console.log('updated')
    console.log(this.message)
    console.log(this.$el)
  },
  beforeDestroyed:function() {
    // 行いたい処理
    // ライフサイクルフック(Vueインスタンスの特定のタイミングで自動的に呼び出されるフック)
    console.log('beforeDestroyed')
    console.log(this.message)
    console.log(this.$el)
  },
  destroyed:function() {
    // 行いたい処理
    // ライフサイクルフック(Vueインスタンスの特定のタイミングで自動的に呼び出されるフック)
    console.log('destroyed')
    console.log(this.message)
    console.log(this.$el)
  },
  methods:{
    // 独自の関数
    myMethod: function(){
      // 行いたい処理
    },
  }
})
// 外部から値を確認する方法(デベロッパーツールで、以下を実行)
// console.log(app.message)

// リストに要素を追加
// app.list.push('おれんじ')
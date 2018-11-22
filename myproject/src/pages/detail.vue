<template>
  <div class="detailPage">
    <div id="editor">
        <p>欢迎使用 <b>wangEditor</b> 富文本编辑器</p>
    </div>
  </div>
</template>

<script type="text/javascript">
    export default{
      mounted(){
        var E = require('wangeditor')
        // var E = require('//unpkg.com/wangeditor/release/wangEditor.min.js')
        var editor = new E('#editor')
        editor.customConfig.uploadImgShowBase64 = true
        editor.create()
      }
    }
</script>
<template>
  <div>
    <span>{{message}}</span><br/>
    <span v-html="message"></span>
  </div>
</template>

<script lang='js'>
export default{
  name:'Hello Vue js',
  data:()=>{
    return{
      message:'<span style="color:red">Vue</span>'
    };
  },
};
</script>

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
      message:'안녕.<span style="color:red">Vue</span>'
    };
  },
};
</script>

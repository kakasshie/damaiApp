<template>
  <Table :columns="columns1" :data="data1"></Table>
</template>

<script>
    export default{
      name:'Tables',
      data:function(){
        return{
          columns1: [
            {
              title: '优惠劵号码',
              key: 'number'
            },
            {
              title: '名称',
              key: 'name'
            },
            {
              title: '优惠说明',
              key: 'explain'
            },
            {
              title: '有效期',
              key: 'validity'
            },
            {
              title: '使用条件',
              key: 'conditions'
            }
          ],
          data1: [
            {
              number: 'sfsgdg4455gdfgdfg55455',
              name: '周杰伦演唱会',
              explain: '最终解释权归主办方所有',
              validity: '2020-10-03',
              conditions:'当场使用，概不退货'
            }
          ]
        }
      }
    }
</script>

<style>

</style>

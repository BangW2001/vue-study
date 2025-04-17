<template>
  <div>
    <TablePage :data="list">
      <template #default="obj">
        <button @click="del(obj.row.id)">删除</button>
      </template>
    </TablePage>
  </div>
</template>

<script>
import TablePage from './components/TablePage.vue';
export default {
  components:{
    TablePage
  },
  data(){
    return {
      list:[
        {id:1,name:"赵晓云",age:18},
        {id:2,name:"刘蓓蓓",age:19},
        {id:3,name:"姜晓瑞泰",age:17}
      ]
    }
  },
  methods:{
    del(id){
      this.list = this.list.filter((item)=>item.id!=id)
    }
  }
}
</script>

<style>

</style>
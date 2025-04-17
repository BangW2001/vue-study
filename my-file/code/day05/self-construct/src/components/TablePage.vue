<template>
  <div>
    <body>
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>姓名</th>
            <th>年纪</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in data" :key="item.id">
            <td>{{ index+1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td><slot :row="item"></slot></td>
          </tr>
        </tbody>
      </table>
    </body>
  </div>
</template>

<script>
export default {
    props:{
        data:Array
    }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}

table {
  margin:30px auto;
  width: 60%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #007bff;
  color: white;
}

button {
  padding: 5px 10px;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  cursor: pointer;
}

button:hover {
  background-color: #e9ecef;
}
</style>
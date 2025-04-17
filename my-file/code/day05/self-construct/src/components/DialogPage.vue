<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <span class="close-button">×</span>
        <h2><slot name="header">友情提示</slot></h2>
        <p><slot name="content">默认显示内容</slot></p>
        <div class="modal-actions">
          <button class="cancel-button"><slot name="cancelBtn">取消</slot></button>
          <button class="confirm-button"><slot name="checkBtn">确认</slot></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.modal {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  width: 300px;
  padding: 20px;
  text-align: center;
}

.modal-content {
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
}

h2 {
  margin-bottom: 10px;
}

p {
  margin-bottom: 20px;
}

.modal-actions {
  display: flex;
  justify-content: center;
  gap: 10px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.cancel-button {
  background-color: #f0f0f0;
}

.confirm-button {
  background-color: #007bff;
  color: white;
}
</style>
<template>
  <section>
    <h2>ورود به زرین‌پال</h2>
    <form @submit.prevent="onSubmit">
      <label for="">شماره همراه یا ایمیل</label>
      <input type="text" name="username" />
      <button type="submit">ورورد</button>
    </form>
  </section>
</template>
<script>
import { AUTH_REQUEST } from "../../store/actions/auth";
export default {
  name: "login",
  data() {
    return {
      username: ""
    };
  },
  methods: {
    onSubmit() {
      const { username } = this;
      this.$store.dispatch(AUTH_REQUEST, username).then(() => {
        this.$router.push({ name: "request" });
      });
    }
  }
};
</script>

<style scoped>
section {
  font-family: "IranSans", sans-serif;
}
h2 {
  text-align: center;
  margin-bottom: 32px;
}
form {
  max-width: 300px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
}
label {
  font-size: 16px;
  margin-bottom: 12px;
  display: flex;
  font-weight: bold;
}
input {
  padding: 12px;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  font-size: 1.166rem;
  line-height: 16px;
  width: 100%;
  height: 40px;
  line-height: normal;
  -webkit-appearance: none;
}
button {
  background-color: #ffc200;
  border-radius: 8px;
  font-size: 1.5rem;
  line-height: 24px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 12px 24px;
  width: 100%;
  height: 48px;
  cursor: pointer;
  border: none;
  margin-top: 32px;
}
</style>

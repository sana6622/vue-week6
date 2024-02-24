<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="h3 mt-5 mb-3 font-weight-normal text-center">請先登入</h1>
      <div class="col-8">
        <form id="form" class="form-signin" @submit.prevent="login">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="username"
              placeholder="name@example.com"
              v-model="user.username"
              required
              autofocus
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              v-model="user.password"
              required
            />
            <label for="password">Password</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted">&copy; 2021~∞ - 六角學院</p>
  </div>
</template>

<script>
import axios from 'axios';
console.log(import.meta.env);
const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    };
  },
  mounted() {},
  methods: {
    login() {
      // const api = 'https://vue3-course-api.hexschool.io/v2/admin/signin';
      const api = `${VITE_URL}/admin/signin`;

      axios
        .post(api, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `hexschoolToken=${token}; expires=${new Date(expired)}`;

          // 進後台
          this.$router.push('/admin/adminHome');
        })
        .catch((error) => {
          console.log('login error', error);
          alert('登入失敗');
        });
    }
  }
};
</script>

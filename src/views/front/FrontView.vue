<template>
  <h2>前台頁</h2>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/products">產品列表</RouterLink> |
    <RouterLink to="/cart">購物車</RouterLink> |
    <RouterLink to="/login">登入</RouterLink> |
    <RouterLink to="/admin/adminHome">進入後台首頁</RouterLink>
  </nav>
  <router-view></router-view>
</template>

<template>
  <!-- 不使用导航栏进行激活？ -->
  <!-- <the-navigation @set-page="setActivePage"></the-navigation> -->
  <the-navigation></the-navigation>
  <main>
    <!-- 使用router 而不是动态component -->
    <!-- <component :is="activePage"></component> -->
    <router-view></router-view>
  </main>
  <footer>
    <!-- 与slots相似 -->
    <router-view name="footer"></router-view>
  </footer>
</template>

<script>
//不使用手动引入的模式 而是使用router的模式
// import TeamsList from './components/teams/TeamsList.vue';
// import UsersList from './components/users/UsersList.vue';
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  components: {
    TheNavigation,
    // 已经在main.js中通过router引入
    // TeamsList,
    // UsersList,
  },
  data() {
    return {
      // activePage: 'teams-list',
      teams: [
        { id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2'] },
        { id: 't2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3'] },
        { id: 't3', name: 'Client Consulting', members: ['u4', 'u5'] },
      ],
      users: [
        { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
        { id: 'u2', fullName: 'Praveen Kumar', role: 'Engineer' },
        { id: 'u3', fullName: 'Julie Jones', role: 'Engineer' },
        { id: 'u4', fullName: 'Alex Blackfield', role: 'Consultant' },
        { id: 'u5', fullName: 'Marie Smith', role: 'Consultant' },
      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  },
  // methods: {
  //   setActivePage(page) {
  //     this.activePage = page;
  //   },
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
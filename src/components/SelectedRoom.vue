<template>
  <div>
    <user_list></user_list>
    <room></room>
  </div>
</template>

<script>
import UserList from "./UserList";
import Room from "./Room";
export default {
  created() {},
  components: {
    user_list: UserList,
    room: Room,
  },
};
</script>
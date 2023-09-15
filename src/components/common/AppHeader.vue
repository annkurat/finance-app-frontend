<template>
	<header class="header">
		<img src="../../assets/images/logo.png" alt="Logo" width="30" height="30" />
		<p class="header__user-name">{{ user.first_name }} {{ user.last_name }}</p>
	</header>
</template>

<script>
export default {
	computed: {
		user() {
			return this.$store.state.user || {};
		},
	},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: $color-gray-light-1;
	padding: 1.25rem 2rem;

	&__user-name {
		font-weight: bold;
	}
}
</style>

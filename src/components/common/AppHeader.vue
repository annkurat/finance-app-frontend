<template>
	<header class="header">
		<img src="../../assets/images/logo.png" alt="Logo" width="30" height="30" />
		<p class="header__user-name">Anneli Kurut</p>
	</header>
</template>

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

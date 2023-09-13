<template>
	<div class="recent-stocks">
		<p class="recent-stocks__title">Most Profitable Clients</p>
		<div class="stocks-container">
			<div class="stock">
				<p class="stock__title">John</p>
				<p class="stock__value">5120.00€</p>
			</div>
			<div class="stock">
				<p class="stock__title">Ann</p>
				<p class="stock__value">1522.00€</p>
			</div>
			<div class="stock">
				<p class="stock__title">Ingrid</p>
				<p class="stock__value">956.00€</p>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.recent-stocks {
	padding: 1rem 3rem;

	@include respond(tab-land) {
		padding: 1rem 1.5rem;
	}

	@include respond(phone) {
		padding: 1rem 0.5rem;
	}

	&__title {
		font-weight: bold;
		margin-bottom: 1rem;
	}
}
.stocks-container {
	display: grid;
	row-gap: 0.4rem;
}

.stock {
	border-radius: 0.4rem;
	background-color: $color-gray-light-1;
	padding: 0.5rem 1rem;
	display: flex;
	justify-content: space-between;
	color: $color-gray;
}
</style>

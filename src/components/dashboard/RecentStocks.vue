<template>
	<div class="recent-stocks">
		<p class="recent-stocks__title">Recent stocks</p>
		<div v-if="stocks.length" class="stocks-container">
			<div v-for="stock in stocks" :key="stock.id" class="stock">
				<p class="stock__title">{{ stock.name }}</p>
				<p class="stock__value">{{ stock.price }}€</p>
			</div>
		</div>
		<div v-else class="empty-block">
			<p class="empty-text">There are no stocks at the moment</p>
		</div>
	</div>
</template>
<script>
import axios from "axios";

export default {
	data() {
		return {
			stocks: [],
		};
	},
	created() {
		axios
			.get("/api/stock/")
			.then((response) => {
				this.stocks = response.data;
				this.stocks.sort(
					(a, b) => new Date(b.created_at) - new Date(a.created_at)
				);
				this.stocks = this.stocks.slice(0, 3);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	},
};
</script>

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

<template>
	<div class="dashboard">
		<div class="main-section">
			<GeneralInformation :user="user" />
			<TransactionsTable :user="user" />
		</div>
		<div class="additional-info">
			<RecentStocks />
			<MostProfitableClients />
		</div>
	</div>
</template>

<script>
import GeneralInformation from "@/components/dashboard/GeneralInformation.vue";
import RecentStocks from "@/components/dashboard/RecentStocks.vue";
import TransactionsTable from "@/components/dashboard/TransactionsTable.vue";
import MostProfitableClients from "@/components/dashboard/MostProfitableClients.vue";

export default {
	components: {
		GeneralInformation,
		RecentStocks,
		TransactionsTable,
		MostProfitableClients,
	},
	computed: {
		user() {
			return this.$store.state.user || {};
		},
	},
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.dashboard {
	display: grid;
	grid-template-columns: repeat(1, 75% 25%);
	margin-top: 1rem;

	@include respond(tab-land) {
		grid-template-columns: repeat(1, 60% 40%);
	}
	@include respond(tab-port) {
		grid-template-columns: repeat(1, 100%);
	}
}
.main-section {
	padding-inline: 3rem;

	@include respond(tab-land) {
		padding-inline: 1.5rem;
	}

	@include respond(phone) {
		padding-inline: 0.5rem;
	}
}
</style>

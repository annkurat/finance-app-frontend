<template>
	<AppHeader />
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
	<AppFooter />
</template>

<script>
import AppHeader from "@/components/common/AppHeader.vue";
import AppFooter from "@/components/common/AppFooter.vue";
import GeneralInformation from "@/components/dashboard/GeneralInformation.vue";
import RecentStocks from "@/components/dashboard/RecentStocks.vue";
import TransactionsTable from "@/components/dashboard/TransactionsTable.vue";
import MostProfitableClients from "@/components/dashboard/MostProfitableClients.vue";
import axios from "axios";

export default {
	components: {
		AppHeader,
		AppFooter,
		GeneralInformation,
		RecentStocks,
		TransactionsTable,
		MostProfitableClients,
	},
	created() {
		axios
			.get("/api/user/", {
				params: {
					email: "annelikurut@gmail.com",
				},
			})
			.then((response) => {
				this.$store.commit("setUser", response.data[0]);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
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
	margin-block: 1rem 3rem;

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

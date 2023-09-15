<template>
	<div class="profitable-clients">
		<p class="profitable-clients__title">Most Profitable Clients</p>
		<div v-if="users.length" class="profitable-clients-container">
			<div
				v-for="user in users"
				:key="user.id"
				class="client"
				@click="() => showClientInfo(user)">
				<p class="client__title">{{ user.first_name }}</p>
				<p class="client__value">{{ user.current_balance }}€</p>
			</div>
		</div>
		<div v-else class="empty-block">
			<p class="empty-text">There are no clients at the moment</p>
		</div>
	</div>
	<AppModal ref="modal" :title="user.first_name + ' ' + user.last_name">
		<TransactionsTable :isShowButton="false" :user="user" />
	</AppModal>
</template>
<script>
import axios from "axios";
import AppModal from "@/components/AppModal.vue";
import TransactionsTable from "@/components/dashboard/TransactionsTable.vue";
export default {
	data() {
		return {
			users: [],
			user: {},
		};
	},
	components: {
		AppModal,
		TransactionsTable,
	},
	created() {
		axios
			.get("/api/user/")
			.then((response) => {
				this.users = response.data;
				this.users.sort(
					(a, b) => new Date(b.current_balance) - new Date(a.current_balance)
				);
				this.users = this.users.slice(0, 3);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	},
	methods: {
		showClientInfo(user) {
			this.user = user;
			this.$refs.modal.show();
		},
	},
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.profitable-clients {
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
.profitable-clients-container {
	display: grid;
	row-gap: 0.4rem;
}

.client {
	border-radius: 0.4rem;
	background-color: $color-gray-light-1;
	padding: 0.5rem 1rem;
	display: flex;
	justify-content: space-between;
	color: $color-gray;
	cursor: pointer;
}

.modal {
	&__text {
		font-weight: bold;
	}
}
</style>

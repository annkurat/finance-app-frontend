<template>
	<div class="transactions">
		<div class="transactions__header">
			<p class="transactions__title">Transactions</p>
			<button
				v-if="isShowButton"
				class="transactions__button"
				@click="onCreateClick">
				Create new purchase
			</button>
		</div>
		<div v-if="transactions.length" class="table-responsive">
			<table class="table">
				<thead>
					<tr>
						<th>Stock</th>
						<th>Volume</th>
						<th>Purchase price</th>
						<th>Current price</th>
						<th>Profit/Loss</th>
						<th>Purchase time</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="transaction in transactions" :key="transaction.id">
						<td>{{ transaction.stock.name }}</td>
						<th>{{ transaction.volume }}</th>
						<th>{{ transaction.purchase_price }}€</th>
						<th>{{ transaction.stock.price }}€</th>
						<th>
							{{
								transaction.purchase_price -
								(transaction.stock.price * transaction.volume).toFixed(2)
							}}€
						</th>
						<td>{{ transaction.created_at }}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div v-else class="empty-block">
			<p class="empty-text">There are no transactions at the moment</p>
		</div>
	</div>

	<AppModal ref="modal" title="Create new purchase">
		<div class="modal__content">
			<VueSelect
				class="modal__select"
				placeholder="Choose stock"
				:options="stocks"
				label="name"
				@option:selected="changeStock" />
			<input v-model="volume" class="modal__field" type="number" min="0" />
			<span v-if="selectedStock.price && volume !== 0" class="modal__desc"
				>Price: {{ selectedStock.price }} * {{ volume }} =
				{{ (selectedStock.price * volume).toFixed(2) }}€</span
			>
			<button class="modal__button" @click="onPurchaseClick">Purchase</button>
		</div>
	</AppModal>
</template>

<script>
import AppModal from "@/components/AppModal.vue";
import VueSelect from "vue-select";
import axios from "axios";

export default {
	data() {
		return {
			stocks: [],
			selectedStock: {},
			volume: 0,
			transactions: [],
		};
	},
	props: {
		isShowButton: { type: Boolean, default: true },
		user: { type: Object, required: true },
	},
	components: {
		AppModal,
		VueSelect,
	},

	mounted() {
		axios
			.get("/api/transaction/", {
				params: {
					user_id: this.user?.id,
				},
			})
			.then((response) => {
				this.transactions = response.data;
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	},
	methods: {
		onCreateClick() {
			this.$refs.modal.show();
			axios
				.get("/api/stock/")
				.then((response) => {
					this.stocks = response.data;
				})
				.catch((error) => {
					console.error("Error:", error);
				});
		},
		changeStock(e) {
			this.selectedStock = e;
		},
		onPurchaseClick() {
			const transactionData = {
				user_id: this.user.id,
				stock_id: this.selectedStock.id,
				volume: this.volume,
				purchase_price: (this.selectedStock.price * this.volume).toFixed(2),
			};
			axios
				.post("/api/transaction/", transactionData)
				.then((response) => {
					this.transactions.push(response.data);
					this.$refs.modal.close();
				})
				.catch((error) => {
					console.error("Error creating transaction:", error);
				});
		},
	},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.transactions {
	padding-block: 1rem;

	@include respond(tab-land) {
		padding-block: 1rem;
	}

	@include respond(phone) {
		padding-block: 1rem;
	}

	&__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}

	&__title {
		font-weight: bold;
	}

	&__button {
		padding: 0.5rem 1rem;
		border: 0;
		border-radius: 0.4rem;
		background-color: $color-gray-light-2;
		color: $color-gray-dark-1;
		font-size: 0.8rem;
		cursor: pointer;
	}
}

.table {
	background-color: $color-gray-light-1;
	border-radius: 0.4rem;

	thead {
		text-align: center;
		text-wrap: nowrap;

		th {
			border-top: 0;
		}
	}

	tbody th,
	td:last-child {
		text-align: center;
	}

	.green {
		color: $color-green;
	}

	.red {
		color: $color-red;
	}
}

.modal {
	&__content {
		margin-block: 0.5rem;
		display: grid;
		gap: 0.75rem;
	}
	&__field {
		border: 1px solid $color-gray-light-2;
		border-radius: 0.4rem;
		padding: 0.25rem 0.5rem;

		&:focus {
			outline: 1px solid $color-gray-light-3;
		}
	}
	&__button {
		border: 0;
		border-radius: 0.4rem;
		padding-block: 0.25rem;
		cursor: pointer;
	}
	&__desc {
		font-size: 0.8rem;
		color: $color-gray-light-3;
	}
}
</style>

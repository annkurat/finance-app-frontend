<template>
	<div class="transactions">
		<div class="transactions__header">
			<p class="transactions__title">Transactions</p>
			<button class="transactions__button" @click="onCreateClick">
				Create new purchase
			</button>
		</div>
		<div class="table-responsive">
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
					<tr>
						<td>Adcash OÜ</td>
						<th>10</th>
						<th>5.00€</th>
						<th>10.00€</th>
						<th class="green">+10.00€</th>
						<td>10.09.2023 10:46</td>
					</tr>
					<tr>
						<td>Google</td>
						<th>10</th>
						<th>5.00€</th>
						<th>10.00€</th>
						<th class="red">-810.00€</th>
						<td>10.09.2023 10:46</td>
					</tr>
					<tr>
						<td>Apple</td>
						<th>10</th>
						<th>5.00€</th>
						<th>10.00€</th>
						<th class="green">1130.00€</th>
						<td>10.09.2023 10:46</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

	<AppModal ref="modal" title="Create new purchase">
		<div class="modal__content">
			<VueSelect
				class="modal__select"
				placeholder="Choose stock"
				:options="stocks"
				label="stocks"
				@option:selected="changeStock" />
			<input class="modal__field" type="number" min="0" />
			<button class="modal__button" @click="onPurchaseClick">Purchase</button>
		</div>
	</AppModal>
</template>

<script>
import AppModal from "@/components/AppModal.vue";
import VueSelect from "vue-select";

export default {
	data() {
		return {
			stocks: ["Adcash OÜ", "Google", "Apple"],
		};
	},
	components: {
		AppModal,
		VueSelect,
	},
	methods: {
		onCreateClick() {
			this.$refs.modal.show();
		},
		changeStock() {
			console.log("changed");
		},
		onPurchaseClick() {
			console.log("clicked");
		},
	},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.transactions {
	padding: 1rem 3rem;

	@include respond(tab-land) {
		padding: 1rem 1.5rem;
	}

	@include respond(phone) {
		padding: 1rem 0.5rem;
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
}
</style>

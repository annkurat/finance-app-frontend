<template>
	<div class="general-info">
		<p class="general-info__title">General information</p>
		<div class="additional-blocks-container">
			<div class="additional-block">
				<span class="additional-block__title">Current Balance</span>
				<p class="additional-block__value">{{ user.current_balance }}€</p>
			</div>
			<div class="additional-block">
				<span class="additional-block__title">Total Profit/Loss</span>
				<p class="additional-block__value additional-block__value--green">
					+100.00€
				</p>
			</div>
			<div class="additional-block">
				<span class="additional-block__title">Total Portfolio Value</span>
				<p class="additional-block__value">441.00€</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		user: { type: Object, required: true },
	},
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.general-info {
	padding-block: 1rem;

	@include respond(tab-land) {
		padding-block: 1rem;
	}

	@include respond(phone) {
		padding-block: 1rem;
	}

	&__title {
		font-weight: bold;
		margin-bottom: 1rem;
	}
}

.additional-blocks-container {
	display: flex;
	gap: 0.5rem;

	@include respond(phone) {
		flex-direction: column;
	}
}

.additional-block {
	background-color: $color-gray-light-1;
	border-radius: 0.4rem;
	padding: 0.8rem 1.25rem 1rem;
	max-width: 300px;
	width: 100%;

	@include respond(phone) {
		max-width: 100%;
	}

	&__title {
		font-size: 0.8rem;
	}
	&__value {
		font-weight: bold;
		font-size: 1.1rem;
		margin-top: 0.35rem;
		&--green {
			color: $color-green;
		}
	}
}
</style>

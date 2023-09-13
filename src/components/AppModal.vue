<template>
	<div v-if="isShow" class="modal-container" @click="onClose">
		<div @click.stop class="custom-modal">
			<div class="custom-modal__header">
				<p class="custom-modal__title">{{ title }}</p>
				<span @click="onClose" class="custom-modal__close">✕</span>
			</div>
			<div class="custom-modal__body">
				<slot />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isShow: false,
		};
	},
	props: {
		title: { type: String, required: true },
	},
	methods: {
		show() {
			this.isShow = true;
		},
		onClose() {
			this.isShow = false;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";
.modal-container {
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
}

.custom-modal {
	margin: 4rem auto;
	border-radius: 0.4rem;
	background-color: #fff;
	max-width: 600px;

	&__header {
		border-bottom: 2px solid $color-gray-light-2;
		font-weight: bold;
		font-size: 1.1rem;
		display: flex;
		align-items: center;
		padding: 0.5rem 1rem;
	}

	&__close {
		font-weight: 400;
		font-size: 24px;
		margin-left: auto;
		transition: opacity ease-in 0.25s;
		&:hover {
			opacity: 0.5;
			cursor: pointer;
		}
	}

	&__body {
		padding: 0.5rem 1rem;
	}
}
</style>

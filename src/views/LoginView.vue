<template>
	<div class="wrapper">
		<div class="login-form">
			<div class="login-form__title-wrap">
				<p class="login-form__title">Login To Finance App</p>
			</div>

			<form class="form">
				<label class="form__label" for="email">Email</label>
				<input
					class="form__input"
					v-model="email"
					type="email"
					id="email"
					required />

				<label class="form__label" for="password">Password</label>
				<input
					class="form__input"
					v-model="password"
					type="password"
					id="password"
					required />

				<button @click="onLoginClick" class="form__btn form__btn--disabled">
					Login
				</button>
				<p class="form__text">
					Don't have an account?
					<router-link class="form__link" to="/registration"
						>Register now</router-link
					>
				</p>
			</form>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			email: "",
			password: "",
		};
	},
	methods: {
		onLoginClick() {
			this.$router.push({ path: "/dashboard" });
		},
	},
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

@keyframes scaleUp {
	0% {
		opacity: 0.7;
		scale: 0.3;
	}
	60% {
		opacity: 1;
		scale: 1.1;
	}
	100% {
		scale: 1;
	}
}
.wrapper {
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(
		to top,
		$color-orange-100,
		$color-orange-200,
		$color-orange-300
	);

	@include respond(phone) {
		align-items: normal;
	}
}

.login-form {
	box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.05);
	animation: scaleUp 0.5s ease-out;
	background: rgba(white, 0.7);
	border-radius: 10px;

	@include respond(phone) {
		animation: none;
		width: 100%;
		border-radius: 0;
	}

	&__title-wrap {
		border-bottom: 2px solid rgba(255, 255, 255, 0.5);
	}

	&__title {
		text-align: center;
		margin-block: 1.1rem;
		font-weight: bold;
		font-size: 1.25rem;
		color: $color-orange-800;
	}
}

.form {
	display: flex;
	flex-direction: column;
	padding: 1.5rem 2rem;
	width: 27rem;

	@include respond(phone) {
		width: 100%;
		padding: 1.5rem 0.75rem;
	}

	&__label {
		margin-bottom: 0.25rem;
		font-size: 0.9rem;
		color: $color-orange-800;
		font-weight: 600;

		@include respond(phone) {
			font-size: 0.8rem;
		}
	}

	&__input {
		background: #fff;
		padding: 0.65rem 0.6rem;
		border: 1px solid transparent;
		font-size: 16px;
		border-radius: 8px;
		margin-bottom: 0.8rem;
		transition: all 0.3s;
		border-bottom: 3px solid transparent;

		&:last-of-type {
			margin-bottom: 1.75rem;
		}

		&:focus {
			border-bottom: 3px solid #55c57a;
			outline: none;
			&:invalid {
				border-bottom: 3px solid $color-orange-500;
			}
		}
	}

	&__btn {
		text-transform: uppercase;
		border: 0;
		border-radius: 8px;
		padding: 0.5rem 0.75rem;
		background-color: $color-orange-200;
		color: #fff;
		transition: background-color 0.25s ease-out;
		outline: none;

		&:hover,
		&:focus {
			background-color: $color-orange-500;
			cursor: pointer;
		}
	}

	&__error {
		font-size: 15px;
		margin-bottom: 5px;
		color: #f74040;
	}

	&__text {
		margin-top: 1rem;
		text-align: center;
		font-size: 0.8rem;
	}

	&__link {
		font-weight: bold;
		color: $color-orange-500;
		position: relative;
		text-decoration: none;
		outline: none;

		&::before {
			content: "";
			position: absolute;
			bottom: 0px;
			left: 0;
			width: 0;
			height: 2px;
			background-color: rgba($color-orange-500, 0.5);
			transition: width 0.5s cubic-bezier(1, 0, 0, 1);
		}

		&:hover,
		&:focus {
			&::before {
				width: 100%;
			}
		}
	}
}
</style>

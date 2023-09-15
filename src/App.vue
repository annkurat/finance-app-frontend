<template>
	<AppHeader />
	<AppDashboard />
</template>

<script>
import AppHeader from "@/components/common/AppHeader.vue";
import AppDashboard from "@/components/dashboard/AppDashboard.vue";
import axios from "axios";

export default {
	components: {
		AppHeader,
		AppDashboard,
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
};
</script>

<template>
	<AppHeader />
	<AppDashboard />
</template>

<script>
import AppHeader from "@/components/common/AppHeader.vue";
import AppDashboard from "@/components/dashboard/AppDashboard.vue";

export default {
	components: {
		AppHeader,
		AppDashboard,
	},
};
</script>

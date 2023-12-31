const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
	publicPath:
		process.env.NODE_ENV === "production" ? "/finance-app-frontend/" : "/",
	devServer: {
		proxy: {
			"/api": {
				target: "http://127.0.0.1:8000/",
				changeOrigin: true,
			},
		},
	},
});

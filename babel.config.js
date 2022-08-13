module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module-resolver",
				{
					alias: {
						entities: "./src/entities",
						config: "./src/config",
						game: "./src/game",
						screen: "./src/screen",
						shared: "./src/shared",
						types: "./src/types",
					},
				},
			],
		],
	};
};

// must restart server whenever you make changes in next.config
module.exports = {
	env: {
		MONGO_SRV:
			"mongodb+srv://keangkai:keangkai>@reactreserve-3lxc6.mongodb.net/test?retryWrites=true&w=majority",
		JWT_SECRET: "<insert-jwt-secret>",
		CLOUDINARY_URL: "<insert-cloudinary-url>",
		STRIPE_SECRET_KEY: "<insert-stripe-secret-key>"
	}
}

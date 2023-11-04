export const authMiddleware = (req, res, next) => {
	if (req) {
		next();
	} else {
		// throw new Error('Authentication middleware is not available');
		return res.status(400).json({ message: 'auth failed' });
	}
};

// authentication
// user -> login or register  success -> authentication

// authorization
// user -> permission(post de) -> authorization

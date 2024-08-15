import { UnAuthenticatedError } from '../errors/index.js'

const adminPermissions = (requestUser) => {
	if (requestUser && requestUser.isAdmin) {
		return true
	} else {
		throw new UnAuthenticatedError(
			'You are not authorised to perform this action'
		)
	}
}

export default adminPermissions

import styled from 'styled-components'

const Wrapper = styled.article`
	background: var(--white);
	border-radius: var(--borderRadius);
	display: grid;
	grid-template-rows: 1fr auto;
	box-shadow: var(--shadow-2);
	header {
		padding: 1rem 1.5rem;
		border-bottom: 1px solid var(--grey-100);
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		h5 {
			letter-spacing: 0;
		}
	}
	.main-icon {
		width: 60px;
		height: 60px;
		display: grid;
		place-items: center;
		background: var(--primary-500);
		border-radius: var(--borderRadius);
		font-size: 1.5rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--white);
		margin-right: 2rem;
	}
	.info {
		h5 {
			margin-bottom: 0.1rem;
		}
		p {
			margin: 0;
			color: var(--grey-400);
			letter-spacing: var(--letterSpacing);
		}
	}
	.content {
		padding: 1rem 1.5rem;
	}
	footer {
		margin-top: 1rem;
	}
	.delete-btn {
		letter-spacing: var(--letterSpacing);
		cursor: pointer;
		height: 30px;
		color: var(--red-dark);
		background: var(--red-light);
	}
	&:hover .actions {
		visibility: visible;
	}
`

export default Wrapper

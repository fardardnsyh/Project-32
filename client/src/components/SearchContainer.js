import { FormRow, FormRowSelect } from '.'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/SearchContainer'

const SearchContainer = () => {
	const {
		isLoading,
		search,
		searchStatus,
		statusOptions,
		searchType,
		jobTypeOptions,
		searchStyle,
		jobStyleOptions,
		sort,
		sortOptions,
		handleChange,
		clearFilters,
	} = useAppContext()

	// if user sending a req, user wont be able to type something new. so use isLoading
	const handleSearch = (e) => {
		if (isLoading) return
		handleChange({ name: e.target.name, value: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		clearFilters()
	}

	return (
		<Wrapper>
			<form className='form'>
				<h4>Search</h4>
				<div className='form-center'>
					<FormRow
						type='text'
						name='search'
						value={search}
						handleChange={handleSearch}
					/>
					<FormRowSelect
						labelText='status'
						name='searchStatus'
						value={searchStatus}
						handleChange={handleSearch}
						list={['all', ...statusOptions]}
					/>
					<FormRowSelect
						labelText='Job Type'
						name='searchType'
						value={searchType}
						handleChange={handleSearch}
						list={['all', ...jobTypeOptions]}
					/>
					<FormRowSelect
						labelText='Job Style'
						name='searchStyle'
						value={searchStyle}
						handleChange={handleSearch}
						list={['all', ...jobStyleOptions]}
					/>
					<FormRowSelect
						labelText='Sort'
						name='sort'
						value={sort}
						handleChange={handleSearch}
						list={sortOptions}
					/>
					<button
						className='btn btn-block btn-danger'
						disabled={isLoading}
						onClick={handleSubmit}
					>
						clear filters
					</button>
				</div>
			</form>
		</Wrapper>
	)
}

export default SearchContainer

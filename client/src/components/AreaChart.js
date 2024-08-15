import {
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	AreaChart,
	Area,
} from 'recharts'

const AreaChartComponent = ({ data }) => {
	return (
		<ResponsiveContainer width='100%' height={300}>
			<AreaChart data={data} margin={{ top: 50 }}>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='date' />
				<YAxis allowDecimals={false} />
				<Tooltip />
				<Area
					type='monotone'
					dataKey='count'
					stroke='#994aff'
					fill='#e2ccff'
				/>
			</AreaChart>
		</ResponsiveContainer>
	)
}

export default AreaChartComponent

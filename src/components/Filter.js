import React, { useContext } from 'react'
import { AppContext } from '../App'
let year = 2006;


const Filter = () => {
	const { spaceDetails, setSpaceDetails } = useContext(AppContext)
	// console.log(spaceDetails);

	const handleLaunchTrueFilter = (e) => {
		setSpaceDetails(prevState => ({ ...prevState, launch_success: true }))
	}

	const handleLaunchFalseFilter = (e) => {
		setSpaceDetails(prevState => ({ ...prevState, launch_success: false }))
	}

	const handleLandTrueFilter = (e) => {
		setSpaceDetails(prevState => ({ ...prevState, land_success: true }))
	}

	const handleLandFalseFilter = (e) => {
		setSpaceDetails(prevState => ({ ...prevState, land_success: false }))
	}

	const handleYearFilter = (e) => {
		setSpaceDetails(prevState => ({ ...prevState, launch_year: e.target.value }))
	}
	return (
		<div className='filterDiv'>
			<h4 style={{ alignSelf: 'flex-start' }}>Filters</h4>
			<p className='m0'>Launch Year</p>
			<hr className='m2 hrStyle' />
			<div className='childFilterDiv'>
				{[...Array(15)].map((e, i) => {
					return (
						<div className='filterBoxes' key={i}>
							<input type="radio" name="year" id={i} value={year+i} onClick={handleYearFilter} />
							<label className='btnFilter' htmlFor={i} >{year + i}</label>
						</div>
					)
				})}
			</div>

			<p className='m0'>Successful Launch</p>
			<hr className='m2 hrStyle' />
			<div className='childFilterDiv'>
				<div className='filterBoxes' >
					<input type="radio" name="launch" id='launch_true'  onClick={handleLaunchTrueFilter}/>
					<label htmlFor='launch_true' className='btnFilter'>True</label>
				</div>
				<div className='filterBoxes'>
					<input type="radio" name="launch" id='launch_false' />
					<label htmlFor='launch_false' className='btnFilter' onClick={handleLaunchFalseFilter}>False</label>
				</div>

			</div>

			<p className='m0'>Successful Landing</p>
			<hr className='m2 hrStyle' />
			<div className='childFilterDiv'>
				<div className='filterBoxes'>
					<input type="radio" name="land" id='land_true' />
					<label htmlFor='land_true' className='btnFilter' onClick={handleLandTrueFilter}>True</label>
				</div>
				<div className='filterBoxes'>
					<input type="radio" name="land" id='land_false' onClick={handleLandFalseFilter} />
					<label htmlFor='land_false' className='btnFilter' >False</label>
				</div>
			</div>
		</div >
	)
}

export default Filter
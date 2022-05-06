import React from 'react'

const SpaceXInfo = ({ data }) => {

	// console.log(data.length)
	return (
		<div className='card'>
			{data.map((e, i) => {
				let { launch_success } = e
				let land_success = e.rocket.first_stage.cores[0].land_success
				return (
					<div key={e.flight_number} className="childCard">
						<div style={{ backgroundColor: 'gainsboro', height: '180px', margin: '4px' }}>
							<img src={e.links.mission_patch_small} style={{ height: 'inherit' }} alt="" />
						</div>
						<h5 style={{ margin: '4px', color: '#410877' }}>{e.mission_name} #{e.flight_number}</h5>
						<ul className='p0 dataStyle'>Mission_ids:
							{e.mission_id.length > 0 ? e.mission_id?.map((id, i) => {
								return (
									<li className='missionIdStyle' key={i}>{id}</li>
								)
							}) : <span> Null</span>}
						</ul>
						<p className='dataStyle'>Launch Year: {e.launch_year}</p>
						<p className='dataStyle'>Successful Launch: {launch_success!==null ? launch_success.toString() : 'Unknown'}</p>
						<p className='dataStyle'>Successful Landing: {land_success!==null ? land_success.toString() : 'Unknown'}</p>
					</div>
				)
			})}
		</div>
	)
}

export default SpaceXInfo
import { AllTripsReducerElements } from '../../../redux/allTripsReducer'

const TripsTableRow = ({
    from,
    where,
    type,
    number,
    date,
    time,
    seats,
}: AllTripsReducerElements) => {
    return (
        <tr>
            <td style={{ fontWeight: 500 }}>{number}</td>
            <td className='text-main_gray'>{type}</td>
            <td style={{ fontWeight: 500 }}>{from}</td>
            <td style={{ fontWeight: 500 }}>{where}</td>
            <td className='text-main_gray'>{seats}</td>
            <td className='text-main_gray'>{date}</td>
            <td className='text-main_gray'>{time}</td>
        </tr>
    )
}

export default TripsTableRow

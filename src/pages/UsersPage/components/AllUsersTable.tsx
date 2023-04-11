import TableRow from './TableRow'

const AllUsersTable = () => {
    return (
        <table
            className='table'
            style={{
                minWidth: '1000px',
            }}
        >
            <thead>
                <tr style={{ fontSize: '14px' }}>
                    <th scope='col'>Name</th>
                    <th scope='col'>Email Address</th>
                    <th scope='col'>Phone</th>
                    <th scope='col'>Labels</th>
                    <th scope='col'>Date Created</th>
                </tr>
            </thead>
            <tbody>
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
            </tbody>
        </table>
    )
}

export default AllUsersTable

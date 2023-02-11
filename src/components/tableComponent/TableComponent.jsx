import { Avatar, createTheme, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemeProvider } from '@mui/material'


const TableComponent = ({ searchData }) => {

    const theme = createTheme({
        typography: {
            fontFamily: [
                "Inter", "sans-serif"
            ].join(',')
        }
    })


    return (
        <>
            <ThemeProvider theme={theme}>
                <TableContainer component={Paper} sx={{ maxHeight: "404px", maxWidth: "640px" }}>
                    <Table stickyHeader sx={{ maxWidth: "640px" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" sx={{ fontSize: "12px", color: "#475467", backgroundColor: "#F9FAFB", fontWeight: "500" }}>User</TableCell>
                                <TableCell align="left" sx={{ fontSize: "12px", color: "#475467", backgroundColor: "#F9FAFB", fontWeight: "500" }}>Email</TableCell>
                                <TableCell align="left" sx={{ fontSize: "12px", color: "#475467", backgroundColor: "#F9FAFB", fontWeight: "500" }}>Age</TableCell>
                                <TableCell align="left" sx={{ fontSize: "12px", color: "#475467", backgroundColor: "#F9FAFB", fontWeight: "500" }}>Gender</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {searchData.length ? searchData.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell component="th" scope="row" sx={{ display: "flex", alignItems: "center", gap: "12px", fontWeight: "500" }}><Avatar alt={`${item.firstName} ${item.lastName}`} src={item.image} />{item.firstName + " " + item.lastName}</TableCell>
                                    <TableCell sx={{ fontWeight: "400", color: "#475467" }}>{item.email}</TableCell>
                                    <TableCell sx={{ fontWeight: "400", color: "#475467" }}>{item.age}</TableCell>
                                    <TableCell sx={{ fontWeight: "400", color: "#475467", textTransform: "capitalize" }}>{item.gender}</TableCell>
                                </TableRow>
                            )) : <TableRow><TableCell colSpan={4}>No Items Found</TableCell></TableRow>}
                        </TableBody>
                    </Table>
                </TableContainer>
            </ThemeProvider>
        </>
    )
}

export default TableComponent
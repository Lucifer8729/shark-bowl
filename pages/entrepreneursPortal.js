import React from 'react'
import { flexbox } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';


export default function EntrepreneursPortal() {

    <style jsx>{`

  `}</style>

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    p: 1,
                    my: 5,
                    mx: 12,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                }}
            >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>

                    <Grid item xs={5} sx={{ m: 2 }} >
                        <Typography variant="h5">Find Entrepreneurs and Connect!</Typography>
                        <Box sx={{ my: 4 }}>
                            <Typography variant="h6">Filter Results by:</Typography>
                            <Input placeholder="Search" />
                        </Box>

                        <Box sx={{ my: 4 }}>
                            <Typography variant="h6">Industry:</Typography>
                            <Input placeholder="" />
                        </Box>

                        <Box sx={{ my: 4 }}>
                            <Typography variant="h6">Experties:</Typography>
                            <Input placeholder="" />
                        </Box>

                        <Button variant="outlined">Filter Results</Button>

                    </Grid>

                    <Grid item xs={5} sx={{ mx: 2, mt: 18 }} >

                        <Box sx={{ my: 4 }}>
                            <Typography variant="h6">Language:</Typography>
                            <Input placeholder="" />
                        </Box>

                        <Box sx={{ my: 4 }}>
                            <Typography variant="h6">Country of Operation:</Typography>
                            <Input placeholder="" />
                        </Box>

                    </Grid>

                </Grid>
            </Box>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid>
                    
                </Grid>
            </Grid>

        </div>
    )
}

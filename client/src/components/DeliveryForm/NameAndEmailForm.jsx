import { Box, TextField, Typography } from '@mui/material';
import React from 'react';

const fieldsName = [
    {
        name: 'name',
        validation: { maxLength: 30, message: 'Too long name' }
    },
    {
        name: 'email',
        validation: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address'
        }
    }
];

const NameAndEmailForm = ({ fields = fieldsName, register, errors }) => {
    return (
        <>
            {fields.map(nameField => (
                <Box
                    key={nameField.name}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        pt: '30px'
                    }}
                >
                    <TextField
                        sx={{
                            width: '80%',
                            m: '0 auto',
                            '.css-x6vx7i-MuiInputBase-root-MuiOutlinedInput-root':
                                { color: 'white' },
                            '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white'
                            }
                        }}
                        color='primary'
                        label={nameField.name}
                        variant='outlined'
                        {...register(nameField.name, {
                            required: 'Field is required',
                            pattern: nameField.validation
                        })}
                    />
                    <Typography component={'div'}>
                        {errors[nameField.name] && (
                            <Typography color={'red'} textAlign={'center'}>
                                {errors[nameField.name].message || 'Error'}
                            </Typography>
                        )}
                    </Typography>
                </Box>
            ))}
        </>
    );
};

export default NameAndEmailForm;

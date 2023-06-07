import { Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import { Box, Typography } from '@mui/material';
import 'react-phone-input-2/lib/style.css';

const PhoneForm = ({ register, errors, control }) => {
    return (
        <Box
            sx={{
                '.react-tel-input': {
                    display: 'flex',
                    justifyContent: 'center',
                    mt: '30px'
                },
                '.react-tel-input .form-control': {
                    bgcolor: 'inherit',
                    border: '1px solid #FFFFFF',
                    height: '56px',
                    width: '80%',
                    color: 'white',
                    p: '10px'
                },
                '.react-tel-input .flag-dropdown': {
                    display: 'none'
                }
            }}
        >
            <Controller
                render={({ field }) => (
                    <PhoneInput
                        country={'ua'}
                        onlyCountries={['ua']}
                        disableDropdown={true}
                        countryCodeEditable={false}
                        inputRef={register}
                        inputProps={{
                            name: 'phone',
                            required: 'Invalid number format'
                        }}
                        id='phone'
                        onChange={value => field.onChange(value)}
                        error={!!errors.phone}
                    />
                )}
                name='phone'
                control={control}
                rules={{
                    required: 'Invalid number format',
                    minLength: 12
                }}
            />

            <Typography component={'div'}>
                {errors.phone && (
                    <Typography color={'red'} textAlign={'center'}>
                        {errors.phone.message || 'Invalid number format'}
                    </Typography>
                )}
            </Typography>
        </Box>
    );
};

export default PhoneForm;

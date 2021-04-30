import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import locale from '../../locale'
import { Routes } from '../../constants'
import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        width: '50%',
        margin: '0 auto 2rem auto',
        '& img': {
            width: '100%'
        }
    },
    form: {
        width: '100%'
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
    },
    label: {
        textAlign: 'center'
    }
}));

const { AUTH: { LOGIN, HAVE_ACCOUNT, REGISTER, USERNAME, EMAIL, PASSWORD } } = locale

function RegisterComponent({ registerUser }) {
    const { control, handleSubmit } = useForm();
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Box className={classes.logo}>
                    <img src='https://noveogroup.ru/build/images/logo-noveo.e179f24f.svg' alt='noveo'/>
                </Box>
                <form onSubmit={handleSubmit(registerUser)} className={classes.form}>
                    <Controller
                        name="username"
                        control={control}
                        defaultValue=''
                        render={({ field }) =>
                            <TextField
                                {...field}
                                id="username"
                                type="text"
                                label={USERNAME}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                            />}
                    />
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=''
                        render={({ field }) =>
                            <TextField
                                {...field}
                                id="email"
                                type="email"
                                label={EMAIL}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                            />}
                    />
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=''
                        render={({ field }) =>
                            <TextField
                                {...field}
                                id="password"
                                label={PASSWORD}
                                type="password"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                            />}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        {REGISTER}
                    </Button>
                    <Box className={classes.label}>
                        <Link to={Routes.LOGIN}>
                            {`${HAVE_ACCOUNT} ${LOGIN}`}
                        </Link>
                    </Box>
                </form>
            </div>
        </Container>
    );
}

RegisterComponent.propTypes = {
    registerUser: PropTypes.func.isRequired
};

export default RegisterComponent;
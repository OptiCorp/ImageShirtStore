import { ToastContainer, toast } from 'react-toastify';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';

export const notifySuccess = (message: string) =>
	toast.success(message, {
		color: '#343a40',
		minHeight: '60px',
		borderRadius: '8px',
		background: '#ad35d2',
		boxShadow: '2px 2px 20px 2px rgba(0,0,0,0.3)',

		position: 'top-center',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

export const notifyWarning = (message: string) =>
	toast.warn(message, {
		position: 'top-center',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

export const notifyError = (message: string) =>
	toast.error(message, {
		position: 'top-center',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

export const NotifyContainer = () => (
	<ToastContainer
		position='top-center'
		autoClose={5000}
		hideProgressBar={false}
		newestOnTop={false}
		closeOnClick
		rtl={false}
		pauseOnFocusLoss
		draggable
	/>
);

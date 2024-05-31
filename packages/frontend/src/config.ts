const config = {
  // Frontend config
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: 'pk_test_51PLRnF04VOjHA6Wp9UZn913dQtvHgCp7KrlzY4pzcStzzyUIXVnWTEgaFYxmgU5zvR8zryJw3lvzMzCWI1CdsM9b001vXIFuSl',
  
  // Backend config
  s3: {
    REGION: import.meta.env.VITE_REGION,
    BUCKET: import.meta.env.VITE_BUCKET,
  },
  apiGateway: {
    REGION: import.meta.env.VITE_REGION,
    URL: import.meta.env.VITE_API_URL,
  },
  cognito: {
    REGION: import.meta.env.VITE_REGION,
    USER_POOL_ID: import.meta.env.VITE_USER_POOL_ID,
    APP_CLIENT_ID: import.meta.env.VITE_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: import.meta.env.VITE_IDENTITY_POOL_ID,
  },
};

export default config;
